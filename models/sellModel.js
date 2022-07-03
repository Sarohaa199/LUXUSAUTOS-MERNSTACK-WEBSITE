const mongoose = require("mongoose");

const sellSchema = new mongoose.Schema({

    name : {type : String , required : true} ,
    image : {type : String , required : true} , 
    capacity : {type : Number , required : true},
    fuelType : {type : String , required : true} , 
    price : {type : Number , required : true}
})

const sellModel = mongoose.model('sells' , sellSchema)
module.exports = sellModel