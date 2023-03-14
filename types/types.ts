import { Request, Response } from "express-serve-static-core";
import { Types } from "mongoose";
import { ParsedQs } from "qs";

export type requestType = Request<any, any, any, ParsedQs, Record<string, any>>;
export type responseType = Response<any, Record<string, any>, number>;

export type PriceListType = {
  name: string;
  createdAt: Date;
  purchaser: Types.ObjectId;
  supplier: Types.ObjectId;
  data: [
    {
      familia: string;
      skuPropio: string;
      skuProveedor: string;
      descripcion: string;
      marca: string;
      um: string;
      listaPrecio: string;
      precio: number;
      iva: number;
      ieps: number;
      validoDesde: string;
      fechaAlta: string;
      contenido: string;
      umCont: string;
      ratio: string;
      umInv: string;
    }
  ];
};

export type SupplierType = {
  name: string;
  registeredAt: Date;
  email: string;
  address: string;
  phone: string;
  firebaseUid: string;
  priceLists: Types.ObjectId[];
};

export type PurchaserType = {
  name: string;
  firstSurname: string;
  secondSurname: string;
  email: string;
  registeredAt: Date;
  firebaseUid: string;
  priceLists: Types.ObjectId[];
  suppliers: Types.ObjectId[];
};
