const mongoose = require('mongoose')
const crypto = require("crypto")
const { v1: uuidv1 } = require('uuid');




const userSchema = new mongoose.Schema({
    companyName: {
        type: String,
        trim: true,
        required: true,
        maxlength: 2000
    },
    designation: {
        type: String,
        required: true,
        maxlength: 2000
    },
    firstname: {
        type: String,
        required: true,
        maxlength: 2000
    },
    middlename: {
        type: String,
        trim: true,
        required: true,
    },
    lastname: {
        type: String,
        trim: true,
        required: true,
    },
    address: {
        type: String,
        required: true,
        maxlength: 2000
    },
    telephone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    stateOfOrigin: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        trim: true,
        required: true,
    },
    maritalStatus: {
        type: String,
        trim: true,
        required: true,
    },
    spouseName: {
        type: String,
        trim: true,
        required: true,
        maxlength: 32
    },
    adjectivalName: {
        type: String,
        trim: true,
        required: true,
        maxlength: 32
    },
    dateOfBirth: {
        type: Date,
        required: true
    },
    dateOfHire: {
        type: Date,
        required: true
    },
    religion: {
        type: String,
        required: true
    },
    genotype: {
        type: String,
        required: true
    },
    highestEducationalQualification: {
        type: String,
        required: true
    },
    nationality: {
        type: String,
        required: true
    },
    employmentStatus: {
        type: String,
        required: true,
    },
    pensionRSANo: {
        type: String,
        required: true
    },
    nameOfNextOfKin: {
        type: String,
        trim: true,
        required: true,
        maxlength: 32
    },
    nextOfKinRelationship: {
        type: String,
        trim: true,
        required: true,
        maxlength: 32
    },
    addressOfNextOfKin: {
        type: String,
        trim: true,
        required: true,
        maxlength: 32
    },
    nextOfKinMobileNumber: {
        type: String,
        required: true
    }
},
{ timestamps: true }
);

module.exports = mongoose.model("User", userSchema);