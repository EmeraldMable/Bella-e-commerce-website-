import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"



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
    <div className="mx-0">
    {
        checked.length >=1 ?(
            <p className='pt-serif-bold text-2xl text-left -mt-10 mb-10'>Step 2 : Please check products and prices</p>
        )
        :(
            ''
        )
    }
    <div className=" w-auto border-2 p-2 mx-3 my-10">
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
        <button className="border-2 p-2 bg-red-800 rounded-md text-white hover:shadow-inner hover:shadow-red-300"
        onClick={BacktoCart}>Cancel Order</button>          
        ):(
            <button className="border-2 p-2 bg-red-800 rounded-md text-white hover:shadow-inner hover:shadow-red-300"
        onClick={BacktoCart}>Go back to cart</button>
        )
    }
    
    </div>
    </>
  )
}

export default Ordersummary