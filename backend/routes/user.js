import {Router} from 'express';
import { allUsers, createUser,googlelogin, signOut, updateUser , UpdateInfo } from "../controller/user.js";
import {verify} from '../verifyUser/verifyToken.js'

const userRoute = Router();

userRoute.post('/user',allUsers)
userRoute.post('/createuser',createUser)
userRoute.post('/googlelogin', googlelogin)
userRoute.post('/update/:id' , verify , updateUser)
userRoute.post('/info/:id' , UpdateInfo)

userRoute.get('/user', signOut)

export {userRoute}

