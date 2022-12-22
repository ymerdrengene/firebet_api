const Router = require('express');
const {
    ShopLogin,
    GetAllShop,
    CreateShop,
    UpdateShop,
    DelShop, 
    GetTopShop,
    GetShopName,
    GetShopById,
    GetShopUsers} = require('../controllers/shop.controler');
const ShopRouter = Router()
ShopRouter.post("/login", ShopLogin);
ShopRouter.get("/gts", GetTopShop);
ShopRouter.get("/gsn", GetShopName);
ShopRouter.post("/gsbi", GetShopById);

ShopRouter.post("/gsu", GetShopUsers);



ShopRouter.get("/r", GetAllShop);
ShopRouter.post("/c", CreateShop);
ShopRouter.post("/u", UpdateShop);
ShopRouter.post("/d", DelShop);
module.exports = ShopRouter
