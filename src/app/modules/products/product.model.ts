import { Schema, model } from 'mongoose';
import { Inventory, Product, Variant } from './product.interface';

// this schema make for variant data
const variantSchema = new Schema<Variant>({
  type: {
    type: String,
    required: [true, 'Product variant type is required'],
  },
  value: {
    type: String,
    required: [true, 'Product variant value is required'],
  },
});

// this schema make for inventory data
const inventorySchema = new Schema<Inventory>({
  quantity: {
    type: Number,
    required: [true, 'Product quantity value is required'],
  },
  inStock: {
    type: Boolean,
    default: true,
  },
});

// this schema make for main product data
const productSchema = new Schema<Product>({
  name: {
    type: String,
    required: [true, 'Product name is required'],
    unique: true,
  },
  description: {
    type: String,
    required: [true, 'Product description is required'],
  },
  price: {
    type: Number,
    required: [true, 'Product price is required'],
  },
  category: {
    type: String,
    required: [true, 'Product category is required'],
  },
  tags: [
    {
      type: String,
      required: [true, 'Product tags is required'],
    },
  ],
  variants: [
    {
      type: variantSchema,
      required: [true, 'Product variant is required'],
      _id: false,
    },
  ],
  inventory: {
    type: inventorySchema,
    required: [true, 'Product inventory is required'],
    _id: false,
  },
});

// we can export this main schema model for using another file
export const ProductModel = model<Product>('Product', productSchema);
