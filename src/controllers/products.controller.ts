import { Request, Response } from 'express';
import productsServices from '../services/products.services';

const createProduct = async (req: Request, res: Response): Promise<void> => {
  const newProduct = await productsServices.createProduct(req.body);
  res.status(201).json(newProduct);
};
const getproducts = async (req: Request, res: Response): Promise<void> => {
  const products = await productsServices.getproducts();
  res.status(200).json(products);
};
export default {
  createProduct,
  getproducts,
};