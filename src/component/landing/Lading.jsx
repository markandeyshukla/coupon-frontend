import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { useWishlist } from './WishlistContext';
import './lancss.css';

function Landing() {
  const navigate = useNavigate();
  const { wishlist, toggleWishlist } = useWishlist();
  const [cardData, setCardData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/api/coupons')
      .then((res) => res.json())
      .then((data) => {
        setCardData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching coupons:", err);
        setLoading(false);
      });
  }, []);

  const isLiked = (card) =>
    Array.isArray(wishlist) &&
    wishlist.some((item) => item?.coupon?._id === card._id);

  if (loading) {
    return <div>Trafic Lga Hai La rhe hai Tumhara data</div>;
  }

  return (
    <div className="main">
      {cardData.map((card) => (
        <Link
          to={`/detail/${card._id}`}
          key={card._id}
          className="spansize"
          state={card}
        >
          <div className="img-container">
            <img
              className="imgsize"
              src={`http://localhost:5000/uploads/${card.image}`}
              alt={card.title}
            />
            <div className="overlay-title">{card.title}</div>
          </div>

          <div className="namesize">
            <h4>{card.title}</h4>

            <span className="price-tag">₹{card.price}</span>
            <div
              className="wishsize"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                toggleWishlist(card);
              }}
            >
              {isLiked(card) ? (
                <AiFillHeart className="heart" />
              ) : (
                <AiOutlineHeart className="heart" />
              )}
            </div>
          </div>

          <div className="extrasize">
            <p>Expires on: <strong>{card.expiryDate}</strong></p>
            <p>Discount: <strong>{card.offPercentage}</strong></p>
          </div>

          <div className="textsize">{card.description}</div>

          <div className="buybot">
            <button
              className="buy"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                navigate(`/payment`, { state: card });
              }}
            >
              Buy
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Landing;
