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
    username:{
        type:String
    },
    photo:{
        type:String
    },
    review:{
        type:String
    },
    star:{
        type:Number,
        default:0
    },
   
    createdAt:{
        type:Date,
        default:Date.now()
    }
})

const Review = mongoose.model('Review' , reviews)
export {Review}