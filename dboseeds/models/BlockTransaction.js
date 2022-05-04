import DBO from 'dbo';
import { BlockTransaction } from "../../models/index.js";

const { dbo } = DBO;

export default () => {
    return dbo.BlockTransaction.bulkCreate([
        {
            [BlockTransaction.Amount]: 0,
            [BlockTransaction.SenderPublicKey]: " ",
            [BlockTransaction.ReceiverPublicKey]: " ",
            [BlockTransaction.Timestamp]: new Date()
        }
    ]);
}