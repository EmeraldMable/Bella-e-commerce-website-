import Linksbar from '../components/Linksbar'
import Breadcrumb from '../components/Breadcrumb'
import Footer from '../components/Footerbar'
import PersonalInfo from '../components/Personalinfo'
import Payment from '../components/Payment'
import OrderSummary from '../components/Ordersummary'
import ScrollBtn from'../components/ScrollBtn'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'


function Orderpage() {
  
  const [order,setOrder] = useState(null)
  const {list} = useSelector(state => state.cart)
  useEffect(() => {
    const order = list.filter((item) => item.isChecked !== false)
    setOrder(order)
  },[list])
  
  return (
    <>
    <Linksbar/>
    <Breadcrumb/>
   
    <div className='w-auto mx-auto'>
      {
            order?.length >= 1 ? (
              <p className='pt-serif-bold text-2xl text-left ml-28 mt-10'>Step 1 : Please check your info.</p>
            ): (
              ''
            )
          }
        <div className='flex mb-10 gap-10 '>
         
            <PersonalInfo/>
            <OrderSummary/>
        </div>
       

      {order?.length >= 1 ? (
        <Payment/>
      ):(
        <p className='pt-serif-bold text-left ml-48 text-xl'>Please select items to check out.</p>
      )}
        
        
    </div>
    <ScrollBtn/>
    <Footer/>
    </>
  )
}

export default Orderpage