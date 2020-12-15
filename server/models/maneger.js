//Schema for Maneger

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Maneger = new Schema({
    firstname : String,
    lastname : String,
    email : String,
    dob: Date,
    password : String,
    company : String,
    address : String
});

module.exports = mongoose.model('Manegers', Maneger, 'Manegers');