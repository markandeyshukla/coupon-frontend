import express from 'express';
import jwt from 'jsonwebtoken';
import Payment from '../models/paymentModel.js';

const router = express.Router();

// Middleware to verify token
const verifyToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  
  if (!token) return res.status(401).json({ message: 'Access Denied' });

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Decoded JWT payload:", verified);
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).json({ message: 'Invalid Token' });
  }
};

// ✅ POST /api/payment/confirm
router.post('/confirm', verifyToken, async (req, res) => {
  const { transactionID, payerName, paymentAmount, couponID } = req.body;
  const email = req.user.email;

  console.log('Received payment payload:', req.body);

  try {
    const newPayment = new Payment({
      transactionID,
      payerName,
      paymentAmount,
      couponID,
      email,
    });

    await newPayment.save();

    return res.status(200).json({ message: "Payment successful!" });
  } catch (err) {
    console.error("Payment save error:", err);
    return res.status(500).json({ message: "Payment failed!", error: err.message });
  }
});


export default router;
