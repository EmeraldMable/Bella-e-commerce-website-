import mongoose from "mongoose";
const Schema = mongoose.Schema;
const users = new Schema({
    username:{
        type:String,
        require:true,
        unique:true
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
    photo:{
        type:String,
        default:'Upload Profile'
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