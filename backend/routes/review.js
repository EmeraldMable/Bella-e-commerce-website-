import  express from "express";
import { review  , getReview} from "../controller/review.js";

const reviewRoute = express.Router()
reviewRoute.post('/review' , review)
reviewRoute.get('/getreview/:id' , getReview)

export {reviewRoute}