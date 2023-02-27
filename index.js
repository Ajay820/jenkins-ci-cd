const express = require("express")

const app = express()

app.get("/",(req,res)=>{
    res.send("hello from jenkins")
})

app.get("/",(req,res)=>{
    res.send("just for checking the triggering event")
})

app.listen(4000,()=>{
    console.log("the server is running at port 4000")
})
