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
        default:"https://unsplash.com/photos/a-view-of-a-pool-through-a-glass-door-B85O2kGnNhw" ,
        set : (v) => 
            v === "" 
                ? "https://unsplash.com/photos/a-view-of-a-pool-through-a-glass-door-B85O2kGnNhw"
                : v ,
        },
    price:Number,
    location:String,
    country:String,
});


const Listing = mongoose.model("Listing" , listingSchema);
module.exports = Listing;