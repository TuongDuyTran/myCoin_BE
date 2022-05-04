import DBO from "dbo";
import pkg from "sequelize";
import { ServerException } from "p_exception";
import { BlockBuss, WalletBuss, BlockTransactionBuss } from "./index.js";
import { Block, BlockTransaction } from "../models/index.js";

const { Op } = pkg;
const { dbo, AbstractBusiness } = DBO;
class ChainBusiness extends AbstractBusiness {
  getModel() {
    return {
      model: "Chain",
    };
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
        const sender = (await WalletBuss.getInfo(senderKey)).dataValues;
        if (sender?.ID === undefined) {
          throw new ServerException("Sender invalid");
        }

        const senderAmount = await BlockTransactionBuss.getAmount(senderKey);
        if (senderAmount < amount) {
          throw new ServerException("Sender amount isn't enough");
        }
      }

      const receiver = (await WalletBuss.getInfo(receiverKey)).dataValues;
      if (receiver?.ID === undefined) {
        throw new ServerException("Receiver invalid");
      }

      if (await this.checkChainValidity()) {
        const newTrans = (
          await BlockTransactionBuss.insert(senderKey, receiverKey, amount)
        ).dataValues;
        const latestBlock = (await BlockBuss.getLatestBlock()).dataValues;
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
          [Block.TransactionID]: newTrans[BlockTransaction.ID],
        }).dataValues;
        BlockBuss.proofOfWork(
          parseInt(process.env.DIFFICULTY),
          newTrans,
          newBlock
        );
        return await BlockBuss.insert(newBlock);
      } else {
        throw new ServerException("Blockchain invalid !!!");
      }
    } catch (e) {
      return new ServerException(e.message);
    }
  }

  async getHistory(publicKey) {
    try {
      return await BlockTransactionBuss.getHistory(publicKey);
    } catch (e) {
      return new ServerException(e.message);
    }
  }
}

export default new ChainBusiness();
