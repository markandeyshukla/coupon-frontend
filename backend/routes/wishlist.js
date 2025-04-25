import express from 'express';
import Wishlist from '../models/wishlist.js';
import verifyToken from '../middleware/auth.js';

const router = express.Router();

// Add coupon to wishlist
// Add coupon to wishlist
router.post('/add', verifyToken, async (req, res) => {
  try {
    const { couponId } = req.body;
    const userId = req.userId;

    const existing = await Wishlist.findOne({ user: userId, coupon: couponId });
    if (existing) return res.status(400).json({ message: "Already in wishlist" });

    const newItem = new Wishlist({ user: userId, coupon: couponId });
    await newItem.save();

    // ⭐ Populate the coupon so frontend gets full info (including image)
    const populatedItem = await newItem.populate('coupon');

    res.status(200).json(populatedItem); // ✅ Send full populated data
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});


// Get wishlist for logged-in user
router.get('/my', verifyToken, async (req, res) => {
  try {
    const userId = req.userId;
    const items = await Wishlist.find({ user: userId }).populate('coupon');
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// Remove item from wishlist
router.delete('/remove/:couponId', verifyToken, async (req, res) => {
  try {
    const { couponId } = req.params;
    const userId = req.userId;

    await Wishlist.findOneAndDelete({ user: userId, coupon: couponId });
    res.status(200).json({ message: "Removed from wishlist" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
