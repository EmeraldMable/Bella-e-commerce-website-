import { useEffect, useState } from "react"
import { useSelector } from "react-redux"



function Ordersummary() {
    const [order, setOrder] = useState(null)
    const {list} = useSelector(state => state.cart)
    const [checked , setChecked] = useState({})
    const [total , setTotal] = useState(null)

   useEffect(() => {
        const random = Math.floor(Math.random()* 10000000)
        setOrder(random)
        const checking = list.filter((item) => item.isChecked !== false)
        console.log(checking)
        setChecked(checking)
        setTotal(checking.reduce((acc, currentValue) => (acc + (currentValue.price * currentValue.qty)), 0))
   },[])
  return (
    <div className=" w-auto border-2 p-2 mx-3">
        <p className="pt-serif-bold mb-5">Invoice</p>
        <div className="pt-serif-regular text-left mx-2 ">
            <div className="grid grid-cols-2 gri">
                <p className="mr-10">Invoice No.</p>
                <span>{order}</span>
            </div>
            <div className="grid grid-cols-2">
                <p  className="mr-10">Items</p>
                <span> 3 </span>
            </div>
            {
               checked.length >= 1  ? checked?.map((item) =>(
                <div className="grid grid-cols-2">
                <p  className="mr-10">{item.productName} </p>
                <span> {item.qty } * {item.price} Kyats</span>
            </div>
               ) ) : (
                <p className=" underline">No items is selected to check out.</p>
               )
            }
          

            <div className="grid grid-cols-2 mt-10">
                <p  className="mr-10">Total</p>
                <span> {total} Kyats </span>
            </div>
        </div>
    </div>
  )
}

export default Ordersummary