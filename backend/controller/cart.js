import { cartRoute } from '../routes/cart.js'
import {Cart} from '../models/cart.js'


const allItems = async (req,res,next) => {
    const {userId} = req.body
  
    try{
        const allItem = await Cart.find({customerId:userId})
        if(allItem){
            res.status(200).json(allItem)
        }else{
            res.status(200).json({message:'No item in the cart.'})
        }
        
     
    }catch(error){
        next(error)
    }
}

const addTocart = async (req,res,next) => {
    try{
        const {customerId,productId,qty,productName,img,price , instock} = req.body 
        
        const check = await Cart.findOne({productId})
        if(check){
            check.qty += 1
            await check.save()
            res.status(201).json({message:'Already in the cart. Quantity is increased.'})
        
        }else{
            const newAdd = await Cart.create({
                customerId,
                productId,
                qty,
                productName,
                img,
                price, 
                instock
            })
            res.status(200).json(newAdd )
        }
    }catch(error){
        next(error)
    }
}

const deleteItem = async (req,res, next) => {
    const {id} = req.body
    try{
       const deletedItem = await Cart.findByIdAndDelete(id)
       const cartitem = await Cart.find()
        res.status(200).json(cartitem)
    }catch(error){
        next(error)
    }
}

const updateCart = async (req, res,next) => {
    const {id, isChecked} = req.body
    try{ 
        if(id == 'all'){
            const update = await Cart.updateMany( {
                isChecked:false
            },{
                $set: {
                    isChecked:true
                }
            } , {new:true})
            res.status(200).json(update)
        }else{
            const update = await Cart.findByIdAndUpdate(id , {
                $set: {
                    isChecked:isChecked
                }
            } , {new:true})
            res.status(200).json(update)
        }
       
       
    }catch(error){
        next(error)
    }
}


//Delete Order items from cart//
const orderItems = async (req , res, next) => {
    try{
        const updated = await Cart.deleteMany({isChecked:true})
       const remainItems = await Cart.find()
       res.status(200).json(remainItems)
        
    }catch(error){
        next(error)
    }
}



export {addTocart , allItems , deleteItem , updateCart, orderItems}