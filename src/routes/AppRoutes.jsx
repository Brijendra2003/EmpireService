import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import AC from "../pages/AC";
import Microwave from "../pages/Microwave";
import Refrigrator from "../pages/Refrigrator";
import SoundBar from "../pages/SoundBar";
import Tv from "../pages/Tv";
import WashingMachine from "../pages/WashingMachine";

import ContactUs from "../pages/ContactUs";
import MainLayout from "../layouts/MainLayout";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout Wrapper */}
        <Route path="/" element={<MainLayout />}>
          {/* Pages */}
          <Route index element={<Home />} />
          <Route path="ac" element={<AC />} />
          <Route path="microwave" element={<Microwave />} />
          <Route path="refrigrator" element={<Refrigrator />} />
          <Route path="soundbar" element={<SoundBar />} />
          <Route path="tv" element={<Tv />} />
          <Route path="washingmachine" element={<WashingMachine />} />
          <Route path="contactus" element={<ContactUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
