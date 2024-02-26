import {Router} from 'express';
import { allUsers, createUser,googlelogin, deleteUser, singleUser, updateUser } from "../controller/user.js";
const userRoute = Router();

userRoute.post('/user',allUsers)
userRoute.post('/createuser',createUser)
userRoute.post('/googlelogin', googlelogin)
userRoute.get('/user/:id',singleUser)
userRoute.patch('/user/:id' , updateUser)
userRoute.delete('/user/:id',deleteUser)

export {userRoute}

