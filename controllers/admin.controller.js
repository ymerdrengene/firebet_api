
// admin started
const bcrypt = require('bcrypt');
const Admin = require("../models/tbl_admin")


module.exports.AdminLogin = (req, res) => {
  const email = req.body.email;
  const passwd = req.body.passwd;
  checkUser(email, passwd)
  async function checkUser(email, password) {
    try {
      const user = await Admin.findOne({ where: { email: email } })

      //... fetch user from a db .

      const match = await bcrypt.compare(password, user.passwd);

      if (match) {
        //login
        console.log("match")
        res.send("login")
      }
      else { res.send("err") }

      //...
    }
    catch (err) { console.log(err, "err"), res.send({err:"email or passwd incorrect"}) }

  }
}
module.exports.CreateAdmin = async (req, res) => {
  // const Password = "FB_" + Math.random().toString(36).substring(2, 7)
  const Password = "123456"
  const hashPassword = await bcrypt.hash(Password, 12)
  // console.log("create admin")
  try {
    const result = await Admin.create({
      passwd: hashPassword
    })
    console.log(result)
  } catch (error) {
    console.log(result, "create admin")

  }

  // const admin = Admin.build({
  // });
  // admin.save().then((err) => {
  //     console.log(err)
  //     res.send("nai chalna!  tu mera putr chutti kar")
  // })
}
module.exports.GetAllAdmin = async (req, res) => {
  const result = await Admin.findAll()
  res.send(result)
}

  // admin ended