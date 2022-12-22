const Router = require('express');
const { SendOtp, VerifyOtp } = require('../controllers/notification.controller');
const NotificationRouter = Router()

// => Notifications

// NotificationRouter.post("/sm",SendMail);
NotificationRouter.post("/sotp",SendOtp);
NotificationRouter.post("/votp",VerifyOtp);

module.exports = NotificationRouter


