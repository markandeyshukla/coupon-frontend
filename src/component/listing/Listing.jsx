import './listingcss.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Listing() {
  const [title, setTitle] = useState('');
  const [offPercentage, setOffPercentage] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [couponNumber, setCouponNumber] = useState('');
  const [price, setPrice] = useState('');
  const [text, setText] = useState('');
  const [upiNumber, setUpiNumber] = useState('');
  const [email, setEmail] = useState('');
  const [coupons, setCoupons] = useState([]);
  const navigate = useNavigate();

  // ✅ Safe fallback if user is not logged in
  const storedUser = localStorage.getItem('user');
  const user = storedUser ? JSON.parse(storedUser) : { email: 'guest@user.com' };

  // ✅ Token fallback if not present
  const token = localStorage.getItem('token') || '';

  const handleSubmit = async (e) => {
    e.preventDefault();

    const upiRegex = /^[a-zA-Z0-9@.]+$/;
    if (!upiRegex.test(upiNumber)) {
      alert('Invalid UPI number');
      return;
    }

    const couponData = {
      title,
      image: 'default.jpg',
      price,
      description: text,
      offPercentage,
      expiryDate,
      couponNumber,
      upiNumber,
      email: user.email || email,
    };

    try {
      const response = await fetch('https://coupon-backend-32op.onrender.com/api/coupons', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}` // Safe token usage
        },
        body: JSON.stringify(couponData),
      });

      if (response.ok) {
        alert('Coupon uploaded successfully!');
        fetchCoupons();
        navigate('/landing');
      } else {
        alert('Error uploading coupon');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const fetchCoupons = async () => {
    try {
      const response = await fetch('https://coupon-backend-32op.onrender.com/api/coupons');
      const data = await response.json();
      setCoupons(data);
    } catch (err) {
      console.error('Error fetching coupons:', err);
    }
  };

  useEffect(() => {
    fetchCoupons();
  }, []);

  return (
    <div className='div11'>
      <div className='row m-auto divc'>
        <div className='div21'>
          <h1 className='h12'>Coupon</h1>
          <input className='loginbut1' type="text" placeholder='Coupon Brand Name' value={title} onChange={(e) => setTitle(e.target.value)} />
          <input className='loginbut1' type="text" placeholder='Coupon Off %' value={offPercentage} onChange={(e) => setOffPercentage(e.target.value)} />
          <input className='loginbut1' type="date" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} />
          <input className='loginbut1' type="text" placeholder='Payment UPI Number/ID' value={upiNumber} onChange={(e) => setUpiNumber(e.target.value)} />
        </div>

        <div className='loginsize1'>
          <h1 className='h11'>Details</h1>
          <input className='loginbut1' type="text" placeholder='Coupon Number' value={couponNumber} onChange={(e) => setCouponNumber(e.target.value)} />
          <input className='loginbut1' type="number" placeholder='Selling Price' value={price} onChange={(e) => setPrice(e.target.value)} />
          <textarea placeholder='Coupon Details' className='loginbut1' value={text} onChange={(e) => setText(e.target.value)} />
          <button className='logbut1' onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Listing;
