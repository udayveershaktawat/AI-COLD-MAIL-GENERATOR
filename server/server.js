const express = require("express");
const app = express()
require("dotenv").config();


const PORT = process.env.PORT || 3000


app.listen(PORT,()=>{
    console.log(`server started at port number ${PORT}`)
})

app.get("/",(req,res)=>{
    res.send(`<h1> this is home page</h1>`)
});