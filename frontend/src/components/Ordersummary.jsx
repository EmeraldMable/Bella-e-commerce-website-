import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import Reply from '../components/Reply'
import {useNavigate} from "react-router-dom"

function Ordersummary() {
   
    const [order, setOrder] = useState(null)
    const {list} = useSelector(state => state.cart)
    const [checked , setChecked] = useState({})
    const [total , setTotal] = useState(null)
    const [date, setDate] = useState(new Date())

    const navigate = useNavigate()
  
    const BacktoCart =() =>{
      navigate('/cart')
    }

   useEffect(() => {
        const random = Math.floor(Math.random()* 10000000)
        setOrder(random)
        const checking = list.filter((item) => item.isChecked !== false)
        setChecked(checking)
        setTotal(checking.reduce((acc, currentValue) => (acc + (currentValue.price * currentValue.qty)), 0))
   },[])
  
  return (
    <>
    <div className="w-full mt-5 mb-20 mx-3 md:mx-20 lg:mx-0 text-left" >
   
            <p className='pt-serif-bold text-2xl text-left'>Step 2 : Please check products and prices</p>
       
    <div className=" w-[500px] border-2 p-2  my-10 overflow-x-scroll md:overflow-hidden lg:overflow-hidden">
        <p className="pt-serif-bold mb-2 mx-5 ">Invoice</p>
        <p className="pt-serif-regular relative -right-64 mb-3 mx-10 ">Date : {date.getDate() }/ { date.getMonth()} / {date.getFullYear()} </p>
        <div className="pt-serif-regular text-left mx-10">
            <div className="flex mb-1">
                <p className="mr-10 flex-1 ">Invoice No.</p>
                <span>{order}</span>
            </div>
            <div className="flex gap-10 mb-1">
                <p  className="mr-10 flex-1">Items</p>
                <span> {checked.length} </span>
            </div>
            {
               checked.length >= 1  ? checked?.map((item,index) =>(
                <div className="flex gap-10 mb-1" key={index}>
                <p  className="mr-10 flex-1">{item.productName} </p>
                <span> {item.qty } * {item.price} Kyats</span>
            </div>
               ) ) : (
                <p className=" underline">No items is selected to check out.</p>
               )
            }
          

            <div className="flex mt-10 border-t-2 pt-4 mb-1">
                <p  className="mr-10 flex-1">Total</p>
                <span> {total} Kyats </span>
            </div>

            
        </div>
       
    </div>
   
    {checked.length >= 1 ? 
             '' : <Reply className={`border-2 w-32 p-2 bg-red-800 rounded-md text-white hover:bg-gradient-to-r hover:from-red-900 hover:to-red-600`}
              type="Go to Cart"
              handleClick={BacktoCart}></Reply>}
    </div>
   
    </>
  )
}

export default Ordersummary