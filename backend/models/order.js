import mongoose from "mongoose"
const Schema = mongoose.Schema
const orders = new Schema({
    customerId:{
        type:mongoose.Types.ObjectId,
        ref:"User"
    },
    products:[
        {
        productId:{
            type:mongoose.Types.ObjectId,
            ref:"Product"
        },

        qty:{
            type:Number
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
    }],
    isDelivered:{
        type:Boolean,
        default:false
    }

},{
    timestamps:true
})

export const Order = mongoose.model('Order' , orders)