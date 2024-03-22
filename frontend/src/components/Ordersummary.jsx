import { useEffect, useState } from "react"



function Ordersummary() {
    const [order, setOrder] = useState(null)

   useEffect(() => {
        const random = Math.floor(Math.random()* 10000000)
        setOrder(random)
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
            <div className="grid grid-cols-2">
                <p  className="mr-10">Thanakha Pore Toner </p>
                <span> 3 * 9000</span>
            </div>

            <div className="grid grid-cols-2">
                <p  className="mr-10">Total</p>
                <span> 30000 Kyats </span>
            </div>
        </div>
    </div>
  )
}

export default Ordersummary