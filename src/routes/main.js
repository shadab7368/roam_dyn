
const { response, request } = require('express');
const express=require('express')
const {route} = require('express/lib/application')
const Detail = require("../models/Detail") //--1 after create and insert data in mongo
const Service = require('../models/Service')
const slider = require('../models/slider')
const routes =express.Router()
routes.get("/", async (req,res)=>{
 const details= await Detail.findOne({"_id":"641053e67e862e0166be1279"})//--2 after create and insert data in mongo
 const Slider = await slider.find()
 const Services= await Service.find()

// console.log(Slider)
 //const details = await Detail.findOne({"_id":"64198d7077bb493a0a6dcd88"})
 //console.log(details) //--1 after create and insert data in mongo for chaking result 
  res.render("index",{
    details:details,
    Slider:Slider,
    Services:Services
  });

  
});
routes.get('/gallery', async(req,res)=>{
  const details= await Detail.findOne({"_id":"641053e67e862e0166be1279"})//--2 after create and insert data in mongo
  //const details= await Detail.findOne({"_id":"64198d7077bb493a0a6dcd88"})//--2 after create and insert data in mongo
  res.render("gallery",{
    details:details
  })
});

routes.post('/process-contact-form',(request,response)=>{
console.log("this form is submit");
console.log(request.body)

});





module.exports = routes;