import { useAtom } from "jotai";
import { getOnePurchaser } from "../services/Purchaser";
import { userAtom } from "../storage/userStore";

export const useCurrentUser = () => {
  const [currentUser, setCurrentUser] = useAtom(userAtom);

  const setUserInStore = async (firebaseUid: string) => {
    if (!firebaseUid) return;
    try {
      const userData = await getOnePurchaser(firebaseUid);
      if (userData) setCurrentUser(userData);
    } catch (err) {
      console.log(err);
    }
  };

  const removeUserFromStore = async () => {
    if (!currentUser) return;
    setCurrentUser({});
  };

  return { removeUserFromStore, setUserInStore, currentUser };
};
