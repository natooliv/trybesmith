import { Request, Response } from 'express';
import ordersServices from '../services/orders.services';

const getAllOrders = async (req: Request, res: Response): Promise<void> => {
  const orders = await ordersServices.getAllOrders();
  res.status(200).json(orders);
};

export default {
  getAllOrders,
};
