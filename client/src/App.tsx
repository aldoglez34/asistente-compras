import { FC, useCallback, useEffect, useState } from "react";
import { LoadingPage } from "./pages";
import { useFirebase } from "./hooks/useFirebase";
import { USERS, VERSION } from "./utils/constants";
import isEqual from "lodash/isEqual";
import {
  GuestNavigation,
  PurchaserNavigation,
  SupplierNavigation,
} from "./nagivation";

const App: FC = () => {
  const [navigation, setNavigation] = useState<string>();

  useEffect(() => console.log(`Release: ${VERSION}`), []);

  const { firebaseAuth } = useFirebase();

  const getNavigation = useCallback(() => {
    if (!navigation) return <GuestNavigation />;
    switch (navigation) {
      case USERS.GUEST:
        return <GuestNavigation />;
      case USERS.PURCHASER:
        return <PurchaserNavigation />;
      case USERS.SUPPLIER:
        return <SupplierNavigation />;
      default:
        return <GuestNavigation />;
    }
  }, [navigation]);

  // firebaseAuth.signOut();

  useEffect(() => {
    firebaseAuth.onAuthStateChanged(async (user) => {
      if (user?.displayName) {
        // set purchaser navigation
        if (isEqual(user.displayName, USERS.PURCHASER)) {
          // const nav = await handleSetStudentNavigation(user);
          setNavigation(USERS.PURCHASER);
          return;
        }
        // set supplier navigation
        if (isEqual(user.displayName, USERS.SUPPLIER)) {
          // const nav = await handleSetTeacherNavigation(user);
          setNavigation(USERS.SUPPLIER);
          return;
        }
      }
      // default is guest
      setNavigation(USERS.GUEST);
    });
  }, [firebaseAuth]);

  return navigation ? getNavigation() : <LoadingPage />;
};

export default App;
