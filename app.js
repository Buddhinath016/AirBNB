//express setup
const express = require("express");
const app = express();

//mongoose setup
const mongoose = require("mongoose");
const mongoURL = "mongodb://127.0.0.1:27017/wanderlust";
const Listing = require("./models/listing.js");

//Review Schema
const Review = require("./models/review.js")

//Requiring from Router
const listings = require("./routes/listing.js");

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
app.engine("ejs", ejsMate);

//use static files
app.use(express.static(path.join(__dirname, "/public")));

//extract parameters
app.use(express.urlencoded({ extended: true }));

// Error Handling
const wrapAsync = require("./utils/wrapAsync.js");

// Custom Error
const ExpressError = require("./utils/ExpressError.js");

//Server side validation for listing
const { listingSchema, reviewSchema } = require("./schema.js");

//Server side validation for review
const validateReview = (req,res,next)=>{
  let {error} = reviewSchema.validate(req.body);
  if(error){
    throw new ExpressError(404,error);
  }else{
    next();
  }
};

app.get("/", (req, res) => {
  res.send("Root is being called !!");
});

//Router Route 
app.use("/listings", listings);

//Review route 
app.post(
  "/listings/:id/reviews",
  validateReview,
  wrapAsync(async(req,res)=>{
    let listing = await Listing.findById(req.params.id);
    let newReview = new Review(req.body.review);

    listing.reviews.push(newReview); 
    await newReview.save();
    await listing.save();

    res.redirect(`/listings/${listing._id}`);
}));

//Delete review route
app.delete("/listings/:id/reviews/:reviewId",
wrapAsync(async(req,res)=>{
  let { id, reviewId } = req.params;
  await Listing.findByIdAndUpdate(id, {$pull : {reviews : reviewId}});
  await Review.findByIdAndDelete(reviewId);

  res.redirect(`/listings/${id}`);
}));

//Handling invalid route request
app.all("*", (req, res, next) => {
  next(new ExpressError(404, "Page Not Found"));
});

// Error Handling middleware
app.use((err, req, res, next) => {
  let { statusCode = 500, message = "Something went wrong" } = err;
  // res.status(statusCode).send(message);
  res.render("error.ejs", { message });
});

app.listen(6969, () => {
  console.log("Listening to PORT 6969");
});
