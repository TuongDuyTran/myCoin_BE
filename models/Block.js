import DBO from "dbo";
const {dbo} = DBO;
import DataTypes from "sequelize";

if(dbo.Block === undefined ){
    dbo.Block = DBO.define("Block", {"ID":{"type":DataTypes.INTEGER,"autoIncrement":true,"allowNull":false,"primaryKey":true},"Timestamp":{"type":DataTypes.DATE,"allowNull":false},"PrecedingHash":{"type":DataTypes.TEXT,"allowNull":false},"Hash":{"type":DataTypes.TEXT,"allowNull":true},"Nonce":{"type":DataTypes.TEXT,"allowNull":false},"TransactionID":{"type":DataTypes.INTEGER,"allowNull":false}}, {
        timestamps: false
    });
    
}
const Block = {ID: "ID",Timestamp: "Timestamp",PrecedingHash: "PrecedingHash",Hash: "Hash",Nonce: "Nonce",TransactionID: "TransactionID"};
export default Block;