import React from 'react';
import './wcss.css';
import { useWishlist } from '../landing/WishlistContext';
import { useNavigate } from 'react-router-dom';

function Wishlist() {
  const { wishlist, toggleWishlist } = useWishlist();
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  console.log("TOKEN", token);
  return (
    <div className='size'>
      <h1>Wishlist</h1>
      <div className='w0'>
        {Array.isArray(wishlist) && wishlist.length === 0 ? (
          <p style={{ margin: 'auto' }}>No items in wishlist.</p>
        ) : (
          wishlist.map((item) => (
            <div className='w1' key={item.coupon._id}>
              <div
                className='image-wrapper'
                onClick={() => navigate(`/detail/${item.coupon._id}`, { state: item.coupon })}
              >
                <img
                  className="w2"
                  src={`https://coupon-backend-32op.onrender.com/uploads/${item.coupon.image}`}
                  alt={item.coupon.title}
                />
                <div className="overlay-titl">{item.coupon.title}</div>
              </div>
              <div className='w3'>
                <h4>{item.coupon.title}</h4>
                <span className="price">₹{item.coupon.price}</span>
              </div>
              <div className='w4'>
                <button
                  className='w5'
                  onClick={() => navigate('/payment', { state: item.coupon })}
                >
                  Buy
                </button>
                <button
                  className='w6'
                  onClick={() => toggleWishlist(item.coupon)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Wishlist;
