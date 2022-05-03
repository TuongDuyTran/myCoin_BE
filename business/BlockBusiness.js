import DBO from "dbo";
const { dbo, AbstractBusiness } = DBO;
import { ClientException, ServerException } from "p_exception";
import pkg from "sequelize";
import SHA256 from "crypto-js/sha256.js";
import { Block } from "../models/index.js";

const { Op } = pkg;
class BlockBusiness extends AbstractBusiness {
  getModel() {
    return {
      model: dbo.Block,
    };
  }

  async getAllBlock() {
    try {
        const { model } = this.getModel();
        const allBlock = await model.findAll();
        return allBlock.dataValues;
      } catch (e) {
        return new ServerException(e.message);
      }
  }

  async getLatestBlock() {
    try {
      const { model } = this.getModel();

      const latestBlock = await model.findOne({
        order: [["ID", "DESC"]],
      });

      return latestBlock.dataValues;
    } catch (e) {
      return new ServerException(e.message);
    }
  }

  async insert(nonce, transaction) {
    try {
      const { model } = this.getModel();
      const latestBlock = this.getLatestBlock();

      let newBlock = model.build({
        [Block.Timestamp]: new Date(),
        [Block.PrecedingHash]: latestBlock.Hash,
        [Block.Hash]: this.generateHash(latestBlock.Hash, nonce, transaction),
        [Block.Nonce]: nonce,
        [Block.TransactionID]: transaction.ID,
      }).dataValues;

      newBlock = await model.create(newBlock);
      if (newBlock[Block.ID] === null || newBlock[Block.ID] === undefined) {
        throw new ServerException("Can't insert block");
      }

      return true;
    } catch (e) {
      return new ServerException(e.message);
    }
  }

  generateHash(precedingHash, nonce, transaction) {
    return SHA256(precedingHash + nonce + JSON.stringify(transaction)).toString();
  }
}

export default new BlockBusiness();
