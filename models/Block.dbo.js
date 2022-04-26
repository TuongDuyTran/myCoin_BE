import DataTypes from "sequelize";
import Transaction from "./Transaction.js";

const Block = {
  tableName: "Block",
  tableInfo: {
    ID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    Timestamp: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    PrecedingHash: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    Hash: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    Nonce: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    TransactionID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  },
  relationship: function (dbo) {
    this.hasMany(dbo.Transaction, {
      as: "Transaction",
      foreignKey: Transaction.ID,
    });
    dbo.Transaction.belongsTo(this, {
      foreignKey: Transaction.ID,
    });
  },
};
