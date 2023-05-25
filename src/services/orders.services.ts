import { Order } from '../types/Order';
import OrderModel from '../database/models/order.model';

interface Product {
  id: number;
  
}

const getAllOrders = async (): Promise<Order[]> => {
  const orders = await OrderModel.findAll({
    include: 'productIds',
  });

  return orders.map((order) => {
    const { id, userId, productIds } = order.toJSON();
    const formattedProductIds = (productIds as Product[] | undefined)
      ?.map((product) => product.id) || [];
    return { id, userId, productIds: formattedProductIds };
  });
};

export default {
  getAllOrders,
};
