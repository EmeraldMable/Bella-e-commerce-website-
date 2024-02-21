import express from 'express';
import { allMakeup, createMakeup, deleteMakeup, detailMakeup, updateMakeup } from '../controller/makeup.js';


export const makeupRoute = express.Router();

makeupRoute.get('/makeup', allMakeup)
makeupRoute.post('/makeup' , createMakeup )
makeupRoute.get('/makeup/:id' , detailMakeup)
makeupRoute.patch('/makeup/:id' , updateMakeup)
makeupRoute.delete('/makeup/:id', deleteMakeup )

