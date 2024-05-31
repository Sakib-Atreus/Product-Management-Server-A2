import { Request, Response } from 'express';
import { OrderServices } from './order.service';
import orderValidationSchema from './order.validation';

// this is controller for creating a order
const createOrder = async (req: Request, res: Response) => {
  try {
    const orderData = req.body;
    const parsedOrderData = orderValidationSchema.parse(orderData);
    const result = await OrderServices.createOrderIntoDB(parsedOrderData);

    // for send response
    res.status(200).json({
      success: true,
      message: 'Order created successfully!',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'Something went wrong',
      err,
    });
  }
};

// this control handle to get all products and find order by individual user email
const getAllOrders = async (req: Request, res: Response) => {
  try {
    const { email } = req.query as { email: string };

    const result = await OrderServices.getAllOrdersFromDB(email);

    if (email) {
      res.status(200).json({
        success: true,
        message: 'Orders fetched successfully for user email!',
        data: result,
      });
    } else {
      res.status(200).json({
        success: true,
        message: 'Orders fetched successfully!',
        data: result,
      });
    }
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'Something went wrong',
      error,
    });
  }
};

// find a single product by using id and get error when id doesn't match
const getSingleOrder = async (req: Request, res: Response) => {
  try {
    const { orderId } = req.params;
    const result = await OrderServices.getSingleOrderFromDB(orderId);

    if (!result) {
      // If the product is not found, return a 404 status code
      return res
        .status(404)
        .json({ success: false, message: 'Order not found' });
    }

    res.status(200).json({
      success: true,
      message: 'Order fetched successfully!',
      data: result,
    });
  } catch (err: any) {
    // If an error occurs, return a 500 status code
    res.status(500).json({
      success: false,
      message: 'Order not found',
    });
  }
};

// export this order main controllers for using another file
export const OrderControllers = {
  createOrder,
  getAllOrders,
  getSingleOrder,
};
