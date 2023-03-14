import {
  connect as mongooseConnect,
  connection as mongooseConnection,
} from "mongoose";
import { SupplierModel } from "../models";
import { PurchaserModel } from "../models/Purchaser";
import { priceListsMocks } from "../resources/priceListsMocks";
import { purchasersMocks } from "../resources/purchasersMocks";
import { suppliersMocks } from "../resources/suppliersMocks";

const createSneakersMocks = async () => {
  const database = "purchasingDB";

  try {
    console.log(`\n>>> Creating mocks for database: ${database}\n`);

    await mongooseConnect(`mongodb://localhost/${database}`);

    /* ----------------------------- Clean database ----------------------------- */
    console.log("1) Cleaning database...");
    const collections = await mongooseConnection.db.listCollections().toArray();
    for await (const collection of collections) {
      await mongooseConnection.db.dropCollection(collection.name);
    }

    /* -------------------------------- Purchaser ------------------------------- */
    console.log("2) Creating mocks for Purchaser collection...");
    const addPurchasersAsync = purchasersMocks.map(
      (purchaser) => new PurchaserModel(purchaser)
    );
    for await (const addPurchaser of addPurchasersAsync) {
      addPurchaser.save();
    }

    /* -------------------------------- Supplier ------------------------------- */
    console.log("3) Creating mocks for Supplier collection...");
    const addSuppliersAsync = suppliersMocks.map(
      (supplier) => new SupplierModel(supplier)
    );
    for await (const addSupplier of addSuppliersAsync) {
      addSupplier.save();
    }

    console.log(`\n>>> Finished creating mocks for database: ${database}\n`);
  } catch (err) {
    console.warn(err);
  }
};

createSneakersMocks();

module.exports = { createSneakersMocks };
