const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");
const mongoURL = "mongodb://127.0.0.1:27017/wanderlust";

main()
.then(()=>{
    console.log("Connected to db");
})
.catch((error)=>{
    console.log(error);
});

async function main(){
    await mongoose.connect(mongoURL);
}

const initDB = async ()=>{
    // await Listing.deleteMany({});
    await Listing.insertMany(initData.data);
    console.log("Data updated to database");
}

initDB();