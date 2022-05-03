import DBO from "dbo";
import pkg from "sequelize";
import { ClientException, ServerException } from "p_exception";
import { BlockBuss, WalletBuss, TransactionBuss } from "./index";
import { Wallet, Block } from "../models/index";

const { Op } = pkg;
const { dbo, AbstractBusiness } = DBO;
class ChainBusiness extends AbstractBusiness {
  constructor() {
    this.difficulty = 4;
  }

  async checkChainValidity() {
    try {
      const blockChain = await BlockBuss.getAllBlock();
      for (let i = 1; i < blockChain.length; i++) {
        const currentBlock = blockchain[i];
        const precedingBlock = blockchain[i - 1];

        if (currentBlock.PrecedingHash !== precedingBlock.Hash) return false;
      }

      return true;
    } catch (e) {
      return new ServerException(e.message);
    }
  }

  async executeTransaction(senderKey, receiverKey, amount) {
    try {
      if (senderKey !== process.env.PUBLIC_KEY_WALLET) {
        const sender = await WalletBuss.getInfo(senderKey);
        if (sender?.ID === undefined) {
          throw new ServerException("Sender invalid");
        }

        const senderAmount = await TransactionBuss.getAmount(senderKey);
        if (senderAmount < amount) {
          throw new ServerException("Sender amount isn't enough");
        }
      }

      const receiver = await WalletBuss.getInfo(receiverKey);
      if (receiver?.ID === undefined) {
        throw new ServerException("Receiver invalid");
      }

      if (await this.checkChainValidity()) {
        const newTrans = await TransactionBuss.insert(
          senderKey,
          receiverKey,
          amount
        );

        const latestBlock = await BlockBuss.getLatestBlock();
        const timestamp = new Date();
        const newBlock = dbo.Block.build({
          [Block.Timestamp]: timestamp,
          [Block.PrecedingHash]: latestBlock.Hash,
          [Block.Hash]: BlockBuss.generateHash(
            timestamp.toString(),
            latestBlock.Hash,
            0,
            newTrans
          ),
          [Block.Nonce]: 0,
          [Block.TransactionID]: newTrans.ID,
        }).dataValues;
        BlockBuss.proofOfWork(this.difficulty, newTrans, newBlock);
        return await BlockBuss.insert(newBlock);
      } else {
        throw new ServerException("Blockchain invalid !!!");
      }
    } catch (e) {
      return new ServerException(e.message);
    }
  }
}

export default new ChainBusiness();
