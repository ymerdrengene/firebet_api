const Router = require('express');
const { CreatePlatform } = require('../controllers/platform.controller');
const PlatformRouter = Router();

// => Platforms
PlatformRouter.post("/c",CreatePlatform);
// manage platforms -> add edit delete

module.exports = PlatformRouter