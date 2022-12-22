
module.exports.CreatePlatform =async (req, res) => {
    const platform = Platform.build({
      URL: req.body.url
  });
  platform.save().then((err)=>{
   console.log(err)
  res.send("a gya data mithai vando")
  
  })
  }