import express from "express";
import { Addtocart } from "../controller/cart.js";

export const cartRoute = express.Router()

cartRoute.post('/cart' , Addtocart) 


