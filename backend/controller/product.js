import mongoose from 'mongoose';
import {Product} from '../models/products.js';


const allProduct = async  (req,res,next) => {
   
    try{
        const all = await Product.find()
        res.status(200).json(all)
       
    }catch(error){
        next(error)
    }  
}


const createProduct = async (req,res,next) => {
    const {name,status,subphoto,howtouse,color,brief,desc_myan,desc_eng,qty,productionDate,expired,price,netweight,
        category,subcategory,set } = req.body;
    try{
        const newMakeup = await Product.create({name,status,subphoto,
            howtouse,color,brief,desc_myan,desc_eng,qty,
            productionDate,expired,price,netweight,
            category,subcategory,set})
        res.status(200).json(newMakeup)
    }catch(error){
      next(error)
    }

}

const detailProduct = (req,res) => {
    const {id} = req.params
   Product.findById(id)
   .then((result) => {
    res.status(200).json(result)
   })
   .catch(error => {
    res.status(400).json({error:error.message})
   })
}

const updateProduct = (req,res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({error:'No result'})
    }
    Product.findByIdAndUpdate(id,{...req.body})
    .then((result) => res.status(200).json(result))
    .catch(error => res.status(400).json({error:error.message}))
}

const deleteProduct = (req,res) => {
   const {id} = req.params
   if(!mongoose.Types.ObjectId.isValid(id)){
    res.status(404).json({error:'No result'})
   }
   Product.findByIdAndDelete(id)
   .then((result) => {
    res.status(200).json(result)
   })
   .catch(error => res.status(400).json({error:error.message}))
}
export {allProduct,createProduct,detailProduct,updateProduct,deleteProduct}