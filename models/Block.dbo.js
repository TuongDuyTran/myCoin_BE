import DataTypes from "sequelize";

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
      type: DataTypes.TEXT,
      allowNull: false,
    },
    TransactionID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }
};
