import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Homepage/index.js";
import SupportPage from "./pages/Support/index.js";
import AboutUs from "./pages/AboutUs/index.js";
import Landing from "./pages/Landing/index.js";
import Wishlist from "./pages/wishlist/index.js";
import Notfound from "./pages/Notfound/index.js";
import Signup from "./pages/Signup/index.js";
import Listing from "./pages/Listing/index.js"
import Searchpage from "./pages/Searchpage/index.js";
import Login from "./pages/Login/index.js";
import Payment from "./pages/Payment/index.js";
import { WishlistProvider } from "../../couponbarter/src/component/landing/WishlistContext.js";
import Copondetail from "./pages/Copondetail/index.js";

const AppRouter = () => {
  return (
    <WishlistProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/aboutus" element={<AboutUs />} /> 
        <Route path="/support" element={<SupportPage />} />
        <Route path="/search" element={<Searchpage />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route path="/profile" element={<Profile />} /> */}
        <Route path="/detail/:id" element={<Copondetail />} />
        <Route path="/listing" element={<Listing />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="*" element={<Notfound />} />  
      </Routes>
    </Router>
    </WishlistProvider>
  );
};

export default AppRouter;
