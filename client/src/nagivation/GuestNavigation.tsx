import { FC } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Login } from "../pages";

export const GuestNavigation: FC = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<Login />} path="/" />

      <Route element={<Navigate to="/" />} path="*" />
    </Routes>
  </BrowserRouter>
);
