import express from 'express'
import { addTocart, allItems } from '../controller/cart.js'

export const cartRoute = express.Router()

cartRoute.post('/cart' , allItems)
cartRoute.post('/addtocart', addTocart)


