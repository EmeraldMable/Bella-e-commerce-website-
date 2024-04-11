import React, { useEffect, useState } from 'react'
import Linksbar from '../components/Linksbar'
import Footer from '../components/Footerbar'
import Breadcrumb from '../components/Breadcrumb'
import { useDispatch, useSelector } from 'react-redux'
import { productInCart } from '../redux/cartSlice.js'
import MobileCart from '../components/MobileCart.jsx'
import ScrollBtn from '../components/ScrollBtn.jsx'



function Cartpage() {
  const {currentUser} = useSelector(state => state.user)
  const [items,setItems] = useState()

  const dispatch = useDispatch()
 useEffect(() => {
  window.scrollTo(0,0)
 },[])
  
  useEffect (() => {
      const allItems = async () =>{
        try{
          const data = await fetch('/products/cart' , {
            method:"POST",
            headers:{
              "Content-type" : "application/json"
            },
            body:JSON.stringify({
              userId:currentUser._id
            })
          })
          const item = await data.json()
          setItems(item)
          dispatch(productInCart(item))
        }catch(error){
          console.log(error)
        }
      }
      allItems();
 },[])

  return (
    <>
    <Linksbar/>
    <Breadcrumb/>
    <h2 className='pt-serif-bold text-3xl mt-4 ' style={{color:'#786262'}}
        >Shopping Cart</h2>
    <div className=' w-full'>
      <div className='text-left w-auto mt-8 mx-5 sm:mx-5 md:mx-5 lg:mx-auto lg:w-2/3'  style={{color:'#786262'}}>
        <h3 className='pt-serif-bold mb-4 text-xl'>Return Policy *</h3>
        <p className='text-lg mb-2'>* Gift cards <strong>are not refundable.</strong> </p>
        <p className='text-lg mb-2'>* To complete a refund, we require <strong>a receipt or proof of purchase.
          </strong></p>
        <p className='text-lg mb-2'>* Please <strong>do not send</strong> your purchase back to the manyfacturer.</p>
        <p className='text-lg mb-2'>* If you<strong> are approved</strong>, then your refund <strong>
        will be processed</strong>, and a credit will <strong>automatically</strong>  be
          applied to your credit card or original method of payment, within <strong>  a certain amount of days.
            </strong>
        </p>
      </div>
          <MobileCart/>
   
     
      </div>
    
      <ScrollBtn/>
    <Footer/>
    </>
  )
}

export default Cartpage