const Router = require('express');
const { CreateAdmin, GetAllAdmin, AdminLogin } = require('../controllers/admin.controller');
const AdminRouter = Router();

// => Admin
AdminRouter.post("/c",CreateAdmin);
AdminRouter.get("/r",GetAllAdmin);
AdminRouter.post("/login",AdminLogin);



module.exports = AdminRouter
