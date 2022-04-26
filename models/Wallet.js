import DBO from "dbo";
const {dbo} = DBO;
import DataTypes from "sequelize";

if(dbo.Wallet === undefined ){
    dbo.Wallet = DBO.define("Wallet", {"ID":{"type":DataTypes.INTEGER,"autoIncrement":true,"primaryKey":true,"allowNull":false},"Name":{"type":DataTypes.STRING,"allowNull":false},"PublicKey":{"type":DataTypes.TEXT,"allowNull":false},"PrivateKey":{"type":DataTypes.TEXT,"allowNull":false}}, {
        timestamps: false
    });
    
}
const Wallet = {ID: "ID",Name: "Name",PublicKey: "PublicKey",PrivateKey: "PrivateKey"};
export default Wallet;