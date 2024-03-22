import express from 'express'
import { addTocart, allItems , deleteItem } from '../controller/cart.js'

export const cartRoute = express.Router()

cartRoute.post('/cart' , allItems)
cartRoute.post('/addtocart', addTocart)
cartRoute.post('/delete' , deleteItem)





