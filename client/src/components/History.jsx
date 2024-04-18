import { useEffect, useState } from "react"
import { RxCross2 } from "react-icons/rx";
import { TiTick } from "react-icons/ti";

const History = ({userId}) => {
    const [data , setData] = useState(null)

    useEffect(() => {
       const order = async () => {
        try{
            const data = await fetch(`/products/getorder/${userId}`)
            const history = await data.json()
            setData(history)
            console.log(history)
        }catch(error){
            console.log(error)
        }

       }
       order()
    }, [])
  return (
    <>
   
    <h3 className="pt-serif-regular-italic text-xl mx-auto mt-6 underline">Order Histroy</h3>
       
    <div className='orderscroll mt-10 flex flex-col lg:flex-row gap-5'>
        {data?.length >= 1 ?
        data?.map((each , index) => (
            
            <div className="order pt-serif-regular rounded-md bg-slate-300 p-8 flex flex-col" key={index} >
                 <p className=" text-right">{each.createdAt?.slice(0,10)}</p>
                 <p className="text-left text-xl mb-3"> Items</p>
                 <div className="w-full">
                    {each.products?.map((item , index) => (
                   <div key={index} className="flex gap-5">
                     <p className="text-left flex-1 mb-4" >{item.productName}</p>
                     <p > {item.qty} * {item.price} Kyats</p>
                    
                  </div>
                    
                ))}
                 </div>
                
               <p className=" bg-slate-100 text-black mt-6 w-36 p-1 rounded-2xl backdrop-blur-3xl">
               {each.isDelivered == true ? <><TiTick style={{display:'inline' , marginRight:'8'}}/> <span>Received</span></>
               : <><RxCross2 style={{display:'inline' , marginRight:'8'}}/> <span>Not received</span></>
               }</p>
               
            </div>
            
        ))
    :
    <p className="pt-serif-regular mx-auto">No Purchase yet!</p>}
    </div>
    </>
  )
}

export default History