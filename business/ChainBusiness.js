import DBO from "dbo";
import pkg from "sequelize";
import { ClientException, ServerException } from "p_exception";
import BlockBuss from "./BlockBusiness";

const { Op } = pkg;
const { dbo, AbstractBusiness } = DBO;
class ChainBusiness extends AbstractBusiness {
    
  async invalidChain() {
    try {
      const blockChain = await BlockBuss.getAllBlock();
      for (let i = 1; i < blockChain.length; i++) {
        const currentBlock = blockchain[i];
        const precedingBlock = blockchain[i - 1];

        if (currentBlock.PrecedingHash !== precedingBlock.Hash) 
            return false;
      }

      return true;
    } catch (e) {
      return new ServerException(e.message);
    }
  }
}

export default new ChainBusiness();
