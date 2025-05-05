import './copondetail.css';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function CouponDetail() {
  const location = useLocation();
  const navigate = useNavigate();
  const coupon = location.state;

  if (!coupon) {
    return <div className='notfound'>Coupon not found</div>;
  }

  const handleConfirm = () => {
    navigate('/payment', { state: coupon });
  };

  

  return (
    <div className='detail-page'>
      <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>
      <div className='detail-card'>
        <div className='nametext'>
          <img src={`https://coupon-backend-32op.onrender.com/uploads/${coupon.image}`} alt="Coupon" className='detail-img' />
          <div className="overlay-name">{coupon.title}</div>
        </div>
        <h2>{coupon.title}</h2>
        <div className='detail-text'>{coupon.description}</div>
        <div className="detail-info">
          <p>Expires on: <strong>{coupon.expiryDate}</strong></p>
          <p>Discount: <strong>{coupon.offPercentage}</strong></p>
        </div>
        <p className='price-show'>Price: ₹{coupon.price}</p>
        <button className='buy-detail' onClick={handleConfirm}>Confirm Payment</button>
      </div>
    </div>
  );
}

export default CouponDetail;
