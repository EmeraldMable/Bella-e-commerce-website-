import mongoose from "mongoose";

const Schema = mongoose.Schema;
const products = new Schema({
    name: {
        type:String,
        require :true,
        unique: true
    }
})
const Product = mongoose.model('Product', products)
export {Product}

/*  
, 
    photo: [{
        type: String,
        require: true
    }],
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
    category:{
        type:String,
        require:true
    },
    subcategory:{
        type:String,
        require:true
    },
    collection:{
        type:String,
        default:''
    }
 */