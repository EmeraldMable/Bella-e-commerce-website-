import { Order } from "../models/order.js";


const createOrder = async(req, res, next) => {
    const{customerId , products} = req.body 
    
    const item = products.map((each) => {
        return {
           
                productId:each.productId,
                qty:each.qty,
                productName:each.productName,
                img:each.img,
                price:each.price
            
        }
       
    })
    console.log(item)
    try{
        const create  = await Order.create({ 
            customerId:customerId,
            products:item
        
        })
        res.status(200).json(create)
    }catch(error){
        next(error)
    }
}

const getOrder = async (req, res, next) => {
    const {userId} =  req.params
    
    try{
        const order = await Order.find({customerId:userId})
        res.status(200).json(order)
    }catch(error){
        next(error)
    }
}

export {createOrder , getOrder}