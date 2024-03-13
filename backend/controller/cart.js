
 import {Cart} from '../models/cart.js'
 
 const Addtocart = async (req,res,next) => {
  const {customerId,productId, qty, productName , price} = req.body
 

  
  try{
    const cart = await Cart.findOne({customerId})
      if(cart){
        let itemIndex = cart.products.findIndex((item) => item.productId == productId)
        if(itemIndex > -1){
          let prodcutItem = cart.products[itemIndex];
          prodcutItem.qty = qty
          cart.products[itemIndex] = prodcutItem
        }else{
          cart.products.push({productId,qty,productName,price})

        }
        cart= await cart.save()
        return res.status(200).json(cart)
      }else{
        const newCart = await Cart.create({
          productId,qty,productName,price
        })
        return res.status(200).json(newCart)
      }
  }catch(error){
    next(error)
  }
  
    
}
export {Addtocart}