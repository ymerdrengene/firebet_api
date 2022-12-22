const Router = require('express');
const { CreateUser, FindAllUser, FindOnlineUser, FindUserById } = require('../controllers/user.controller');
const UserRouter = Router();

UserRouter.post("/c",CreateUser);
UserRouter.get("/fa",FindAllUser);
UserRouter.get("/fos",FindOnlineUser);
UserRouter.get("/fubi",FindUserById);

module.exports = UserRouter