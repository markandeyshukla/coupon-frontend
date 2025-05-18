import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
// import searchimg from "./searchimg.png";
import { IoMdSearch } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { BsFillBagHeartFill } from "react-icons/bs";
import { toast } from "react-toastify";
import "./headcss.css";

function Heador() {
  const [userEmail, setUserEmail] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setUserEmail(localStorage.getItem("userEmail") || "");
  }, []);

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const handleSellCoupon = () => {
    const token = localStorage.getItem('token');
    if (!token) {
      toast.warn("Please login to sell a coupon.");
    } else {
      navigate("/listing");
    }
  };

  return (
    <div className="landing-navbar-fixed">
    <div className="landing-header-main">
      <div className="landing-navbar-Container ">
        <div className="landing-logo-name">
      <img className="landing-navbar-logo" src="/logo.jpg" alt="" />
      <Link className="landing-navbar-brand" to="/landing">COUPON BARTER</Link>
      </div>
      <div className="flex">
        <input
          className="searchbar"
          type="search"
          placeholder="Search Coupons"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSearch();
          }}
        />
        <button
          className="button"
          type="button"
          onClick={handleSearch}
        >  
        <IoMdSearch className="button-img" />
          {/* <img className="button-img" src={searchimg} alt="searchicon" /> */}
        </button></div>
        <div className="landing-navbar-icon">
      {/* <div className="profile"> */}
        <div className="profile-container">
          <div className="profile-button">
            <CgProfile className="landing-navbar-profile-icon" />
          </div>
          <div className="slider">
            <ul>
              <li>
                <div className="slider-sell" style={{ cursor: "default" }}>
                  {userEmail || "Profile"}
                </div>
              </li>

              {/* Sell Coupon Button */}
              <li>
                <div 
                  className="slider-sell" 
                  style={{ cursor: "pointer" }}
                  onClick={handleSellCoupon}
                >
                  Sell Coupon
                </div>
              </li>

              <li>
                <Link
                  className="slider-sell"
                  to="/"
                  onClick={() => {
                    localStorage.removeItem("token");
                    localStorage.removeItem("userEmail");
                  }}
                >
                  Logout
                </Link>
              </li>
              <li>
                <Link to="/login" className="slider-sell" >Login</Link>
              </li>
              <li>
                <Link to="/signup" className="slider-sell" >Sign-UP</Link>
              </li>
            </ul>
            
          </div>
        </div>
        <Link to="/wishlist"><BsFillBagHeartFill className="landing-navbar-wishlist-icon" /></Link>
      </div>
      <div className="flex480">
        <input
          className="searchbar"
          type="search"
          placeholder="Search Coupons"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSearch();
          }}
        />
        <button
          className="button"
          type="button"
          onClick={handleSearch}
        >  
        <IoMdSearch className="button-img" />
          {/* <img className="button-img" src={searchimg} alt="searchicon" /> */}
        </button>
        <div className="landing-navbar-icon480">
      {/* <div className="profile"> */}
        <div className="profile-container480">
          <div className="profile-button480">
            <CgProfile className="landing-navbar-profile-icon480" />
          </div>
          <div className="slider480">
            <ul>
              <li>
                <div className="slider-sell" style={{ cursor: "default" }}>
                  {userEmail || "Profile"}
                </div>
              </li>

              {/* Sell Coupon Button */}
              <li>
                <div 
                  className="slider-sell" 
                  style={{ cursor: "pointer" }}
                  onClick={handleSellCoupon}
                >
                  Sell Coupon
                </div>
              </li>

              <li>
                <Link
                  className="slider-sell"
                  to="/"
                  onClick={() => {
                    localStorage.removeItem("token");
                    localStorage.removeItem("userEmail");
                  }}
                >
                  Logout
                </Link>
              </li>
              <li>
                <Link to="/login" className="slider-sell" >Login</Link>
              </li>
              <li>
                <Link to="/signup" className="slider-sell" >Sign-UP</Link>
              </li>
            </ul>
            
          </div>
        </div>
        <Link to="/wishlist"><BsFillBagHeartFill className="landing-navbar-wishlist-icon480" /></Link>
      </div>
      </div>

     
      </div></div></div>
  );
}

export default Heador;
