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
    fullName: {
        type: String,
        required: true,
        maxlength: 2000
    },
    address: {
        type: String,
        required: true,
        maxlength: 2000
    },
    telePhone: {
        type: Number,
        default: 0
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    stateOfOrigin: {
        type: String,
        trim: true,
        required: true,
        maxlength: 32
    },
    gender: {
        type: String,
        trim: true,
        required: true,
        maxlength: 32
    },
    maritalStatus: {
        type: String,
        trim: true,
        required: true,
        maxlength: 32
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
    DateOfBirth: {
        type: Number,
        required: true,
        default: 0
    },
    DateOfHire: {
        type: Number,
        required: true,
        default: 0
    },
    religion: {
        type: String,
        trim: true,
        required: true,
        maxlength: 32
    },
    genotype: {
        type: String,
        trim: true,
        required: true,
        maxlength: 32
    },
    highestEducationalQualification: {
        type: String,
        trim: true,
        required: true,
        maxlength: 32
    },
    nationality: {
        type: String,
        trim: true,
        required: true,
        maxlength: 32
    },
    employmentStatus: {
        type: String,
        trim: true,
        required: true,
        maxlength: 32
    },
    pensionRSANo: {
        type: Number
    },
    NameOfNextOfKin: {
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
        type: Number,
        default: 0
    }
},
{ timestamps: true }
);

module.exports = mongoose.model("User", userSchema);