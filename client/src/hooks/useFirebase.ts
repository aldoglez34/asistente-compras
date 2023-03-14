import {
  getAuth,
  setPersistence,
  signInWithEmailAndPassword,
  browserSessionPersistence,
  browserLocalPersistence,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { isEqual } from "lodash";

export const DEV_CONFIG = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

export const PROD_CONFIG = {
  apiKey: process.env.REACT_APP_API_KEY_PROD,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN_PROD,
  projectId: process.env.REACT_APP_PROJECT_ID_PROD,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET_PROD,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID_PROD,
  appId: process.env.REACT_APP_APP_ID_PROD,
};

type loginUserToFirebaseProps = {
  email: string;
  password: string;
  persistence?: "session" | "local";
};

export const useFirebase = () => {
  const initializedApp = initializeApp(
    process.env.NODE_ENV === "production" ? PROD_CONFIG : DEV_CONFIG
  );

  const firebaseAuth = getAuth(initializedApp);

  const loginUserToFirebase = async ({
    email,
    password,
    persistence = "local",
  }: loginUserToFirebaseProps) => {
    try {
      // set session's persistence
      if (isEqual(persistence, "session"))
        await setPersistence(firebaseAuth, browserSessionPersistence);
      if (isEqual(persistence, "local"))
        await setPersistence(firebaseAuth, browserLocalPersistence);
      // login user
      await signInWithEmailAndPassword(firebaseAuth, email, password);
    } catch (err) {
      console.log(err);
      throw new Error();
    }
  };

  const logoutUser = async () => {
    try {
      await firebaseAuth.signOut();
    } catch (err) {
      console.log(err);
      throw new Error();
    }
  };

  return {
    firebaseAuth,
    loginUserToFirebase,
    logoutUser,
  };
};
