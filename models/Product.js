const mongoose=require("mongoose")
const ProductSchema=new mongoose.Schema(
    {
        title:{
            type:String
        },
        price:
        {
            type:Number
        },
        description:{
            type:String
        },
        image:{
        type:String
        },

    }
)
module.exports=mongoose.model("Product",ProductSchema)