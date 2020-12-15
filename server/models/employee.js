//Schema for emplyee 
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Employee = new Schema({
    firstname : String,
    lastname : String,
    email : String,
    mobile : Number,
    dob: Date,
    company : String,
    address : String,
    city : String
});

module.exports = mongoose.model('Employees', Employee, 'Employees');