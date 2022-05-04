import DBO from "dbo";
import pkg from "sequelize";
import { ClientException, ServerException } from "p_exception";
import { BlockTransaction } from "../models/index.js";

const { Op } = pkg;
const { dbo, AbstractBusiness } = DBO;
class BlockTransactionBusiness extends AbstractBusiness {
  getModel() {
    return {
      model: dbo.BlockTransaction,
    };
  }

  async getAmount(key) {
    try {
      const { model } = this.getModel();
      const trans = await model.findAll({
        where: {
          [Op.and]: {
            [BlockTransaction.SenderPublicKey]: key,
          },
        },
      });

      let totalSended = 0;
      if (trans.length > 0) {
        totalSended = trans.reduce((total, current) => total + current.Amount);
      }

      trans = await model.findAll({
        where: {
          [Op.and]: {
            [BlockTransaction.ReceiverPublicKey]: key,
          },
        },
      });
      let totalReceived = 0;
      if (trans.length > 0) {
        totalReceived = trans.reduce(
          (total, current) => total + current.Amount
        );
      }

      return totalReceived - totalSended;
    } catch (e) {
      return new ServerException(e.message);
    }
  }

  async insert(senderKey, receiverKey, amount) {
    try {
      const { model } = this.getModel();

      let newTrans = model.build({
        [BlockTransaction.Amount]: amount,
        [BlockTransaction.SenderPublicKey]: senderKey,
        [BlockTransaction.ReceiverPublicKey]: receiverKey,
        [BlockTransaction.Timestamp]: new Date(),
      }).dataValues;
      newTrans = await model.create(newTrans);

      if (
        newTrans[BlockTransaction.ID] === null ||
        newTrans[BlockTransaction.ID] === undefined
      ) {
        throw new ServerException("Can't insert transaction");
      }

      return newTrans;
    } catch (e) {
      return new ServerException(e.message);
    }
  }

  async getHistory(publicKey) {
    try {
      const { model } = this.getModel();
      let sender = await model.findAll({
        where: {
          [Op.and]: {
            [BlockTransaction.SenderPublicKey]: publicKey,
          },
        },
      });
      let receiver = await model.findAll({
        where: {
          [Op.and]: {
            [BlockTransaction.ReceiverPublicKey]: publicKey,
          },
        },
      });
      sender = sender.map(block => block.dataValues);
      receiver = receiver.map(block => block.dataValues);
      
      let histories = [...sender, ...receiver];
      histories.sort((a, b) => new Date(b.Timestamp) - new Date(a.Timestamp));
      return histories;
    } catch (e) {
      return new ServerException(e.message);
    }
  }
}

export default new BlockTransactionBusiness();
