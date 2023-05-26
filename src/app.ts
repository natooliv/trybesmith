import express from 'express';
import productsRoutes from './routes/products.routes';
import ordersRoutes from './routes/orders.routes';
import loginRouter from './routes/login.routes';

const app = express();

app.use(express.json());
app.use('/products', productsRoutes);
app.use('/orders', ordersRoutes);
app.use(loginRouter);

export default app;
