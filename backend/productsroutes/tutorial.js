import {Router} from 'express';
const tutorialRouter = Router();

tutorialRouter.get('/tutorial' , (req,res) => {
    res.json({message:'All tutorials'})})

tutorialRouter.post('/tutorial' , (req,res) => {
    res.json({message:'create tutorial'})})

tutorialRouter.get('/tutorial/:id' , (req,res) => {
    res.json({message:'get single tutorial'})})

tutorialRouter.patch('/tutorial/:id' , (req,res) => {
    res.json({message:'Update tutorial'})})

tutorialRouter.delete('/tutorial/:id' , (req,res) => {
    res.json({message:'delete tutorial'})})

export {tutorialRouter}