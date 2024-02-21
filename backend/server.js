import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import  {makeupRoute}  from './productsroutes/makeup.js';
import { skincareRoute } from './productsroutes/skincare.js';
import { collectionRouter } from './productsroutes/collection.js';
import { tutorialRouter } from './productsroutes/tutorial.js';
import { userRoute } from './userRoute/user.js';

dotenv.config(); 
const app = express();


app.use(express.json())

app.use('/user', userRoute)

app.use('/products', makeupRoute , skincareRoute , collectionRouter , tutorialRouter)

mongoose.connect(process.env.CONNECT_URL)
.then(() => {
    app.listen(process.env.PORT , () => {
        console.log('listening to')
    })
})
.catch(error => {
    console.log('not connected')
})


