import {Router} from 'express';
import { allUsers, createUser, deleteUser, singleUser, updateUser } from "../controller/user.js";
const userRoute = Router();

userRoute.get('/',allUsers)
userRoute.post('/',createUser)
userRoute.get('/:id',singleUser)
userRoute.patch('/:id' , updateUser)
userRoute.delete('/:id',deleteUser)

export {userRoute}

