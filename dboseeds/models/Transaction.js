import DBO from 'dbo';
import { Transaction } from "../../models/index.js";

const { dbo } = DBO;

export default () => {
    return dbo.Transaction.bulkCreate([
        {
            [Transaction.Amount]: 0,
            [Transaction.SenderPublicKey]: " ",
            [Transaction.ReceiverPublicKey]: "7cc23e1de7f4642eb01a3758d0b14756154b96baa8b7ffe774006b5de75988db"
        }
    ]);
}