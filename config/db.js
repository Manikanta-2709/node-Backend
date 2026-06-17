const mongoose=require("mongoose")

const connectdb=async()=>{
    try{
        await mongoose.connect("mongodb+srv://amanikanta354_db_user:27092005@cluster0.7ezlifq.mongodb.net/")
        console.log("db connected")
    }
    catch(err){
        console.log(err)
    }
}

module.exports = connectdb;