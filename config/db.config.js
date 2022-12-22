const { Sequelize} = require('sequelize');
const db = new Sequelize('vipfirebet', 'vipfirebet', 'V!PFireBet1.', {
    host: 'localhost',
    dialect: 'mariadb',
    operatorsAliases: false,
    // pool: {
    //   max: 5,
    //   min: 0,
    //   acquire: 3000,
    //   idle: 10000,
    // },
  });

module.exports = db