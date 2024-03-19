import mongoose from "mongoose";
const Schema = mongoose.Schema
const cart = new Schema({
    customerId:{
       type:mongoose.Types.ObjectId,
       ref:"User"
    },
    productId:{
        type:mongoose.Types.ObjectId,
        ref:"Product" 
    },
    qty:{
        type:Number,
        default:1
    },
    productName:{
        type:String
    },
    img:{
        type:String
    },
    price:{
        type:Number
    }
},{timestamp:true})

const Cart = mongoose.model('Cart',cart)
export {Cart}