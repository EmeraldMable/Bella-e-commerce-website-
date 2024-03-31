import mongoose from "mongoose";
const Schema = mongoose.Schema;
const questions = new Schema({
    productId:{
        type:mongoose.Types.ObjectId,
        ref:'Product'
    },
    customerId:{
        type:mongoose.Types.ObjectId,
        ref:'User'
    },
    question:{
        type:String
    },
    created_at:{
        type:Date,
        default:Date.now()
    }
   
})
const Question =  mongoose.model('Question' , questions)
export {Question}
