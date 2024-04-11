import express from 'express'
import { addTocart, allItems , deleteItem, orderItems , updateCart , orderDelete } from '../controller/cart.js'

export const cartRoute = express.Router()

cartRoute.post('/cart' , allItems)
cartRoute.post('/addtocart', addTocart)
cartRoute.post('/delete' , deleteItem )
cartRoute.post('/update' , updateCart)
cartRoute.get('/order/delete' , orderDelete)
cartRoute.get('/cart/delete' , orderItems)







