const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");

  const Admin = sequelize.define("tbl_admin",{
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    email:{ 
        type: DataTypes.STRING,
        defaultValue: "admin@vipfirebet.com",
        allowNull: false
    },
    passwd: { 
      type: DataTypes.STRING,
      // defaultValue: "passwrord",
      allowNull: false
  },
  });
  
module.exports = Admin