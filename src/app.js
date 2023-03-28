const express = require("express")
const app= express();
const hbs = require("hbs");
const { MongoClient } = require('mongodb');
const mongoose = require("mongoose");


const routes = require('./routes/main')
const Detail = require("./models/Detail")
const slider=require("./models/slider")

// /static/css/StyleSheet.css ka matlab yeh ki public folder use ki jgha par static use krna hai 
const Service = require("./models/Service")
app.use('/static',express.static("public"))

app.use('/',routes)



// template engine set 
// importent line 
app.set('view engine','hbs')
app.set("views","views")
hbs.registerPartials("views/partials")

//-----------------------------------*//
//db connectionss
//  mongoose.connect("mongodb://localhost/website_tut",()=>{
//      console.log("db connected")
//  })
 mongoose.connect('mongodb://127.0.0.1:27017/website_tut');
 //mongoose.connect('mongodb+srv://shadabjsr:2bD7oBtUaKKkMsCM@cluster0.ilpajmp.mongodb.net/test?retryWrites=true&w=majority');
 
if(mongoose.connection.on){
console.log("db connected")
}else{
    console.log("db not connected")
}

// Service.create([
//     {
//         card_Image:"/static/images/roam.png",
//         card_Title:'Silver',
//         card_Group:'Daily Groups',
//         card_Days:'14 Days',
//         card_Start_date:'15',
//         card_Start_Month:'Aug',
//         card_Start_Year:'2022',
//         card_End_Date:'15',
//         card_End_Month:'May',
//         card_End_Year:'2023',
//         card_Hotal_Place:'Makkah-3',
//         Card_Hotal_Name:'Lulu Al Sharq',
//         card_price:'1,05,000',
//         card_Link :'/static/gallery.hbs'
//     },
//     {
//         card_Image:"/static/images/roam.png",
//         card_Title:'Gold',
//         card_Group:'Daily Groups',
//         card_Days:'15 Days',
//         card_Start_date:'16',
//         card_Start_Month:'Dec',
//         card_Start_Year:'2023',
//         card_End_Date:'16',
//         card_End_Month:'Jun',
//         card_End_Year:'2023',
//         card_Hotal_Place:'Madinah-3',
//         Card_Hotal_Name:'Artal International',
//         card_price:'2,05,000',
//         card_Link :'/static/gallery.hbs'
//     }
// ])



//     slider.create([
//     {
//         title:'learn java in very easy language',
//         subTitle:"java is one of the most popular programming language",
//         imageUrl:"/static/images/s1.jpg"
//     },
//     {
//         title:'what is Django in python',
//         subTitle:"Django is most famous web programming",
//         imageUrl:"/static/imgages/s2.png"

//     },
//     {
//         title:'what about node',
//         subTitle:"node js is runtime env to execute of python",
//         imageUrl:"/static/imgages/s3.jpg"
 
//     }
// ])
// Detail.create({
//     brandIconUrl:"/static/images/roam.png",
//     links:[
//         {
//             label:"Home",
//             url:"/"
//         },
//         {
//           label:"Services",
//           url:"/services"  
//         },
//         {
//           label:"Gallery",
//           url:"/gallery"  
//         },
//         {
//           label:"About",
//           url:"/about"  
//         },
//         {
//           label:"Contact Us",
//           url:"/contact-us"  
//         },
        
//     ]

// })
   
app.listen(process.env.PORT | 5556,()=>{
    console.log("Server Start")
})
