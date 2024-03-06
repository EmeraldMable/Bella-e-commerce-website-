import { errorHandler } from "../error/errorHandler.js"
import jwt from 'jsonwebtoken'

const verify = (req,res,next) => {
    const token = req.cookies.access_token  
    if(!token) return next(errorHandler(401,'Log in first'))

    jwt.verify(token, process.env.JWT_SECRET , (err,user)=> {
        if(err) return next(errorHandler(403 , 'You are not authenticated'))

        req.user = user
        next()
    })
    
}
export {verify}