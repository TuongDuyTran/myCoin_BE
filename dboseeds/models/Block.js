import DBO from 'dbo';
import { Block } from "../../models/index.js";

const { dbo } = DBO;

export default () => {
    return dbo.Block.bulkCreate([
        {
            [Block.Timestamp]: new Date(),
            [Block.PrecedingHash]: " ",
            [Block.Hash]: "7cc23e1de7f4642eb01a3758d0b14756154b96baa8b7ffe774006b5de75988db",
            [Block.Nonce]: 0,
            [Block.TransactionID]: 1
        }
    ]);
}