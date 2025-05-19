import './listingcss.css';
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";

function Listing() {
  const [title, setTitle] = useState('');
  const [offPercentage, setOffPercentage] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [couponNumber, setCouponNumber] = useState('');
  const [price, setPrice] = useState('');
  const [text, setText] = useState('');
  const [upiNumber, setUpiNumber] = useState('');
  const [email] = useState('');
  const [setCoupons] = useState([]);
  const navigate = useNavigate();

  const storedUser = localStorage.getItem('user');
  const user = storedUser ? JSON.parse(storedUser) : { email: 'guest@user.com' };
  const token = localStorage.getItem('token') || '';

  // Refs
  const refs = {
    title: useRef(null),
    offPercentage: useRef(null),
    expiryDate: useRef(null),
    upiNumber: useRef(null),
    couponNumber: useRef(null),
    price: useRef(null),
    text: useRef(null),
    button: useRef(null),
  };

  const highlight = (ref) => {
    if (!ref?.current) return;
    ref.current.classList.add('highlight');
    setTimeout(() => ref.current.classList.remove('highlight'), 300);
  };

  const handleKeyDown = (e, currentField) => {
    if (e.key === 'Enter') {
      e.preventDefault();

      const fields = [
        'title', 'offPercentage', 'expiryDate',
        'upiNumber', 'couponNumber', 'price', 'text'
      ];

      const index = fields.indexOf(currentField);
      if (index !== -1 && index < fields.length - 1) {
        refs[fields[index + 1]].current.focus();
      } else {
        // Last field - submit
        highlight(refs.button);
        refs.button.current.click();
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const upiRegex = /^[a-zA-Z0-9@.]+$/;
    if (!upiRegex.test(upiNumber)) {
      toast.error('Invalid UPI number');
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
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(couponData),
      });

      if (response.ok) {
        toast.success('Coupon uploaded successfully!');
        fetchCoupons();
        navigate('/landing');
      } else {
        toast.warn('Error uploading coupon');
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

  return (
    <div className='div11'>
      <div className='row m-auto divc'>
        <div className='div21'>
          <h1 className='h12'>Coupon</h1>
          <input ref={refs.title} className='loginbut1' type="text" placeholder='Coupon Brand Name' value={title} onChange={(e) => setTitle(e.target.value)} onKeyDown={(e) => handleKeyDown(e, 'title')} />
          <input ref={refs.offPercentage} className='loginbut1' type="text" placeholder='Coupon Off %' value={offPercentage} onChange={(e) => setOffPercentage(e.target.value)} onKeyDown={(e) => handleKeyDown(e, 'offPercentage')} />
          <input ref={refs.expiryDate} className='loginbut1' type="date" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} onKeyDown={(e) => handleKeyDown(e, 'expiryDate')} />
          <input ref={refs.upiNumber} className='loginbut1' type="text" placeholder='Payment UPI Number/ID' value={upiNumber} onChange={(e) => setUpiNumber(e.target.value)} onKeyDown={(e) => handleKeyDown(e, 'upiNumber')} />
        </div>

        <div className='loginsize1'>
          <h1 className='h11'>Details</h1>
          <input ref={refs.couponNumber} className='loginbut1' type="text" placeholder='Coupon Number' value={couponNumber} onChange={(e) => setCouponNumber(e.target.value)} onKeyDown={(e) => handleKeyDown(e, 'couponNumber')} />
          <input ref={refs.price} className='loginbut1' type="number" placeholder='Selling Price' value={price} onChange={(e) => setPrice(e.target.value)} onKeyDown={(e) => handleKeyDown(e, 'price')} />
          <textarea ref={refs.text} placeholder='Coupon Details' className='loginbut1' value={text} onChange={(e) => setText(e.target.value)} onKeyDown={(e) => handleKeyDown(e, 'text')} />
          <button ref={refs.button} className='logbut1 submi-submit' onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Listing;
