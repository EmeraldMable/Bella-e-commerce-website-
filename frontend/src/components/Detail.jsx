import { RxCross2 } from "react-icons/rx";
import { TiTick } from "react-icons/ti";
import { useState } from "react";
import { IoIosCart } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa6";
import Recommendproducts from "./Recommendproducts";
import { FaBell } from "react-icons/fa";



function DetailUI({product}) {
    const [color,setColor] = useState('')
    const [slideImg, setSlideImg] = useState('')

  
   

    const {currentUser} = useSelector(state => state.user)
  
    const AddCart = async () => {
      try{
        const response = await fetch('/products/addtocart' ,{
          method:"POST",
          headers:{
            "Content-type":"application/json"
          },
          body:JSON.stringify({
            customerId:currentUser._id,
            productId:product._id,
            qty:1,
            productName:product.name,
            img:product.photo,
            price:product.price,
            instock:product.qty
          })
        })
        const data = await response.json()
        console.log(data)
    
      alert( data.message || 'Successfully added to the cart.')

      }catch(error){
        console.log(error)
      }
     
    }

    const handleNoti = () => {
      alert('Noted, our dear customer. We will notify you as soon as it is back in stock.')
    }
  
  return (
    <div className="w-auto text-left mx-auto my-10" key={product._id} style={{color:'#786262'}} >
        <div className="flex items-center gap-20">
          
            <img className="rounded-md w-96" src={slideImg ? slideImg : product.photo} alt={product.name} />
            
              <div className="pt-serif-regular mt-5 ">
                <p className="pt-serif-bold-italic text-3xl mb-4">Short to the points</p>

                <p className="flex gap-1 mb-4">
                  
                  {[...Array(5).keys()].map(( _,i) => (
                    product.rating <= i ? <FaRegStar /> : <FaStar fill="red"/>
                  ))}
                </p>

               

               {product.brief?.map((each,index)=><p className="mb-2 text-lg" key={index}><TiTick style={{display:'inline'}}/>{each}</p>)}
              
               <div className=" flex gap-2">
                  {
                    product.subphoto?.map((photo,index) => 
                    <img className=" w-20 rounded-sm md:w-28 lg:w-36"
                    src={photo}  alt={product.name} key={index}
                    onClick={(e) => setSlideImg(e.target.src) }/>)
                  }
                </div>
                   {
                       product.qty == 0 ?  ( 
                        <div className="flex items-center gap-5">
                       <button className=" bg-opacity-40 mt-5 rounded-2xl shadow-lg p-3 bg-red-900 text-white"
                      >
                       Out of stock<IoIosCart style={{display:"inline"}} 
                       /></button>
                       <button className="mt-5 rounded-2xl shadow-lg p-3 bg-red-900 text-white hover:bg-red-500"
                       onClick={handleNoti}
                       >
                        Notify me later! <FaBell style={{display:"inline"}} 
                        /></button>
                        </div>) 
                       : (
                       <button className=" mt-5 rounded-2xl shadow-lg p-3 bg-red-400 text-white"
                       onClick={AddCart}>
                       Add to cart<IoIosCart style={{display:"inline"}} 
                       /></button>)
                   }
                   
                 
                 
                  
               

              </div>
          </div>

      <div  className="pt-serif-regular mt-5">
        <p className=" text-lg mt-3 lg:text-xl">{product.name} <span>({product.set})</span></p>

          <div className=" relative mt-2 mb-3">


            <p>{product.qty > 0 ? (
               <>
               <span className="text-sm ">({product.qty}) items in stock</span>
               <span className=" absolute
               top-0 left-32"><TiTick style={{color:'green'}}/></span>
               </>
               ): (
              <>
              <span className="text-sm ">Out of Stock</span>
              <span className=" absolute
              top-0 left-20"><RxCross2 style={{color:'red'}}/></span>
              </>
               )}</p>
                
                

          </div>
              <p className="mb-3"> Price : {product.price} Kyats</p>
              <p  className="mb-3">Netweight : {product.netweight}g</p>
              <p  className="mb-3">Production Date : {product.productionDate}</p>
              <p  className="mb-3">Expired Date: {product.expired}</p>
              <p className="mb-3">Available Colors
              {
                product.color?.map((col,index) =>
                <button 
                className= " w-5 h-5 ml-5 border-2 border-black" 
                style={{background:col}}
                key={index}
                value={color}
                onClick={() => setColor({col})}
                ></button>)
              }
              </p>

              
             
              <div className=" text-justify mt-5">
                <p className="text-lg leading-loose">အားသာချက်များ</p>
                <p className="mt-2">{product.desc_myan}</p>
                <p className="text-lg mt-2 leading-normal">{product.desc_eng}</p>
              </div>

    </div>
    
    
    <img className="w-full" src={product.howtouse} alt="how to use" />

    <Recommendproducts category={product.category} />
  </div>
  )
}

export default DetailUI


