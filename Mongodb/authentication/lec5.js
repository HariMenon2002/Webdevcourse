//mongodb has no particular schema, it can accept objects of diff schema in a single collection(which is not very safe)
//mongoose has a particular schema defined, so only that data following that schema can be entered

const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const jwtPassword = "123456";

const UserSchema=new mongoose.Schema({
    email:String,
    password:String,
    purchasedCourses:[{                       //array of type object
        type:mongoose.Schema.Types.ObjectId,
        ref:'Course'
    }] //this is actually a reference of objects to another table
});

const CourseSchema=new mongoose.Schema({
    title:String,
    price: 5999
})

const User=mongoose.model("User",UserSchema);
const Course=mongoose.model('Course',CourseSchema)

//cluster is a group of databases(userappnew), Database(userapp) can have group of tables
