//express setup
const express = require("express");
const app = express();

//mongoose setup
const mongoose = require("mongoose");
const mongoURL = "mongodb://127.0.0.1:27017/wanderlust";
const Listing = require("./models/listing.js");

main()
  .then(() => {
    console.log("Connected to MONGODB Wanderlust");
  })
  .catch((error) => {
    console.log("Error while connecting to MONGODB : ", error);
  });

async function main() {
  await mongoose.connect(mongoURL);
}

//set directory for views
const path = require("path");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//Node supports only GET and POST method, so for PUT and DELETE method
const methodOverride = require("method-override");
app.use(methodOverride("_method"));

//requiring ejs-mate
//used to write same piece of code to many place
const ejsMate = require("ejs-mate");
app.engine('ejs',ejsMate);

//use static files
app.use(express.static(path.join(__dirname,"/public")));

//extract parameters
app.use(express.urlencoded({ extended: true }));

// Error Handling
const wrapAsync = require("./utils/wrapAsync.js");

// Custom Error
const ExpressError = require("./utils/ExpressError.js");

app.get("/", (req, res) => {
  res.send("Root is being called !!");
});

//all listings
app.get("/listings", wrapAsync(async (req, res) => {
  let allListings = await Listing.find({});
  res.render("listings/index.ejs", { allListings });
}));

//new listing route
app.get("/listings/new", (req, res) => {
  res.render("listings/add.ejs");
});

//individual listing
app.get("/listings/:id", wrapAsync(async (req, res) => {
  let { id } = req.params;
  let listing = await Listing.findById(id);
  res.render("listings/show.ejs", { listing });
}));

//edit route
app.get("/listings/:id/edit", wrapAsync(async (req, res) => {
  let { id } = req.params;
  let listingData = await Listing.findById(id);
  res.render("listings/edit.ejs", { listingData });
}));

//create new listing
app.post("/listings/create", wrapAsync(async (req, res,next) => {
  // let data = req.body.listing;
  if(!req.body.listing){
    throw new ExpressError(404,"Bad request from Client");
  }
    const newListing = new Listing(req.body.listing);
    await newListing.save();
    res.redirect("/listings");
}));

//update existing listing
app.put("/listings/:id/update", wrapAsync(async (req, res) => {
  let { id } = req.params;
  await Listing.findByIdAndUpdate(id, { ...req.body.listing });
  res.redirect(`/listings/${id}`);
}));

//delete route
app.delete("/listings/:id/delete", wrapAsync(async (req, res) => {
  let { id } = req.params;
  await Listing.findByIdAndDelete(id);
  res.redirect("/listings");
}));

//Handling invalid route request
app.all("*",(req,res,next)=>{
  next(new ExpressError(404, "Page Not Found"));
});

// Error Handling middleware
app.use((err, req, res, next) => {
  let { statusCode=500, message="Something went wrong" } = err;
  res.status(statusCode).send(message);
});

app.listen(6969, () => {
  console.log("Listening to PORT 6969");
});
