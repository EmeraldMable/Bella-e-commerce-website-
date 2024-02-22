import mongoose from 'mongoose';
import {User} from '../models/user.js';

const allUsers =  (req,res) =>{
    User.find()
    .then((result) => res.status(200).json(result))
    .catch(error => res.status(400).json({error:error.message}))
}
const createUser = (req,res) =>{
   const {username,email,password} = req.body
   User.create({username,email,password})
   .then((result) => res.status(200).json(result))
   .catch(error => res.status(400).json({error:error.message}))
   
}
const singleUser = (req,res) =>{
   const {id} = req.params
   if(!mongoose.Types.ObjectId.isValid(id)){
    res.status(404).json({error:'Wrong Id'})
   }
   User.findById(id)
   .then((result) => res.status(200).json(result))
   .catch(error => res.status(400).json({error:error.message}))
}
const updateUser = (req,res) =>{
    const {id} = req.params;
    
    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({error:'Wrong Id'})
    }
    User.findByIdAndUpdate(id,{
        ...req.body
    })
    .then((result) => res.status(200).json(result))
    .catch(error => res.status(400).json({error:error.message}))
}
const deleteUser = (req,res) =>{
   const {id} = req.params;
   if(!mongoose.Types.ObjectId.isValid(id)){
    res.status(404).json({error:'Wrong Id'})
   }
   User.findByIdAndDelete(id)
   .then((result) => res.status(200).json(result))
   .catch(error => res.status(400).json({error:error.message}))
}

export {
    allUsers,createUser,singleUser,updateUser,deleteUser
}