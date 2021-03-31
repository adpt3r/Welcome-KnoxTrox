var express = require('express');
var router = express.Router();


router.get("/",function(req,res,next){
    res.send("Recien empezando NodeJS + React! :)");
});

module.exports=router;
