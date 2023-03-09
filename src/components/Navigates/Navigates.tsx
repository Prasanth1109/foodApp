import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import BrowseMenu from "../SouthIndianFoods/SouthIndianFood";
import Login from "../LoginScreen/login";
import RestaurantMenu from "../RestaurantMenu/RestaurantMenu";

export default function Navigates() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RestaurantMenu />} />
        <Route path="/SouthIndianFood" element={<BrowseMenu />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
