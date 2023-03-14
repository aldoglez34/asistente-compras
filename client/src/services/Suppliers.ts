import axios from "axios";
import { SupplierType } from "../utils/types";

export const getAllSuppliers = () =>
  axios.get<SupplierType[]>(`/api/supplier/all`).then((res: any) => res.data);

export const postSupplier = (supplierData: SupplierType) =>
  axios.post("/api/supplier/new", supplierData).then((res: any) => res.data);
