import { requestType, responseType } from "../../types/types";
import { PurchaserModel } from "../../models";

export const getOnePurchaser = async (req: requestType, res: responseType) => {
  const firebaseUid = req.params.firebaseUid;
  try {
    const purchasers = await PurchaserModel.findOne({ firebaseUid }).exec();
    res.json(purchasers);
  } catch (err) {
    console.log(err);
    res.status(422).send("Ocurrió un error.");
  }
};
