const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");
  const User = sequelize.define("tbl_users", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    uname: DataTypes.STRING,
    ph_no: DataTypes.BIGINT,
    is_online: DataTypes.STRING
  });
  module.exports = User