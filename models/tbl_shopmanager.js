const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");

const Shop = sequelize.define("tbl_shopmanager", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  passwd: DataTypes.STRING,
  name: DataTypes.STRING,
  bank_acc: DataTypes.STRING,
  vid_no: DataTypes.TEXT,
  profit: DataTypes.BIGINT,
  uname: DataTypes.STRING,
});

module.exports = Shop