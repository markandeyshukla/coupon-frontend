import mongoose from 'mongoose';

const paymentSchema = new mongoose.Schema({
  transactionID: { type: String, required: true },
  payerName: { type: String, required: true },
  paymentAmount: { type: Number, required: true },
  couponID: { type: mongoose.Schema.Types.ObjectId, ref: 'Coupon', required: true },
  email: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model('Payment', paymentSchema);  // Changed to ES module export
