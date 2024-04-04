import express from 'express'
import { sendQuestion , getQuestion , deleteQuestion , reply, deleteReply } from '../controller/question.js'

const questionRoute = express.Router()

questionRoute.post('/question' , sendQuestion)
questionRoute.get('/getquestion/:id' , getQuestion)
questionRoute.get('/deletequestion/:questionId' , deleteQuestion)
questionRoute.post('/replyQuestion' , reply)
questionRoute.get('/deleteReply/:questionid/:replyId' , deleteReply)

export {questionRoute}