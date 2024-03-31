import mongoose, { mongo } from "mongoose";
const Schema = mongoose.Schema;
const reviews = new Schema({
    productId:{
        type:mongoose.Types.ObjectId,
        ref:'Product'
    },
    customerId:{
        type:mongoose.Types.ObjectId,
        ref:'User'
    },
    review:{
        type:String
    },
    star:{
        type:Number,
        default:0
    },
    img:{
        type:String
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
})

const Review = mongoose.model('Review' , reviews)
export {Review}