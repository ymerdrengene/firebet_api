const Shop = require("../models/tbl_shopmanager");
const User = require("../models/tbl_user");

module.exports.CreateUser = async (req, res) => {

  try {
    const shopId = await Shop.findOne({attributes:['id'],where:{uname:req.body.uname}})
    console.log(shopId.id)
    const count = await User.count({ col:"tblShopmanagerId",where:{tblShopmanagerId:shopId.id} })
    const uname = await req.body.uname + '_' + count
    const userDetails = await User.update({
      uname: uname,
      // ph_no: req.body.ph_no,
      is_online: true,
      // tblPlatformId: 1,
      tblShopmanagerId: shopId.id
    },{where:{id:req.body.id}})
    console.log(userDetails)
    res.send(true)
  } catch (error) {
    res.send(false)

    console.log(error, "create user")
  }

}


module.exports.FindAllUser = async (req, res) => {
  User.findAll()
  User.count().then(c => {
    res.send(c + "")
  })
    .catch((err) => {
      console.log("Error while find user : ", err)
    })
}

module.exports.FindOnlineUser = async (req, res) => {
  //console.log("hi")
  try {
    const isOnline = await User.count({
      attributes:['is_online'],
      group:['is_online']
      
    }) 
    const totalUser = isOnline[0].count+isOnline[1].count
    const online = isOnline[0].count

    res.send({totalUser,online})

  
  } catch (error) {
    console.log(error,"from findOnlineUser")
    res.send({msg:"error finding"})
  }


}

module.exports.FindUserById = async (req, res) => {
  Shop.findByPk(1, { include: ['tbl_admin'] })
    .then((shp) => {
      console.log("done")
      res.send(shp)
    })
    .catch((err) => {
      console.log("Error while find user : ", err)
    })
  console.log(data)
}