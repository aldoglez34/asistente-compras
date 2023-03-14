import { Schema, model } from "mongoose";
import { PurchaserType } from "../types/types";

const purchaserSchema = new Schema<PurchaserType>({
  name: { type: String, required: true },
  firstSurname: { type: String, required: true },
  secondSurname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  registeredAt: { type: Date, default: Date.now },
  firebaseUid: { type: String, required: true, unique: true },
  priceLists: [
    {
      type: Schema.Types.ObjectId,
      ref: "PriceList",
    },
  ],
});

export const PurchaserModel = model<PurchaserType>(
  "Purchaser",
  purchaserSchema
);
