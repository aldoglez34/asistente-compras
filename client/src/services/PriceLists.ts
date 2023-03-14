import axios from "axios";
import { PriceListType, uploadPriceListType } from "../utils/types";

export const getAllMyPriceLists = (purchaserid: string) =>
  axios
    .get<PriceListType[]>(`/api/price-list/all/${purchaserid}`)
    .then((res: any) => res.data);

export const getOnePriceList = (priceListId: string) =>
  axios
    .get<PriceListType>(`/api/price-list/details/${priceListId}`)
    .then((res: any) => res.data);

export const uploadPrices = (data: uploadPriceListType) =>
  axios.post("/api/price-list/new", data).then((res: any) => res.data);
