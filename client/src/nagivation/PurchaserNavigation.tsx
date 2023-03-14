import { FC } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { NewSupplier, PriceListDetails, PriceListNew, PriceLists } from "../pages";
import { PurchaserHome } from "../pages/purchaser/home/PurchaserHome";
import { Suppliers } from "../pages/purchaser/suppliers/Suppliers";

export const PurchaserNavigation: FC = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<PurchaserHome />} path="/purchasing/home" />
      <Route element={<Suppliers />} path="/purchasing/suppliers" />
      <Route element={<NewSupplier />} path="/purchasing/suppliers/new" />
      <Route element={<PriceLists />} path="/purchasing/price-lists" />
      <Route element={<PriceListNew />} path="/purchasing/price-lists/new" />
      <Route
        element={<PriceListDetails />}
        path="/purchasing/price-lists/details/:priceListId"
      />

      <Route element={<Navigate to="/purchasing/home" />} path="*" />
    </Routes>
  </BrowserRouter>
);
