import DBO from "dbo";
const {dbo} = DBO;
import DataTypes from "sequelize";

if(dbo.BlockTransaction === undefined ){
    dbo.BlockTransaction = DBO.define("BlockTransaction", {"ID":{"type":DataTypes.INTEGER,"autoIncrement":true,"primaryKey":true,"allowNull":false},"Amount":{"type":DataTypes.INTEGER,"allowNull":false},"SenderPublicKey":{"type":DataTypes.TEXT,"allowNull":false},"ReceiverPublicKey":{"type":DataTypes.TEXT,"allowNull":false},"Timestamp":{"type":DataTypes.DATE,"allowNull":false}}, {
        timestamps: false
    });
    
}
const BlockTransaction = {ID: "ID",Amount: "Amount",SenderPublicKey: "SenderPublicKey",ReceiverPublicKey: "ReceiverPublicKey",Timestamp: "Timestamp"};
export default BlockTransaction;