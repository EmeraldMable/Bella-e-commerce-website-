import { Review } from "../models/review.js";
const review = async ( req, res, next) => {
    const {productId, customerId, review , star,img} = req.body 
    try{
        const addReview = await Review.create({
            productId,
            customerId,
            review,
            star,
            img
        })
        req.status(200).json(addReview)
    }catch(error){
        next(error)
    }
} 
const getReview = async (req, res, next) => {
    const {id} = req.params
    try{
        const getreview = await Review.find({productId:id})
       
        res.status(200).json(getreview)
        
    }catch(error){
        next(error)
    }
}
export {review , getReview}