//express setup
const express = require("express");
const app = express();

//mongoose setup
const mongoose = require("mongoose");
const mongoURL = "mongodb://127.0.0.1:27017/wanderlust";

//Requiring from Router
const listings = require("./routes/listing.js");
const reviews = require("./routes/review.js");

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

// Custom Error
const ExpressError = require("./utils/ExpressError.js");

app.get("/", (req, res) => {
  res.send("Root is being called !!");
});

//Router Route 
app.use("/listings", listings);

//to pass the :id to the review route, we have to use mergeParams
app.use("/listings/:id/reviews", reviews);

//Handling invalid route request
app.all("*", (req, res, next) => {
  next(new ExpressError(404, "Page Not Found"));
});

// Error Handling middleware
app.use((err, req, res, next) => {
  let { statusCode = 500, message = "Something went wrong" } = err;
  res.render("error.ejs", { message });
});

app.listen(6969, () => {
  console.log("Listening to PORT 6969");
});
