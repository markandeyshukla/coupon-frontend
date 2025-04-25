import express from 'express';
import jwt from 'jsonwebtoken';
import Coupon from '../models/couponModel.js';

const router = express.Router();

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
// 🔍 Search coupons (add this block anywhere above or below)
router.get('/search', async (req, res) => {
  try {
    const query = req.query.q || "";
    const regex = new RegExp(query, "i"); // case-insensitive

    const results = await Coupon.find({
      title: { $regex: regex }
    });

    res.json(results);
  } catch (err) {
    res.status(500).json({ error: "Something went wrong" });
  }
});

// 🏠 Get all coupons
router.get('/', async (req, res) => {
  try {
    const coupons = await Coupon.find();
    res.status(200).json(coupons);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// ➕ Create a new coupon
router.post('/', verifyToken, async (req, res) => {
  const {
    title,
    image,
    price,
    description,
    offPercentage,
    expiryDate,
    couponNumber,
    upiNumber, // ✅ now included
  } = req.body;
  const email = req.user.email;

  const newCoupon = new Coupon({
    title,
    image,
    price,
    description,
    offPercentage,
    expiryDate,
    couponNumber,
    upiNumber,
    email, // ✅ assign here too
  });

  try {
    await newCoupon.save();
    res.status(201).json(newCoupon);
  } catch (error) {
    res.status(500).json({ message: 'Error saving coupon' });
  }
});
export default router;
