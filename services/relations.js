const Admin = require("../models/tbl_admin");
const Platform = require("../models/tbl_platform");
const Shop = require("../models/tbl_shopmanager");
const User = require("../models/tbl_user");

Admin.hasMany(Shop);
Shop.belongsTo(Admin);

Platform.hasMany(User)
User.belongsTo(Platform)

Shop.hasMany(User);
User.belongsTo(Shop)
 
