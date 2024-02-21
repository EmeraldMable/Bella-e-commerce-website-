import mongoose from 'mongoose';
import {Product} from '../models/products.js';


const allMakeup = async  (req,res) => {
    try{
        const all = await Product.find()
        res.status(200).json(all)
    }catch(error){
        res.status(400).json({error:error.message})
    }
   

   
}


const createMakeup = async (req,res) => {
    const {name } = req.body;
    try{
        const newMakeup = await Product.create({name})
        res.status(200).json(newMakeup)
    }catch(error){
       res.status(400).json({error:error.message})
    }

}

const detailMakeup = (req,res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({error:'No result'})
    }
   Product.findById(id)
   .then((result) => {
    res.status(200).json(result)
   })
   .catch(error => {
    res.status(400).json({error:error.message})
   })
}

const updateMakeup = (req,res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({error:'No result'})
    }
    Product.findByIdAndUpdate(id,{...req.body})
    .then((result) => res.status(200).json(result))
    .catch(error => res.status(400).json({error:error.message}))
}

const deleteMakeup = (req,res) => {
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
export {allMakeup,createMakeup,detailMakeup,updateMakeup,deleteMakeup}