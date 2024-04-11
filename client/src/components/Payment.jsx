import { useNavigate } from "react-router-dom"
import Visa from '../assets/Visa.png'
import kbz from '../assets/kbz.png'
import wave from '../assets/wave.png'
import aya from '../assets/aya.png'
import ayapay from '../assets/ayapay.jpg'
import Reply from "./Reply"
import StripeButton from '../components/StripeButton'
import { UpdateCart } from "../redux/cartSlice"
import {useDispatch , useSelector } from 'react-redux'



function Payment({items}) {
  const {currentUser} = useSelector(state => state.user)
  const navigate = useNavigate()
  const dispatch = useDispatch()


  

  const clearOrder = async () => {
    try{
      const clear = await fetch('/products/order/delete')
      const data = await clear.json()
      dispatch(UpdateCart(data))
      navigate('/orderconfirm')
    }catch(error){
      console.log(error)
    }

    try{
      const createOrder = await fetch('/products/createorder' , {
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        } ,
        body:JSON.stringify({
          customerId:currentUser._id,
          products:items
        })
      })
      const order = await createOrder.json()
      
    }catch(error){
      console.log(error)
    }
   
  }

  const BacktoCart =() =>{
    navigate('/cart')
  }

  return (
    <div className="w-full mt-5 lg:mt-0 mb-10 mx-2 md:mx-16 lg:mx-16 text-left leading-9 mr-32">
       <p className="pt-serif-bold text-2xl text-left -mt-10 mb-6"> Step 3 : Please choose your prefered payment</p>
       <p className="pt-serif-regular">Choose one payment option.</p>
       <div className="w-full mt-8 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-y-10">
       <button className="link hover:scale-110" onClick={clearOrder} >
        <img className=" max-w-28  border-2" src={Visa} alt="visa card for payment" /></button>
        <button className="link hover:scale-110" onClick={clearOrder} >
        <img className=" max-w-28 " src={kbz} alt="KBZ bank for payment" /></button>
        <button className="link hover:scale-110" onClick={clearOrder} >
        <img className="max-w-28  " src={wave} alt="wave money application for payment" /></button>
        <button className="link hover:scale-110" onClick={clearOrder} >
        <img className=" max-w-28  " src={aya} alt="aya bank for payment" /></button>
        <button className="link hover:scale-110" onClick={clearOrder} >
        <img className="max-w-28" src={ayapay} alt="aya pay application for payment" /></button>
       <button to='/orderconfirm' className="link w-32 border-2 mt-2 h-12 p-1 rounded-md hover:bg-black hover:text-white">Cash on delivery</button>
       </div>



       {
        items?.length >= 1 ? (
        <div className="text-left mx-3 my-10" >
        <Reply className={`border-2 mr-5 p-2 bg-red-800 rounded-md text-white hover:bg-gradient-to-r hover:from-red-900 hover:to-red-600`}
       type="Cancel Order"
       handleClick={BacktoCart}></Reply> 
         <StripeButton items={items}/>
        
        </div>         
        ):(
            <Reply className={`border-2 p-2 bg-red-800 rounded-md text-white hover:bg-gradient-to-r hover:from-red-900 hover:to-red-600`}
            type="Go back to cart"
            handleClick={BacktoCart}></Reply>
        )
    }

   

     
    </div>
  )
}

export default Payment