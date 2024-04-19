import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { IoIosCart } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { RxCross2 } from "react-icons/rx";
import { ImBin2 } from "react-icons/im";
import { UpdateCart } from "../redux/cartSlice";

function Cartfloat() {
    const [pop, setPop] = useState(false)
    const dispatch = useDispatch()
    const popup = () => {
        if(window.scrollY > 50) {
            setPop(true)
        }else{
            setPop(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll' , popup)
        return() => window.removeEventListener('scroll' , popup)
    },[])


    const {currentUser} = useSelector((state) => state.user);
   
    const[cart, setCart] = useState(null)

    const RemoveItems = async (id) => {
      try{
          const deleteitems = await fetch(`/products/delete` , {
            method:"POST",
            headers:{
              "Content-type" : "application/json"
            },
            body:JSON.stringify({
              id
            })
          })
          const deleted = await deleteitems.json()
          dispatch(UpdateCart(deleted))
      }catch(error){
        console.log(error)
      }
     }

    useEffect (() => {
        const carts = async () =>{
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
            const itemsIncart = await data.json()
            setCart(itemsIncart)
           
          }catch(error){
            console.log(error)
          }
        }
        carts();
    },[cart])


    

  return (
   <div className="cart">

        {
          currentUser  ? 
            <div className={pop ? `w-16 fixed top-5 right-0 block bg-white p-2 rounded-lg z-50 md:right-5 lg:right-5` : `md:mr-10 lg:mr-20` }>
            <NavLink className='relative w-8 sm:w-14 md:w-14 lg:w-14' to='/cart' ><IoIosCart className='icon' size={30} fill='brown'/>
             <span className='absolute -top-2 w-6 h-6 bg-red-700 rounded-full text-white'>{cart?.length}</span>
            </NavLink>
            </div>: ''
            
      }
         <div className="small-cart fixed right-10 top-16 w-56 h-64 overflow-y-scroll shadow-gray-600 shadow-inner p-3 bg-slate-100">
              {
                cart?.length >= 1 ? (
                  cart?.map((item,index) => (
                    <div key={index} className='w-fit flex gap-1 mx-auto border-2 mb-2'>
                       <img className=' w-16 h-16 mix-blend-multiply' src={item.img} alt={item.productName} />
                      <div className='pt-serif-regular w-full p-4 flex flex-col text-left '>
                        <p className="text-sm">{item.productName}</p>
                        <p className=' text-xs mt-2'>{item.price} <RxCross2 className='inline'/> {item.qty} = {item.price* item.qty} Kyats</p>
                      
                      <div className="flex items-center gap-5">
                      
                      
                      <button className=' absolute right-5'
                      onClick={() => RemoveItems(item._id)}> <ImBin2  /></button>
                      </div>
                      </div>
                    </div>
                  ))
                ): 
                  <p className="pt-serif-regular mx-auto">No items in the cart yet.</p>
                
              }

       <div className="w-full mt-2 p-2 bg-red-950 text-white rounded-md hover:bg-red-900">
       <NavLink to='/cart' >
             Go to cart
        </NavLink>
       </div>
            
         </div>
         
    </div>
  )
}

export default Cartfloat