
const express = require("express"); 
const app = express(); 
const dbConnection = require("./controllers/dbController"); 
const route = require("./middlewares/routes"); 

dbConnection(); 
app.use('/', route); 
app.listen(3000, ()=>{
    console.log("HEy its runnign")
})