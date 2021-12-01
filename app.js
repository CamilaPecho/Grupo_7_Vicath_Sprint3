const express = require('express');
const app = express();
const main = require("./routers/main");

app.use(express.static('public'));

app.set("view engine","ejs");

app.use("/", main);

app.listen (3000, ()=>{
    console.log('Servidor funcionando');
});



