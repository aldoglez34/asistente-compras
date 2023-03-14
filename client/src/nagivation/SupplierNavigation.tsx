import { FC } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

export const SupplierNavigation: FC = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<h1>supplier page</h1>} path="/supplier/home" />

      <Route element={<Navigate to="/supplier/home" />} path="*" />
    </Routes>
  </BrowserRouter>
);
