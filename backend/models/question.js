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
    username:{
        type:String
    },
    questions:{
        type:String,
        required:true
    },
    replies:[
       
       {
        questionsId:{
            type:mongoose.Types.ObjectId
        }, 
        customerId:{
            type:mongoose.Types.ObjectId
        },
        username:{
            type:String
        },
        reply:{
            type:String
        },
        created_at:{
            type:Date,
            default:Date.now()
        }
       }

    ]
   
   
} ,{
    timestamps:true
})
const Question =  mongoose.model('Question' , questions)
export {Question}
