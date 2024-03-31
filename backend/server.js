import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser'
import { tutorialRouter } from './routes/tutorial.js';
import { userRoute } from './routes/user.js';
import { productRoute } from './routes/product.js';
import {cartRoute} from './routes/cart.js'
import { reviewRoute } from './routes/review.js';


dotenv.config(); 
const app = express();


app.use(express.json())

app.use(cookieParser())


app.use('/admission', userRoute)

app.use('/products', productRoute  , tutorialRouter , cartRoute , reviewRoute )



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


