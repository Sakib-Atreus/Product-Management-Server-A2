import express from 'express';
import { ProductControllers } from './product.controller';

const router = express.Router();

// this all routes call the controllers function to :
// create or post a new product
router.post('/', ProductControllers.createProduct);

// get all products
router.get('/', ProductControllers.getAllProducts);

// get a single product
router.get('/:productId', ProductControllers.getSingleProduct);

// delete a single product
router.delete('/:productId', ProductControllers.deleteProduct);

// update a single product
router.put('/:productId', ProductControllers.updateProduct);

export const ProductRoute = router;
