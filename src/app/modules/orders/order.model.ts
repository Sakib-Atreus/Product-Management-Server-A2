import { Schema, model } from 'mongoose';
import { Order } from './order.interface';

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

export const OrderModel = model<Order>('Order', orderSchema);
