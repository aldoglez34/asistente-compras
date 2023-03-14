import { Schema, model } from "mongoose";
import { SupplierType } from "../types/types";

const supplierSchema = new Schema<SupplierType>({
  name: { type: String, required: true, unique: true },
  registeredAt: { type: Date, default: Date.now },
  email: { type: String, required: true, unique: true },
  address: { type: String, required: true },
  phone: { type: String, required: true },
  firebaseUid: { type: String, required: true, unique: true },
  priceLists: [
    {
      type: Schema.Types.ObjectId,
      ref: "PriceList",
    },
  ],
});

export const SupplierModel = model<SupplierType>("Supplier", supplierSchema);
