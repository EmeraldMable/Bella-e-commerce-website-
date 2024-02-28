import mongoose from "mongoose";

const Schema = mongoose.Schema;
const products = new Schema({
    name: {
        type:String,
        require :true,
        unique: true
    },
    status:{
        type:String,
        require:true,
        default:'in stock'
    },
    photo: {
        type: String,
        require: true,
    },
    subphoto:[{
        type:String
    }],
    howtouse:{
        type:String
    },
    color:[
        {
            type:String
        }
    ],
    brief:[
        {
            type:String
        }
    ],
    desc_myan: {
        type: String,
        require:true
    },
    desc_eng: {
        type:String,
        require:true
    },
    qty: {
        type: Number,
        require:true,
        default:0
    },
    productionDate:{
        type:Date,
        require:true
    },
    expired : {
        type:Date,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
    netweight:{
        type:Number
    },
    category:{
        type:String,
        require:true
    },
    subcategory:{
        type:String,
        require:true
    },
    set:{
        type:String,
        default:''
    }
})
const Product = mongoose.model('Product', products)
export {Product}

