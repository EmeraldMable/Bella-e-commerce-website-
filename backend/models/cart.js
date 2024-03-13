import mongoose from "mongoose";
const Schema = mongoose.Schema
const cart = new Schema({
    customerId:{
       type:Schema.Types.ObjectId,
       ref:"Product"
    },
    products:[
        {
            productId: Number,
            qty:Number,
            productName:String,
            price:Number
        }

    ]
   
   
},{timestamp:true})

const Cart = mongoose.model('Cart',cart)
export {Cart}