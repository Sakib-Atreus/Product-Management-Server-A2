import { Product } from './product.interface';
import { ProductModel } from './product.model';

// product create service
const createProductIntoDB = async (product: Product) => {
  const result = await ProductModel.create(product);
  return result;
};

// this service work for get all product and search by a value
const getAllProductsFromDB = async (
  searchTerm: object,
): Promise<Product[] | null> => {
  const result = await ProductModel.find(searchTerm);
  return result;
};

// service for a single product
const getSingleProductFromDB = async (_id: string) => {
  const result = await ProductModel.findOne({ _id });
  return result;
};

// this service work when a product delete
const deleteProductFromDB = async (_id: string) => {
  const result = await ProductModel.deleteOne({ _id });
  return result;
};

// for update a product, this service work for it
const updateProductFromDB = async (
  _id: string,
  updateData: Partial<Product>,
) => {
  try {
    const result = await ProductModel.findByIdAndUpdate(_id, updateData, {
      new: true,
      runValidators: true,
    }).exec();
    return result;
  } catch (error) {
    console.error(`Failed to update product with id ${_id}:`, error);
    throw error; // Propagate the error for higher-level handling
  }
};

// we can export this main service for using another file or controllers
export const ProductServices = {
  createProductIntoDB,
  getAllProductsFromDB,
  getSingleProductFromDB,
  deleteProductFromDB,
  updateProductFromDB,
};
