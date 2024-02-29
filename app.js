//express setup
const express = require("express");
const app = express();

//mongoose setup
const mongoose = require("mongoose");
const mongoURL = "mongodb://127.0.0.1:27017/wanderlust";
const Listing = require("./models/listing.js");

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

//set directory for views
const path = require("path");
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

//extract parameters
app.use(express.urlencoded({extended: true}));

app.get("/", (req,res)=>{
    res.send("Root is being called !!");
});

//all listings
app.get("/listings", async (req,res)=>{
    let allListings = await Listing.find({});
    res.render("listings/index.ejs",{allListings});
});

//individual listing
app.get("/listings/:id",async (req,res)=>{
    let {id} = req.params;
    let listing = await Listing.findById(id);
    res.render("listings/show.ejs",{listing});
});

app.listen(6969, ()=>{
    console.log("Listening to PORT 6969");
});
