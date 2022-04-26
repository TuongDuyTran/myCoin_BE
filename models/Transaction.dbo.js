import DataTypes from "sequelize";

const Transaction = {
  tableName: "Transaction",
  tableInfo: {
    ID:{
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    Amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    SenderPublicKey: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    ReceiverPublicKey: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }
};