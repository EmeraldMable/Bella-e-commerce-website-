import express from "express"
import { createOrder , getOrder } from "../controller/order.js"

const OrderRoute = express.Router()
OrderRoute.post('/createorder' , createOrder)
OrderRoute.get('/getorder/:userId' , getOrder)

export {OrderRoute}