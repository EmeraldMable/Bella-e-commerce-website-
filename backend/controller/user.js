import mongoose from 'mongoose';
import {User} from '../models/user.js';
import { errorHandler } from '../error/errorHandler.js';


const allUsers = async (req,res,next) =>{
    const {email,password} = req.body
    try {
        const foundUser = await User.findOne({email,password})
        if(!foundUser) return next(errorHandler(404, 'Please sign up first.'))
        res.status(200).json(foundUser)
    }catch(error){
        next(error)
    }
   
}
const createUser = async (req,res,next) =>{
   const {username,email,password} = req.body
   try{
        if (username == '' || email == '' || password == '') return next(errorHandler(300, 'Please fill in all.'))
        const newUser = await User.create({username,email,password})
        res.status(200).json(newUser)
        
   }catch(error){
        next(error)
   }
   
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