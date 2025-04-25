import mongoose from 'mongoose';

const couponSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String },
  offPercentage: { type: String },
  expiryDate: { type: String },
  couponNumber: { type: String },
  upiNumber: { type: String, required: true }, // Added UPI number to the model

  email: { type: String, required: true }, 
});

const Coupon = mongoose.model('Coupon', couponSchema);
export default Coupon;  // Changed to export default
