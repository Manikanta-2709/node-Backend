<<<<<<< HEAD
const mongoose = require("mongoose")

const Productschema = new mongoose.Schema({

    name:{
        type:String,
    },
    price:{
        type:Number
    },
    description:{
        type:String,
    },
    image:{
        type:String
    }

    
})

=======
const mongoose = require("mongoose")

const Productschema = new mongoose.Schema({

    name:{
        type:String,
    },
    price:{
        type:Number
    },
    description:{
        type:String,
    },
    image:{
        type:String
    }

    
})

>>>>>>> fd960dbf1727899b9cdeb6d7477fdcb74d8ab56f
module.exports = mongoose.model("Product",Productschema)