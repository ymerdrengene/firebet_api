const bcrypt = require('bcrypt');
const Shop = require('../models/tbl_shopmanager');
const User = require('../models/tbl_user');
const { use } = require('../routes/user.routes');
const { SendMail } = require('./notification.controller');

module.exports.CreateShop = async (req, res) => {
    console.log(req.body)

    const passwd = Math.random().toString(36).substring(2, 8)


    try {
        const hashPassword = await bcrypt.hash(passwd, 12)
        const shopData = {
            name: req.body.name,
            vid_no: req.body.vid_no,
            email: req.body.email,
            bank_acc: req.body.bank_acc,
            passwd: hashPassword,
            uname: "DEFB_" + req.body.bank_acc.slice(-4),
            tblAdminId: 1,
        }
        const shop = await Shop.create(shopData)
        res.send(true)
        const email = {
            name: shopData.name,
            email: shopData.email,
            passwd: passwd,
            uname: shopData.uname
        }
        // console.log(shop)
        SendMail(email).then(() => {
            // res.send({msg:"email sent successfully"})
            console.log("email sent successfully")
        }).catch(err => console.log(err, "nodemailer error"))


    } catch (error) {
        console.log(error)
        res.send(false)
    }


}
module.exports.GetAllShop = async (req, res) => {
    Shop.findAll()
    Shop.count().then(c => {
        res.send(c + "")
    })
        .catch((err) => {
            console.log("Error while find user : ", err)
        })
}
module.exports.GetTopShop = async (req, res) => {
    try {
        const shops = await Shop.findAll({
            attributes: ['id', 'name', 'profit'],
            limit: 5,
            order: [['profit', 'desc']]
        })
        // console.log(shops)
        res.send(shops)
    } catch (error) {
        console.log(error, "getTopShops")
        res.send({ err: "can't find shops" })
    }

}
module.exports.GetShopName = async (req, res) => {
    try {
        const shops = await Shop.findAll({
            attributes: ['id', 'name'],

        })
        // console.log(shops)
        res.send(shops)
    } catch (error) {
        console.log(error, "getTopShops")
        res.send({ err: "can't find shops" })
    }

}
module.exports.GetShopById = async (req, res) => {
    // console.log(req.body.id)
    try {
        const users = await User.count(
            {
                where: {
                    tblShopmanagerId:req.body.id
                }
            })
        const shop = await Shop.findByPk(req.body.id, {
            attributes: ['id', 'name', 'profit']
        })
        // console.log(shop)
        res.send({users:users,shop})
    } catch (error) {
        console.log(error, "getTopShops")
        res.send({ err: "can't find shops" })
    }

}

module.exports.GetShopUsers = async (req, res) => {
    console.log(req.body)
    try {
        const users = await User.findAll(
            {
                attributes:['is_online','uname'],
                where: {
                    tblShopmanagerId:req.body.id
                }
            })
        // const shop = await Shop.findByPk(req.body.id, {
        //     attributes: ['id', 'name', 'profit']
        // })
        // console.log(shop)
        res.send(users)
    } catch (error) {
        console.log(error, "getTopShops")
        res.send({ err: "can't find shops" })
    }

}

module.exports.UpdateShop = async (req, res) => {
    await Shop.update({ name: "Doe" }, {
        where: {
            name: "test2"
        }
    });
    res.send("done")
}
module.exports.DelShop = async (req, res) => {
    await Shop.destroy({
        where: {
            id: 5
        }
    });
    res.send("done")
}


module.exports.ShopLogin = (req, res) => {
    // console.log(req.body)
    const email = req.body.email;
    const passwd = req.body.passwd;
    checkUser(email, passwd)
    async function checkUser(email, password) {
        try {
            const user = await Shop.findOne(
               
                {  
                    attributes:['id','name','uname','passwd'],
                    where: { email: email } })

            //... fetch user from a db .

            const match = await bcrypt.compare(password, user.passwd);

            if (match) {
                //login
                // console.log("match")
                res.send({user})
            }
            else {
                res.send({
                    "err": "email or password is incorrect"
                })
            }

            //...
        }
        catch (err) { console.log(err, "err")
    res.send(
       { "err": "email or password is incorrect"
    }
    ) }

    }
}