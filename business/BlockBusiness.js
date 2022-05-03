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

  async insert(block) {
    try {
      const { model } = this.getModel();
      let newBlock = await model.create(block);
      if (newBlock[Block.ID] === null || newBlock[Block.ID] === undefined) {
        throw new ServerException("Can't insert block");
      }

      return true;
    } catch (e) {
      return new ServerException(e.message);
    }
  }

  

  proofOfWork(difficulty, transaction, block) {
    while (
        block.Hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")
    ) {
        block.Nonce++;
        block.Hash = this.generateHash(block.Timestamp.toString(), block.PrecedingHash, block.Nonce, transaction);
    }
  }

  generateHash(timestamp, precedingHash, nonce, transaction) {
    return SHA256(timestamp + precedingHash + nonce + JSON.stringify(transaction)).toString();
  }
}

export default new BlockBusiness();
