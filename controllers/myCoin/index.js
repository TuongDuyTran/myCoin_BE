import { Router } from 'express';
import { validate, handler } from "../../middleware/controller.js";
import { express } from '../../global_class/application.js';
import BlockBuss from '../../business/BlockBusiness.js';

let routes = Router();

routes.get('/test', (req, res) => {
    res.send("successfully!");
});

routes.get('/getLatestBlock', validate([]), handler(BlockBuss.getLatestBlock.bind(BlockBuss)));

routes.post('/executeTransaction', validate([
    'body string senderKey',
    'body string receiverKey',
    'body string amount',
]), handler(BlockBuss.getLatestBlock.bind(BlockBuss)));

express.use('/api/my-coin', routes);
