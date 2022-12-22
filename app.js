const express = require('express');
const db = require('./config/db.config');
const AdminRouter = require('./routes/admin.routes');
const NotificationRouter = require('./routes/notifications.routes');
const PlatformRouter = require('./routes/platforms.routes');
const ShopRouter = require('./routes/shop.router');
const UserRouter = require('./routes/user.routes');
require('./services/relations')
const app = express();
app.use(express.json());
app.use('/api/admin', AdminRouter)
app.use('/api/user', UserRouter)
app.use('/api/shop', ShopRouter)
app.use('/api/platform', PlatformRouter)
app.use('/api/noti', NotificationRouter)
app.get("/",(req,res)=>{
    res.send("hello")
})
dbconn = async () => {
    try {
        await db.authenticate()
        console.log("database connected")
        db.sync({
            // alter:true,
            // force:true
        })
    }
    catch(err){
        console.log(err, "database error")
    }
}
dbconn()

app.listen(3000,
     console.log("server is running on 3000"));
   