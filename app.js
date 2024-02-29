//express setup
const express = require("express");
const app = express();

//mongoose setup
const mongoose = require("mongoose");
const mongoURL = "mongodb://127.0.0.1:27017/wanderlust";

main()
.then(()=>{
    console.log("Connected to MONGODB Wanderlust");
})
.catch((error)=>{
    console.log("Error while connecting to MONGODB : ",error);
});

async function main(){
    await mongoose.connect(mongoURL);
}

app.get("/", (req,res)=>{
    res.send("Root is being called !!");
});

app.listen(6969, ()=>{
    console.log("Listening to PORT 6969");
});
