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

//new listing route
app.get("/listings/new", (req,res)=>{
    res.render("listings/add.ejs");
});

//individual listing
app.get("/listings/:id",async (req,res)=>{
    let {id} = req.params;
    let listing = await Listing.findById(id);
    res.render("listings/show.ejs",{listing});
});

//edit route
app.get("/listings/:id/edit",async(req,res)=>{
    let {id} = req.params;
    let listingData = await Listing.findById(id);
    res.render("listings/edit.ejs",{listingData});
});

//create new listing
app.post("/listings/create", async(req,res)=>{
    // let data = req.body.listing;
    const newListing = new Listing(req.body.listing);
    await newListing.save();
    res.redirect("/listings");
});

app.listen(6969, ()=>{
    console.log("Listening to PORT 6969");
});
