import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import searchimg from "./searchimg.png";
import { CgProfile } from "react-icons/cg";
import { BsFillBagHeartFill } from "react-icons/bs";
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
      alert("Please login to sell a coupon.");
    } else {
      navigate("/listing");
    }
  };

  return (
    <div className="headdiv">
      <img className="logo1" src="/logo.jpg" alt="" />
      <Link className="navbar-brand" to="/">COUPON BARTER</Link>

      <span className="flex">
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
          <img className="button-img" src={searchimg} alt="searchicon" />
        </button>
      </span>

      <span className="wishimgspan">
        <Link to="/wishlist"><BsFillBagHeartFill className="wishlist-img" /></Link>
      </span>

      <span className="profile">
        <div className="profile-container">
          <div className="profile-button">
            <CgProfile className="profile-img" />
          </div>

          <div className="slider">
            <ul>
              <li>
                <span className="slider-sell" style={{ cursor: "default" }}>
                  {userEmail || "Profile"}
                </span>
              </li>

              {/* Sell Coupon Button */}
              <li>
                <span 
                  className="slider-sell" 
                  style={{ cursor: "pointer" }}
                  onClick={handleSellCoupon}
                >
                  Sell Coupon
                </span>
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
      </span>
    </div>
  );
}

export default Heador;
