import {Router}  from "express";
import { allskincare, createSkincare, deleteSkincare, detailSkincare, updateSkincare } from "../controller/skincare.js";
const skincareRoute = Router();

skincareRoute.get('/skincare' , allskincare)

skincareRoute.post('/skincare', createSkincare)
skincareRoute.get('/skincare/:id' , detailSkincare)
skincareRoute.patch('/skincare/:id' , updateSkincare)
skincareRoute.delete('/skincare' , deleteSkincare)



export {skincareRoute}