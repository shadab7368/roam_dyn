
const express=require('express')
const {route} = require('express/lib/application')
const Detail = require("../models/Detail") //--1 after create and insert data in mongo
const routes =express.Router()
routes.get("/", async (req,res)=>{
 const details= await Detail.findOne({"_id":"641053e67e862e0166be1279"})//--2 after create and insert data in mongo
 //const details = await Detail.findOne({"_id":"64198d7077bb493a0a6dcd88"})
 //console.log(details) //--1 after create and insert data in mongo for chaking result 
  res.render("index",{
    details:details
  })

  
})
routes.get('/gallery', async(req,res)=>{
  const details= await Detail.findOne({"_id":"641053e67e862e0166be1279"})//--2 after create and insert data in mongo
  //const details= await Detail.findOne({"_id":"64198d7077bb493a0a6dcd88"})//--2 after create and insert data in mongo
  res.render("gallery",{
    details:details
  })
})
module.exports=routes