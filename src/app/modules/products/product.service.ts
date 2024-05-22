import { Product } from './product.interface';
import { ProductModel } from './product.model';

const createProductIntoDB = async (product: Product) => {
  const result = await ProductModel.create(product);
  return result;
};

const getAllProductsFromDB = async (
  searchTerm: object,
): Promise<Product[] | null> => {
  const result = await ProductModel.find(searchTerm);
  return result;
};

const getSingleProductFromDB = async (_id: string) => {
  const result = await ProductModel.findOne({ _id });
  return result;
};

const deleteProductFromDB = async (_id: string) => {
  const result = await ProductModel.deleteOne({ _id });
  return result;
};

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

export const ProductServices = {
  createProductIntoDB,
  getAllProductsFromDB,
  getSingleProductFromDB,
  deleteProductFromDB,
  updateProductFromDB,
};
