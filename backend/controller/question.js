
import { Question } from "../models/question.js";

const sendQuestion = async (req, res, next) => {
    const {productId, customerId, username, questions} = req.body 
  
   
    try{
            const newquestion = await Question.create({
                productId,
                customerId,
                username:username ? username:'Admin',
                questions:questions
            })
           
            res.status(200).json(newquestion)
        
    }catch(error){
        next(error)
    }
}

const getQuestion = async (req, res, next) => {
    const {id} = req.params
    try{
        const response = await Question.find({productId:id})
        res.status(200).json(response)
    }catch(error){
        next(error)
    }
}

const deleteQuestion = async (req,res,next) => {
    const {questionId} = req.params
    try{
        const deletequest = await Question.findOneAndDelete({_id:questionId})
        res.status(200).json(deletequest)
    }catch(error){
        next(error)
    }
}

const reply = async (req, res, next) => {
    const {questionsId,customerId,username,reply} = req.body
   
    try{
        const check = await Question.findOneAndUpdate({_id:questionsId},
            {
                $push:{
                    replies:{
                        questionsId:questionsId,
                        customerId:customerId,
                        username:username,
                        reply:reply
                    }
                }
            },{new:true})
        res.status(200).json("Your reply is posted")
    }catch(error){
        next(error)
    }
}

const deleteReply = async (req, res, next) => {
    const {questionid, replyId} = req.params
    try{
        const check = await Question.findByIdAndUpdate(questionid , {
            $pull:{replies:{_id:replyId}}
        }, {new:true})
        res.status(200).json('deleted')
    }catch(error){
        next(error)
    }
}


export {sendQuestion , getQuestion , deleteQuestion , reply , deleteReply}