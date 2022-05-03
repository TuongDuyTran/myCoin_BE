import DBO from "dbo";
import pkg from "sequelize";
import { ClientException, ServerException } from "p_exception";
import { Transaction } from "../models/index.js";

const { Op } = pkg;
const { dbo, AbstractBusiness } = DBO;
class TransactionBusiness extends AbstractBusiness {
  getModel() {
    return {
      model: dbo.Wallet,
    };
  }

  async getAmount(key) {
    try {
      const { model } = this.getModel();
      const trans = await model.findAll({
        where: {
          [Op.and]: {
            [Transaction.SenderPublicKey]: key
          }
        },
      }).dataValues;

      let totalSended = 0;
      if (trans.length > 0) {
        totalSended = trans.reduce((total, current) => total + current.Amount);
      }
      
      trans = await model.findAll({
        where: {
          [Op.and]: {
            [Transaction.ReceiverPublicKey]: key
          }
        },
      }).dataValues;
      let totalReceived = 0;
      if (trans.length > 0) {
        totalReceived = trans.reduce((total, current) => total + current.Amount);
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
        [Transaction.Amount]: amount,
        [Transaction.SenderPublicKey]: senderKey,
        [Transaction.ReceiverPublicKey]: receiverKey,
      }).dataValues;

      newTrans = await model.create(newTrans);
      if (
        newTrans[Transaction.ID] === null ||
        newTrans[Transaction.ID] === undefined
      ) {
        throw new ServerException("Can't insert transaction");
      }

      return newTrans;
    } catch (e) {
      return new ServerException(e.message);
    }
  }
}

export default new TransactionBusiness();
