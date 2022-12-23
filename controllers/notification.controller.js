require("dotenv").config();
const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');

// const cors = require("cors");
const crypto = require("crypto");
const User = require("../models/tbl_user");

const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;
// console.log(accountSid)
const client = require("twilio")(accountSid, authToken);
const smsKey = process.env.SMS_SECRET_KEY;


module.exports.SendMail = (email) => {
    // console.log(email)
    let mailTransporter = nodemailer.createTransport({
        service: 'yandex',
        host: 'smtp.yandex.ru',
        port: 465,

        auth: {
            user: 'notification@vipfirebet.com',
            pass: '5tF3k3c6R&K+a6u'
        }
    });

    const msg = `Hey Shop '${email.name}' Manager, welcome to firebet community \n 
  Here are the login details \n
    username : ${email.uname} \n
    password : ${email.passwd}`;
    // console.log(msg);
    let mailDetails = {
        from: 'notification@vipfirebet.com',
        to: email.email,
        subject: 'Welcome to Firebet',
        text: msg
    };

    return mailTransporter.sendMail(mailDetails)
        // , function (err, data) {
        //   if (err) {
        //     console.log('Error Occurs',err);
        //   } else {
        //     console.log('Email sent successfully');
        //   }
        // });

}

const otp = Math.floor(100000 + Math.random() * 900000)


module.exports.SendOtp = (req, res) => {
    console.log("otp")
    res.send({
            otp: 123456
        })
        //   const phone = "+923137485658"
        //   const otp = Math.floor(100000 + Math.random()*900000)
        //   const ttl= 2*60*1000
        //   const expires = Date.now()+ttl
        //   const data = `${phone}.${otp}.${expires}`
        // console.log(data);
        //   const hash = crypto.createHmac('sha256', smsKey).update(data).digest('hex');
        // const fullHash = `${hash}.${expires}`;
        //   client.messages.create({
        //       body: `your one time otp is ${otp}`,
        //       from : "+15412297236",
        //       to: phone

    //   }).then((messages) => console.log(messages))
    //   .catch((err) => console.error(err));
    //   res.status(200).send({ phone, hash: fullHash, otp });
}
module.exports.VerifyOtp = async(req, res) => {
    console.log("helo")
    const otp = req.body.otp
    if (otp == 1234) {
        user = await User.findOrCreate({ where: { ph_no: req.body.ph_no } })
        if (user[0].tblShopmanagerId) {
            res.send({
                user: user[0].id,
                isRegisterd: true,
                isVerified: true
            })

        } else {
            res.send({
                user: user[0].id,
                isRegisterd: false,
                isVerified: true
            })
        }

    }
}