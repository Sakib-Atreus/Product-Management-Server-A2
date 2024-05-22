import { z } from 'zod';

// validation schema for variant model
const variantValidationSchema = z.object({
  type: z
    .string()
    .min(3, { message: 'Variant type must be at least 3 characters.' })
    .max(20, { message: 'Variant type must be at most 20 characters long.' }),
  value: z
    .string()
    .min(1, { message: 'Variant value must be at least 1 character.' })
    .max(20, { message: 'Variant value must be at most 20 characters long.' }),
});

// validation schema for inventory model
const inventoryValidationSchema = z.object({
  quantity: z
    .number()
    .min(0, { message: 'Quantity cannot be less than 0.' })
    .max(999, { message: 'Quantity cannot be more than 999.' })
    .nonnegative({ message: 'Quantity must be a non-negative number.' }),
  inStock: z.boolean({ required_error: 'In-stock status is required.' }),
});

// validation schema for product model
const productValidationSchema = z.object({
  name: z
    .string()
    .min(3, { message: 'Product name must be at least 3 characters.' })
    .max(30, { message: 'Product name must be at most 30 characters long.' }),
  description: z
    .string()
    .min(10, {
      message: 'Product description must be at least 10 characters.',
    })
    .max(500, {
      message: 'Product description must be at most 500 characters long.',
    }),
  price: z
    .number()
    .min(1, { message: 'Price must be at least 1.' })
    .max(9999, { message: 'Price must be at most 9999.' })
    .nonnegative({ message: 'Price must be a positive number.' }),
  category: z
    .string()
    .min(3, { message: 'Category must be at least 3 characters long.' })
    .max(20, { message: 'Category must be at most 20 characters long.' }),
  tags: z.array(
    z
      .string()
      .min(3, { message: 'Each tag must be at least 3 characters long.' })
      .max(20, { message: 'Each tag must be at most 20 characters long.' }),
  ),
  variants: z
    .array(variantValidationSchema)
    .nonempty({ message: 'At least one variant is required.' }),
  inventory: inventoryValidationSchema,
});

// making the entire product schema optional
const partialProductValidationSchema = productValidationSchema.partial();

// export this validation schema for using another file
export { productValidationSchema, partialProductValidationSchema };
