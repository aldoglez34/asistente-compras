import {
  getAllMyPriceLists,
  getOnePriceLists,
  postPriceList,
} from "./price-list/PriceList";
import { getAllSuppliers, postSupplier } from "./supplier/Supplier";
import { getOnePurchaser } from "./purchaser/Purchaser";
import { Router } from "express";

const router: Router = Router();

const BASE_URL = {
  PRICES: "api/price-list",
  PURCHASER: "api/purchaser",
  SUPPLIER: "api/supplier",
};

/* --------------------------------- prices --------------------------------- */
router.get(`/${BASE_URL.PRICES}/all/:purchaserId`, getAllMyPriceLists);
router.get(`/${BASE_URL.PRICES}/details/:priceListId`, getOnePriceLists);
router.post(`/${BASE_URL.PRICES}/new`, postPriceList);

/* ------------------------------- purchasers ------------------------------- */
router.get(`/${BASE_URL.PURCHASER}/:firebaseUid`, getOnePurchaser);

/* -------------------------------- supplier -------------------------------- */
router.get(`/${BASE_URL.SUPPLIER}/all`, getAllSuppliers);
router.post(`/${BASE_URL.SUPPLIER}/new`, postSupplier);

export default router;
