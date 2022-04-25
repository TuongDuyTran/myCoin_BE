import DBO from 'dbo';
import DataTypes from "sequelize";

const { dbo } = DBO;

export default {
    Up: async (queryInterface) => {
        return queryInterface.createTable('vng_feeds', {
            ID: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false
            },
            GUID: {
                type: DataTypes.STRING(200),
                allowNull: false
            },
            Title: {
                type: DataTypes.TEXT,
                allowNull: false
            },
            Creator: {
                type: DataTypes.STRING(100),

                allowNull: false,
            },
            Link: {
                type: DataTypes.TEXT,

                allowNull: false,
            },
            CreateDate: {
                type: DataTypes.DATE,

                allowNull: true,
            },
        });
    },
    Down: () => {
    }
}
