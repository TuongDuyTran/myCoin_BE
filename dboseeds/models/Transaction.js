import DBO from 'dbo';
import { Transaction } from "../../models/index.js";

const { dbo } = DBO;

export default () => {
    return dbo.Transaction.bulkCreate([
        {
            [Transaction.Amount]: 0,
            [Transaction.SenderPublicKey]: " ",
            [Transaction.ReceiverPublicKey]: " "
        }
    ]);
}