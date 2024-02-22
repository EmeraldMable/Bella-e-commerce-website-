import {Router} from 'express';
import { allUsers, createUser, deleteUser, singleUser, updateUser } from "../controller/user.js";
const userRoute = Router();

userRoute.get('/user',allUsers)
userRoute.post('/createuser',createUser)
userRoute.get('/user/:id',singleUser)
userRoute.patch('/user/:id' , updateUser)
userRoute.delete('/user/:id',deleteUser)

export {userRoute}

