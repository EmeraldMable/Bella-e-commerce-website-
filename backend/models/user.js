import mongoose from "mongoose";
const Schema = mongoose.Schema;
const users = new Schema({
    name:{
        type:String,
        require:true,
        unique:true
    },
    
    photo:{
        type:String,
        default:'Upload your profile'
    },
    email:{
        type:String,
        require:true,
        unique:true
    },

    password:{
        type:String,
        require:true,
        unique:true
    },
    created_at:{
        type:Date,
        default:Date.now()
    },
    updated_at:{
        type:Date,
        default:Date.now()
    }
})

const User = mongoose.model('User',users)
export {User}