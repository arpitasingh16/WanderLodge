const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title:{
        type: String,
        required: true,
    },
    description:String,
    image:{
        type:String,
        default:"https://unsplash.com/photos/white-and-brown-house-near-swimming-pool-during-daytime-HKr5cn6S0q0" ,
        set : (v) => 
            v === "" 
                ? "https://unsplash.com/photos/white-and-brown-house-near-swimming-pool-during-daytime-HKr5cn6S0q0"
                : v ,
        },
    price:Number,
    location:String,
    country:String,
});


const Listing = mongoose.model("Listing" , listingSchema);
module.exports = Listing;