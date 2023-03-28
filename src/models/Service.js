const mongoose=require("mongoose")
const Sevice=mongoose.Schema({
card_Image:String,
card_Title:String,
card_Group:String,
card_Days:String,
card_Start_date:String,
card_Start_Month:String,
card_Start_Year:String,
card_End_Date:String,
card_End_Month:String,
card_End_Year:String,
card_Hotal_Place:String,
Card_Hotal_Name:String,
card_price:String,
card_Link:String
})
module.exports=mongoose.model("services",Sevice)