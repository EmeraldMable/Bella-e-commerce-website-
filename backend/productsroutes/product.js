import express from 'express';
import {  allProduct,  createProduct,  deleteProduct, detailProduct, updateProduct } from '../controller/product.js';


export const productRoute = express.Router();

productRoute.get('/:id' , detailProduct)
productRoute.post('/' , createProduct )
productRoute.patch('/:id' , updateProduct)
productRoute.delete('/:id', deleteProduct )
productRoute.get('/', allProduct)

