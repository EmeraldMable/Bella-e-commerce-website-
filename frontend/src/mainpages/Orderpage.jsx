import Linksbar from '../components/Linksbar'
import Breadcrumb from '../components/Breadcrumb'
import Footer from '../components/Footerbar'
import PersonalInfo from '../components/Personalinfo'
import OrderSummary from '../components/Ordersummary'
import ScrollBtn from'../components/ScrollBtn'
import Payment from '../components/Payment'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'




function Orderpage() {
 
  const [order,setOrder] = useState(null)
  const {list} = useSelector(state => state.cart)
  

  useEffect(() => {
    window.scrollTo(0,0)
   },[])


  useEffect(() => {
    const order = list?.filter((item) => item.isChecked !== false)
    setOrder(order)
  },[list])
  
  return (
    <>
    <Linksbar/>
    <Breadcrumb/>
   
    <div className="mx-5 mt-5">
     
        <div className=' w-full grid grid-cols-1 lg:grid-cols-2 mb-10 '>
         
            <PersonalInfo items={order}/>
            <OrderSummary/>
            {
              order?.length >= 1 ?
             
             
              <Payment items={order}/>
             
               : ''
              
            }
           
        </div>
       

      
        
    </div>

    <ScrollBtn/>
    <Footer/>
    </>
  )
}

export default Orderpage