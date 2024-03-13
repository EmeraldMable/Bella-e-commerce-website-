import { RxCross2 } from "react-icons/rx";
import { TiTick } from "react-icons/ti";
import { useState } from "react";
import { IoIosCart } from "react-icons/io";

import { useSelector } from "react-redux";



function DetailUI({product}) {
    const [color,setColor] = useState('')
    const [slideImg, setSlideImg] = useState('')
    const [qty,setQty] = useState(1)

    const user = useSelector((state) => state.user)
    
   
    const addtocart = async () => {
      console.log('loading')
      try{
        const response = await fetch('/products/cart' , {
          method:"POST",
          headers:{
            "Content-type":"application/json"
          },
          body:JSON.stringify({
              customerId:user?.currentUser._id,
              productId:product._id,
              qty:qty,
              productName:product.name,
              price:product.price
              
          })
        })
        const data = await response.json()
        console.log(data)
      }catch(error){
        console.log(error)
      }
    }
   


  return (
    <div className="w-auto text-left mx-auto my-10" key={product._id} style={{color:'#786262'}} >
        <div className="flex items-center gap-20">
          
            <img className="rounded-md w-96" src={slideImg ? slideImg : product.photo} alt={product.name} />
            
          

              <div className="pt-serif-regular mt-5 ">
                <p className="pt-serif-bold-italic text-3xl mb-4">Short to the points</p>
               {product.brief?.map((each,index)=><p className="mb-2 text-lg" key={index}><TiTick style={{display:'inline'}}/>{each}</p>)}
              
               <div className=" flex gap-2">
                  {
                    product.subphoto?.map((photo,index) => 
                    <img className=" w-20 rounded-sm md:w-28 lg:w-36"
                    src={photo}  alt={product.name} key={index}
                    onClick={(e) => setSlideImg(e.target.src) }/>)
                  }
                </div>
                
                <select value={qty} onChange={(e) => setQty(e.target.value)}>
                  {
                   [...Array(product.qty).keys()].map((each)=> (
                    <option value={each+1}>{each+1}</option>
                   ))
                  }
                  </select>
                
                  <button className=" mt-5 rounded-2xl shadow-lg p-3 bg-red-400 text-white">
                  Add to cart<IoIosCart style={{display:"inline"}}
                  onClick={addtocart}/></button>
                  
               

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
  </div>
  )
}

export default DetailUI


