import React from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';

function Detail() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const coupon = location.state;

  const handleBuyNow = () => {
    navigate('/payment', { state: coupon });
  };

  return (
    <div>
      <h2>Coupon Detail Page</h2>
      {coupon ? (
        <>
          <h3>{coupon.title}</h3>
          <p>{coupon.text}</p>
          <img src="/logo.jpg" alt={coupon.title} style={{ width: '200px' }} />
          <br />
          <button onClick={handleBuyNow}>Confirm Payment</button>
        </>
      ) : (
        <p>No data found for this coupon (ID: {id})</p>
      )}
    </div>
  );
}

export default Detail;
