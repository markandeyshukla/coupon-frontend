import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { useWishlist } from "../../component/landing/WishlistContext";
import './searchpage.css';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function SearchPage() {
  const query = useQuery().get("q");
  const navigate = useNavigate();
  const { wishlist, toggleWishlist } = useWishlist();
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchResults = async () => {
      const res = await fetch(`http://localhost:5000/api/coupons/search?q=${query}`);
      const data = await res.json();
      setResults(data);
    };

    if (query) {
      fetchResults();
    }
  }, [query]);

  const isLiked = (card) =>
    Array.isArray(wishlist) &&
    wishlist.some((item) => item?.coupon?._id === card._id);

  return (
    <div className='divsizing'>
    <div className="search-main">
      <h2 className="search-heading">Search Results for: "{query}"</h2>
      {results.length > 0 ? (
        results.map((card) => (
          <Link
            to={`/detail/${card._id}`}
            key={card._id}
            className="search-card"
            state={card}
          >
            <div className="search-img-container">
              <img
                className="search-img"
                src={`http://localhost:5000/uploads/${card.image}`}
                alt={card.title}
              />
              <div className="search-overlay-title">{card.title}</div>
            </div>

            <div className="search-name">
              <h4>{card.title}</h4>
              <span className="search-price">₹{card.price}</span>
              
               <div className="search-wish"
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

            <div className="search-extra">
              <p>Expires on: <strong>{card.expiryDate}</strong></p>
              <p>Discount: <strong>{card.offPercentage}</strong></p>
            </div>

            <div className="search-description">{card.description}</div>

            <div className="search-buy">
              <button
                className="search2-buy"
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
        ))
      ) : (
        <p>No coupons found.</p>
      )}
    </div></div>
  );
}

export default SearchPage;
