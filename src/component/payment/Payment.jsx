import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import { QRCodeCanvas } from 'qrcode.react';
import './payment.css';

function Payment() {
  const location = useLocation();
  const navigate = useNavigate();
  const coupon = location.state;
  const [transactionID, setTransactionID] = useState('');
  const [payerName, setPayerName] = useState('');
  const [countdown, setCountdown] = useState(180); // 3 minutes = 180 seconds
  const [isAuthenticated, setIsAuthenticated] = useState(true); // Flag to check authentication
  useEffect(() => {
    if (!coupon) return;
  
    const token = localStorage.getItem('token'); // Get token from localStorage
    if (!token) {
      setIsAuthenticated(false);
      toast.warn('Please login first to proceed to payment.');
      navigate('/'); // Redirect to login page as your login path is '/'
    } else {
      setIsAuthenticated(true);
    }
  
    const interval = setInterval(() => {
      setCountdown((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(interval);
          toast.warn("Payment not confirmed in time. Redirecting to landing page.");
          navigate('/landing');
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);
  
    return () => clearInterval(interval); // Cleanup on unmount
  }, [coupon, navigate]);
  

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  const upiID = "markandeyshukla@upi";
  const paymentLink = `upi://pay?pa=${upiID}&pn=Markandey%20Shukla&am=${coupon.price}&cu=INR`;

  const handlePayment = async () => {
    if (!transactionID || !payerName) {
      toast.warn("Please fill in the Transaction ID and Payer's Name.");
      return;
    }

    const token = localStorage.getItem('token'); // ✅ Get the token from localStorage
    if (!token) {
      toast.warn('Please login first.');
      navigate('/');
      return;
    }

    const paymentData = {
      transactionID,
      payerName,
      paymentAmount: coupon.price,
      couponID: coupon._id || coupon.ID,
    };

    try {
      const response = await fetch('https://coupon-backend-32op.onrender.com/api/payment/confirm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, // ✅ Send token here
        },
        body: JSON.stringify(paymentData),
      });

      if (response.ok) {
        toast.success("Payment Successful! We'll send the coupon details to your registered email.");
        navigate('/landing');
      } else {
        toast.warn("Error in processing payment. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    }
  };

  if (!coupon) {
    return <div className="notfound">No coupon data available</div>;
  }

  if (!isAuthenticated) return null; // Prevent rendering payment page if not authenticated

  return (
    <div className="payment-page">
      <div className="payment-container">
        <h2 className="payment-heading">Payment Page</h2>
        <div className="countdown-timer">⏳ Time left: {formatTime(countdown)}</div>

        <div className="payment-card">
          <div className='iimage'>
            <img src={`https://coupon-backend-32op.onrender.com/uploads/${coupon.image}`} alt={coupon.title} className="payment-img" />
            <div className="overlay-nam">{coupon.title}</div>
            <div className="overlay-naam">{coupon.title}</div>
          </div>
          <p className="price">₹{coupon.price}</p>

          <div className="qr-container">
            <QRCodeCanvas value={paymentLink} size={256} />
            <p>Scan to Pay</p>
          </div>

          <div className="transaction-details">
            <div className="input-group">
              <label htmlFor="transaction-id">Transaction ID</label>
              <input 
                type="text" 
                id="transaction-id" 
                value={transactionID} 
                onChange={(e) => setTransactionID(e.target.value)} 
                placeholder="Enter Transaction ID"
              />
            </div>

            <div className="input-group">
              <label htmlFor="payer-name">Payer's Name</label>
              <input 
                type="text" 
                id="payer-name" 
                value={payerName} 
                onChange={(e) => setPayerName(e.target.value)} 
                placeholder="Enter Payer's Name"
              />
            </div>
          </div>

          <button className="pay-btn" onClick={handlePayment}>
            Confirm Payment
          </button>
        </div>
      </div>
    </div>
  );
}

export default Payment;
