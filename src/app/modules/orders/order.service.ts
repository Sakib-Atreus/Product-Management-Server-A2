import { ProductModel } from '../products/product.model';
import { Order } from './order.interface';
import { OrderModel } from './order.model';

// order create service
const createOrderIntoDB = async (order: Order) => {
  // find the product
  const product = await ProductModel.findById(order.productId);

  // if product is not found, throw an error
  if (!product) {
    throw new Error('Product not found');
  }

  // check stock
  const isStock = product.inventory.inStock;

  // if product is not in stock, throw an error
  if (!isStock) {
    throw new Error('Product is not in stock');
  }

  // check stock availability
  const isSufficientQuantity = product.inventory.quantity - order.quantity >= 0;

  // if stock is insufficient, throw an error
  if (!isSufficientQuantity) {
    throw new Error('Insufficient quantity available in inventory');
  }

  // create order
  const result = await OrderModel.create(order);

  // calculate new quantity
  const newQuantity = product.inventory.quantity - order.quantity;

  // update stock and inStock status
  const updatedProduct = await ProductModel.findByIdAndUpdate(
    product._id,
    {
      'inventory.quantity': newQuantity,
      'inventory.inStock': newQuantity > 0,
    },
    { new: true },
  );

  // if the product update fails, throw an error
  if (!updatedProduct) {
    throw new Error('Failed to update product inventory');
  }

  return result;
};

// service work for get all orders and find orders by user email

const getAllOrdersFromDB = async (email: string): Promise<Order[] | null> => {
  const $regex = new RegExp(email, 'i');

  const result = await OrderModel.find({
    $or: [{ email: { $regex } }],
  });
  return result;
};

const retrieveOrdersFromDb = async (
  email: string,
): Promise<{ data: Order[] | null; message: string }> => {
  if (email) {
    const $regex = new RegExp(email, 'i');
    const orders = await OrderModel.find({ email: { $regex } });
    return {
      data: orders,
      message: 'Orders fetched successfully for user email!',
    };
  } else {
    const orders = await OrderModel.find();
    return { data: orders, message: 'Orders fetched successfully!' };
  }
};

// service for a single order
const getSingleOrderFromDB = async (_id: string) => {
  const result = await OrderModel.findOne({ _id });
  return result;
};

export const OrderServices = {
  createOrderIntoDB,
  getAllOrdersFromDB,
  retrieveOrdersFromDb,
  getSingleOrderFromDB,
};
