import { Schema, model } from 'mongoose';
import { Order } from './order.interface';

// make this schema for order data
const orderSchema = new Schema<Order>({
  email: {
    type: String,
    required: [true, 'Email is required'],
  },
  productId: {
    type: String,
    required: [true, 'Product ID is required'],
  },
  price: {
    type: Number,
    required: [true, 'Product price is required'],
  },
  quantity: {
    type: Number,
    required: [true, 'Product quantity is required'],
  },
});

// export this schema model for using another file
export const OrderModel = model<Order>('Order', orderSchema);
