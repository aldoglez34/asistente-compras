import axios from "axios";
import { PurchaserType } from "../utils/types";

export const getOnePurchaser = (firebaseUid: string) =>
  axios
    .get<PurchaserType>(`/api/purchaser/${firebaseUid}`)
    .then((res: any) => res.data);
