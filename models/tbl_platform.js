const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");

const Platform = sequelize.define("tbl_platform", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: { type: DataTypes.STRING },
  description: { type: DataTypes.STRING },
  url: DataTypes.STRING,
});

module.exports = Platform