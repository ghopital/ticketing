import express, {Response, Request, NextFunction} from 'express';
import { Order } from '../models/order';
import { requireAuth } from '@ghopitaltickets/common';

const router = express.Router();

router.get('/api/orders', 
    requireAuth
    ,async (req: Request, res: Response, next: NextFunction) => {
    const orders = await Order.find({userId: req.currentUser!.id}).populate('ticket');
    res.send({orders});
});

export {router as indexOrdersRouter};