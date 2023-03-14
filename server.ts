import { config as dotenvConfig } from "dotenv";
import { connect as mongooseConnect } from "mongoose";
import bodyParser from "body-parser";
import errorhandler from "errorhandler";
import express, { Express, Request, Response } from "express";
import morgan from "morgan";
import path from "path";
import responseTime from "response-time";
import routes from "./routes";

const app: Express = express();
const PORT = process.env.PORT || 3001;

dotenvConfig();

// middleware
app.use(morgan("dev"));
app.use(responseTime());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
if (process.env.NODE_ENV === "development") app.use(errorhandler());
if (process.env.NODE_ENV === "production")
  app.use(express.static("client/build"));

// add routes
app.use(routes);

// send every other request to the React app
// define any API routes before this runs
app.get("*", (_req: Request, res: Response) =>
  res.sendFile(path.join(__dirname, "./client/build/index.html"))
);

// connect to the Mongo DB
const databaseName = "purchasingDB";
mongooseConnect(
  process.env.REACT_APP_MONGODB_ATLAS_KEY ||
    `mongodb://localhost/${databaseName}`
)
  .then(() => console.log("Connection to database was successful.\n"))
  .catch((error) => console.log(error));

// start server
app.listen(PORT, () =>
  console.log(`\n🌎 ==> API server listening on port ${PORT}!`)
);
