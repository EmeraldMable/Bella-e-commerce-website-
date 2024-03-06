import {Router} from 'express';
import { allUsers, createUser,googlelogin, signOut, updateUser } from "../controller/user.js";
import {verify} from '../verifyUser/verifyToken.js'

const userRoute = Router();

userRoute.post('/user',allUsers)
userRoute.post('/createuser',createUser)
userRoute.post('/googlelogin', googlelogin)
userRoute.post('/update/:id' , verify , updateUser)

userRoute.get('/user', signOut)

export {userRoute}

