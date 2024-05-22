import { z } from 'zod';

const orderValidationSchema = z.object({
  email: z
    .string()
    .min(5, { message: 'Email must be at least 5 characters' })
    .max(50, { message: 'Email cannot exceed 50 characters' })
    .email({ message: 'Invalid email format' }),
  productId: z.string(),
  price: z
    .number()
    .min(1, { message: 'Price must be at least 1' })
    .max(9999, { message: 'Price cannot exceed 99999' }),
  quantity: z
    .number()
    .min(1, { message: 'Quantity must be at least 1' })
    .max(999, { message: 'Quantity cannot exceed 1000' }),
});

export default orderValidationSchema;
