import DBO from "dbo";
import pkg from "sequelize";
import { ClientException, ServerException } from "p_exception";
import { Wallet } from "../models/index.js";

const { Op } = pkg;
const { dbo, AbstractBusiness } = DBO;
class WalletBusiness extends AbstractBusiness {
  getModel() {
    return {
      model: dbo.Wallet,
    };
  }

  async getInfo(publicKey) {
    try {
        const { model } = this.getModel();
        const user = await model.findOne({
            where: {
                [Op.and]: {
                    [Wallet.PublicKey]: publicKey
                }
            }
        }).dataValues;
        return user;
    } catch (e) {
      return new ServerException(e.message);
    }
  }
}

export default new WalletBusiness();
