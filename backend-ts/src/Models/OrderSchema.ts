import mongoose from "mongoose"
const orderSchema = new mongoose.Schema({
  orderId: String,
  customerName: String,
  orderDate: Date,
  status: String,
  items: [
    {
      productName: String,
      quantity: Number,
      price: Number,
    },
  ],
  totalAmount: Number,
});

module.exports = mongoose.model("Order",orderSchema);