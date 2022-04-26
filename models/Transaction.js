import DBO from "dbo";
const {dbo} = DBO;
import DataTypes from "sequelize";

if(dbo.Transaction === undefined ){
    dbo.Transaction = DBO.define("Transaction", {"ID":{"type":DataTypes.INTEGER,"autoIncrement":true,"primaryKey":true,"allowNull":false},"Amount":{"type":DataTypes.INTEGER,"allowNull":false},"SenderPublicKey":{"type":DataTypes.TEXT,"allowNull":false},"ReceiverPublicKey":{"type":DataTypes.TEXT,"allowNull":false}}, {
        timestamps: false
    });
    
}
const Transaction = {ID: "ID",Amount: "Amount",SenderPublicKey: "SenderPublicKey",ReceiverPublicKey: "ReceiverPublicKey"};
export default Transaction;