const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const { listingSchema } = require("../schema.js");
const ExpressError = require("../utils/ExpressError.js");
const Listing = require("../models/listing.js");

const validateListing = (req, res, next) => {
    let { error } = listingSchema.validate(req.body);
    if (error) {
      throw new ExpressError(404, error);
    } else {
      next();
    }
  }; 

//all listings
router.get(
    "/",
    wrapAsync(async (req, res) => {
      let allListings = await Listing.find({});
      res.render("listings/index.ejs", { allListings });
    })
  );
  
  //new listing route
  router.get("/new", (req, res) => {
    res.render("listings/add.ejs");
  });
  
  //individual listing
  router.get(
    "/:id",
    wrapAsync(async (req, res) => {
      let { id } = req.params;
      let listing = await Listing.findById(id).populate("reviews");
      res.render("listings/show.ejs", { listing });
    })
  );
  
  //edit route
  router.get(
    "/:id/edit",
    wrapAsync(async (req, res) => {
      let { id } = req.params;
      let listingData = await Listing.findById(id);
      res.render("listings/edit.ejs", { listingData });
    })
  );
  
  //create new listing
  router.post(
    "/create",
    validateListing,
    wrapAsync(async (req, res, next) => {
      // let data = req.body.listing;
      const newListing = new Listing(req.body.listing);
      await newListing.save();
      res.redirect("/listings");
    })
  );
  
  //update existing listing
  router.put(
    "/:id/update",
    validateListing,
    wrapAsync(async (req, res) => {
      let { id } = req.params;
      await Listing.findByIdAndUpdate(id, { ...req.body.listing });
      res.redirect(`/listings/${id}`);
    })
  );
  
  //delete route
  router.delete(
    "/:id/delete",
    wrapAsync(async (req, res) => {
      let { id } = req.params;
      await Listing.findByIdAndDelete(id);
      res.redirect("/listings");
    })
  );

module.exports = router;