import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser'
import { userRoute } from './routes/user.js';
import { productRoute } from './routes/product.js';
import {cartRoute} from './routes/cart.js'
import { reviewRoute } from './routes/review.js';
import { questionRoute } from './routes/question.js';
import { StripeRouter } from './routes/Stripe.js';
import { OrderRoute } from './routes/order.js';


dotenv.config(); 
const app = express();


app.use(express.json())

app.use(cookieParser())


app.use('/admission', userRoute)

app.use('/products', productRoute  , cartRoute , reviewRoute , questionRoute , OrderRoute )

app.use('/products/stripe' , StripeRouter)

app.use((err,req,res,next)=>{
    const statusCode= err.statusCode || 500;
    const message = err.message || 'internal server error'
    return res.status(statusCode).json({
        success:false,
        message,
        statusCode
    })
   
})

mongoose.connect(process.env.CONNECT_URL)
.then(() => {
    app.listen(process.env.PORT , () => {
        console.log('listening to')
    })
})
.catch(error => {
    console.log('not connected')
})


