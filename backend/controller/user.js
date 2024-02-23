import mongoose from 'mongoose';
import {User} from '../models/user.js';
import { errorHandler } from '../error/errorHandler.js';
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'


const allUsers = async (req,res,next) =>{
    const {email,password} = req.body
    try {
        const foundUser = await User.findOne({email})
        if(!foundUser) return next(errorHandler(404, 'Please sign up first.'))
        const unhashedPassword = bcryptjs.compareSync(password,foundUser.password)
        if(!unhashedPassword) return next(errorHandler(401, 'Wrong Password'))
        const token = jwt.sign({id:foundUser._id}, process.env.JWT_SECRET)
        const {password:hashedPassword , ...rest} = foundUser._doc
        res.cookie('access_token', 
        token , {httpOnly:true}).status(200).json(rest)
    }catch(error){
        next(error)
    }
   
}
const createUser = async (req,res,next) =>{
   const {username,email,password} = req.body
   
   try{
        const hashedPassword = bcryptjs.hashSync(password,10)
        if (username == '' || email == '' || password == '') return next(errorHandler(300, 'Please fill in all.'))
        const newUser = await User.create({username,email,password:hashedPassword})
        const {password:removePassword, ...rest} = newUser._doc
        res.status(200).json(rest)
        
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