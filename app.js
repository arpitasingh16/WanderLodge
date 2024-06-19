const express = require("express");
const app=express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");

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

app.get("/", (req,res) => {
    res.send("I am root");
});

app.get("/testlisting" , async (req,res) => {
    let sampleListing = new Listing ({
        title: "new Villa" ,
        description : "home",
        price:1200 ,
        location : "goa",
        country : "india",
    });

    await sampleListing.save();
    console.log("saved");
    res.send("successful testing");
});

app.listen(8080,() => {
    console.log("listening on port 8080");
});

