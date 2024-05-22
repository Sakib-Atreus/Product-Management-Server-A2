import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { ProductRoute } from './app/modules/products/product.route';
import { OrderRoute } from './app/modules/orders/order.route';

const app: Application = express();
// const port = 3000;

// parser
app.use(express.json());
app.use(cors());

// application routes
app.use('/api/products', ProductRoute);
app.use('/api/orders', OrderRoute);

const getAController = (req: Request, res: Response) => {
  res.send('Welcome to our product management app!');
};

app.get('/', getAController);

//Handle any other route and return a 404 error
app.use('*', (req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: 'Route not found!',
  });
});

export default app;
