import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import PayButton from "./PayButton"
import Reply from "./Reply"



function Ordersummary() {
    const navigate = useNavigate()
    const [order, setOrder] = useState(null)
    const {list} = useSelector(state => state.cart)
    const [checked , setChecked] = useState({})
    const [total , setTotal] = useState(null)
    const [date, setDate] = useState(new Date())

 

   useEffect(() => {
        const random = Math.floor(Math.random()* 10000000)
        setOrder(random)
        const checking = list.filter((item) => item.isChecked !== false)
        console.log(checking)
        setChecked(checking)
        setTotal(checking.reduce((acc, currentValue) => (acc + (currentValue.price * currentValue.qty)), 0))
   },[])
   const BacktoCart =() =>{
    navigate('/cart')
  }
  return (
    <>
    <div >
    {
        checked.length >=1 ?(
            <p className='pt-serif-bold text-2xl text-left mx-3 md:mx-16 lg:mx-24'>Step 2 : Please check products and prices</p>
        )
        :(
            ''
        )
    }
    <div className=" w-[600px] border-2 p-2 mx-3 my-10 md:mx-16 lg:mx-32 overflow-x-scroll md:overflow-hidden lg:overflow-hidden">
        <p className="pt-serif-bold mb-2">Invoice</p>
        <p className="pt-serif-regular relative -right-32 mb-3">Date : {date.getDate() }/ { date.getMonth()} / {date.getFullYear()} </p>
        <div className="pt-serif-regular text-left mx-2">
            <div className="grid grid-cols-2 gri mb-1">
                <p className="mr-10">Invoice No.</p>
                <span>{order}</span>
            </div>
            <div className="grid grid-cols-2 mb-1">
                <p  className="mr-10">Items</p>
                <span> {checked.length} </span>
            </div>
            {
               checked.length >= 1  ? checked?.map((item) =>(
                <div className="grid grid-cols-2 mb-1">
                <p  className="mr-10">{item.productName} </p>
                <span> {item.qty } * {item.price} Kyats</span>
            </div>
               ) ) : (
                <p className=" underline">No items is selected to check out.</p>
               )
            }
          

            <div className="grid grid-cols-2 mt-10 border-t-2 pt-4 mb-1">
                <p  className="mr-10">Total</p>
                <span> {total} Kyats </span>
            </div>
        </div>
    </div>
   
    {
        checked?.length >= 1 ? (
        <div className="text-left mx-3 my-10 md:mx-16 lg:mx-32" >
        <Reply className={`border-2 p-2 bg-red-800 rounded-md text-white hover:bg-gradient-to-r hover:from-red-900 hover:to-red-600`}
       type="Cancel Order"
       handleClick={BacktoCart}></Reply> 
         <PayButton items={checked} className={`border-2 ml-8 p-2 bg-red-800 rounded-md text-white hover:bg-gradient-to-r hover:from-red-900 hover:to-red-600`}
        type='Place Order'></PayButton> 
        </div>         
        ):(
            <Reply className={`border-2 p-2 bg-red-800 rounded-md text-white hover:bg-gradient-to-r hover:from-red-900 hover:to-red-600`}
            type="Go back to cart"
            handleClick={BacktoCart}></Reply>
        )
    }

    </div>
    </>
  )
}

export default Ordersummary