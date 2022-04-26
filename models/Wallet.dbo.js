import DataTypes from "sequelize";

const Wallet = {
  tableName: "Wallet",
  tableInfo: {
    ID:{
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    Name:{
      type: DataTypes.STRING,
      allowNull: false
    },
    PublicKey: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    PrivateKey: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }
};