import mongoose from "mongoose";

const countrySchema = new mongoose.Schema({
    countryName: String,
});

module.exports = mongoose.model('Country', countrySchema,"Countries");
