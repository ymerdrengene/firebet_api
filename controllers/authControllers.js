const Admin = require('../models/tbl_admin')
const User = require('../models/tbl_user')
const Shop = require('../models/tbl_shopmanager')
const Platform = require('../models/tbl_platform')
require("dotenv").config();
const crypto = require("crypto");
const { sequelize } = require('../config')

// const db = require('../config')
// const { findByPk } = require('../models/tbl_shopmanager')



// user started
module.exports.user = async (req, res) => {
      const username= await req.body.username + '_'+ "112"
      const userDetails = User.build({
        username: username,
        phno: req.body.number,
        isonline: req.body.online,
        tblPlatformId: 1,
        tblShopmanagerId: 1

    });
    userDetails.save().then((err)=>{
      console.log(err)
     res.send("a gya data mithai vando")
     })
}


module.exports.adminuser =async (req, res) => {
  User.findAll()
    User.count().then(c => {
      res.send( c + "")
    })
  .catch((err) => {
    console.log("Error while find user : ", err)
  })
}

module.exports.adminonline =async (req, res) => {
  User.findAll()
    User.count({
      where: {isonline: '1'}}).then(c => {
      res.send( c + "")
    })
  .catch((err) => {
    console.log("Error while find user : ", err)
  })
}

module.exports.adminidview =async (req, res) => {
  Shop.findByPk(1, {include: ['tbl_admin']})
.then((shp) => {
  console.log("done")
  res.send(shp)
})
.catch((err) => {
  console.log("Error while find user : ", err)
})
console.log(data)
}

// admin ended

// platform started


// platform ended



// shop started

// shop ended


// notification



// notofication ended