import { Router } from 'express';
import productsController from '../controllers/products.controller';

const router = Router();
router.get('/', productsController.getproducts);
router.post('/', productsController.createProduct);

export default router;