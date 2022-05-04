import { Router } from 'express';
import { validate, handler } from "../../middleware/controller.js";
import { express } from '../../global_class/application.js';
import { BlockBuss, ChainBuss, WalletBuss } from '../../business/index.js';

let routes = Router();

routes.post('/executeTransaction', validate([
    'body string senderKey',
    'body string receiverKey',
    'body integer amount'
]), handler(ChainBuss.executeTransaction.bind(ChainBuss)));

routes.post('/getHistory', validate([
    'body string publicKey'
]), handler(ChainBuss.getHistory.bind(ChainBuss)));

routes.post('/connectWallet', validate([
    'body string publicKey',
    'body string privateKey'
]), handler(WalletBuss.connect.bind(WalletBuss)));

routes.post('/createWallet', validate([
    'body string name',
    'body integer initAmount'
]), handler(WalletBuss.create.bind(WalletBuss)));

routes.post('/getInfo', validate([
    'body string publicKey'
]), handler(WalletBuss.getInfo.bind(WalletBuss)));

routes.get('/getAllBlock', validate([]), handler(BlockBuss.getAllBlock.bind(BlockBuss)));

express.use('/api/my-coin', routes);
