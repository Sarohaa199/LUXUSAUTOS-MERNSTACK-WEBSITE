const mongoose = require("mongoose");

const buySchema = new mongoose.Schema({

      firstname : {type : String},
      lastname : {type : String},
      email : {type : String},
      phoneno : {type : Number},
      address : {type : String},
      car : {type : mongoose.Schema.Types.ObjectID , ref:'cars'},
      user : {type : mongoose.Schema.Types.ObjectID , ref:'users'},
      testdrivedate : {type : Date , required : true},
      totalAmount : {type : Number}
},
  {timestamps : true}
)

const buyModel = mongoose.model('buys' , buySchema)

module.exports = buyModel