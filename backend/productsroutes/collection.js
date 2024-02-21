import {Router} from 'express';
const collectionRouter = Router();

collectionRouter.get('/collection' , (req,res) => {
    res.json({message:'All collection'})
})
collectionRouter.post('/collection', (req,res) => {
    res.json({message:'create collection'})
})
collectionRouter.get('/collection/:id' , (req,res) => {
    res.json({message:'get single collection'})
})
collectionRouter.patch('/collection/:id' , (req,res) => {
    res.json({message:'Update'})
})
collectionRouter.delete('/collection/:id', (req,res) => {
    res.json({message:'Delete'})
})
export {collectionRouter}