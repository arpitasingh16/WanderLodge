const express = require("express");
const app=express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");
const methodOverride = require("method-override");

const MONGO_URL="mongodb://127.0.0.1:27017/wanderlodge";

main()
    .then(() => {
        console.log("connected to database");
    })
    .catch((err) => {
        console.log(err);
    });

async function main() {
  await mongoose.connect(MONGO_URL);
};

app.set("view engine" , "ejs");
app.set("views" , path.join(__dirname , "views"));
app.use(express.urlencoded({ extended : true}));          //to obtain data from url

app.get("/", (req,res) => {
    res.send("I am root");
});

//Index Route
app.get("/listings" , async (req,res) => {
    let allListings = await Listing.find({});
    res.render("listings/index.ejs" , {allListings});
});

//New Route 
app.get("/listings/new" , (req,res) => {
    res.render("listings/new.ejs");
});

//Show Route 
app.get("/listings/:id" , async (req,res) => {
    let {id} = req.params;
    let listing = await Listing.findById(id);
    res.render("listings/show.ejs" , {listing});
});
 
//Create Route
app.post("/listings" , async (req,res) => {
    let newListing = new Listing(req.body.listing);
    await newListing.save();
    res.redirect("/listings");
});

//Edit Route
app.get("/listings/:id/edit" , async (req,res) => {
    let {id} = req.params;
    let listing = await Listing.findById(id);
    //console.log(id);
    res.render("listings/edit.ejs" , {listing});
});

app.post(" ")

// app.get("/testlisting" , async (req,res) => {
//     let sampleListing = new Listing ({
//         title: "new Villa" ,
//         description : "home",
//         price:1200 ,
//         location : "goa",
//         country : "india",
//     });

//     await sampleListing.save();
//     console.log("saved");
//     res.send("successful testing");
// });

app.listen(8080,() => {
    console.log("listening on port 8080");
});

