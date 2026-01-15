const mongoose = require("mongoose");

function connectDB(){
    mongoose.connect(process.env.MONGODB_URL)
    .then(()=>{
        console.log("connected to MongoDB")
    })
    .catch((err)=>{
        console.log("error connected to MongoDB:",err)
    })
}

module.exports=connectDB