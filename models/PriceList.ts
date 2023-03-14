import { Schema, model } from "mongoose";
import { PriceListType } from "../types/types";

const priceListSchema = new Schema<PriceListType>({
  name: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now },
  purchaser: {
    type: Schema.Types.ObjectId,
    ref: "Purchaser",
  },
  supplier: {
    type: Schema.Types.ObjectId,
    ref: "Supplier",
  },
  data: [
    {
      familia: { type: String, required: true },
      skuPropio: { type: String, required: true },
      skuProveedor: { type: String, required: true },
      descripcion: { type: String, required: true },
      marca: { type: String, required: true },
      um: { type: String, required: true },
      listaPrecio: { type: String, required: true },
      precio: { type: Number, required: true },
      iva: { type: Number, required: true },
      ieps: { type: Number, required: true },
      validoDesde: { type: String, required: true },
      fechaAlta: { type: String, required: true },
      contenido: { type: String, required: true },
      umCont: { type: String, required: true },
      ratio: { type: String, required: true },
      umInv: { type: String, required: true },
    },
  ],
});

export const PriceListModel = model<PriceListType>(
  "PriceList",
  priceListSchema
);
