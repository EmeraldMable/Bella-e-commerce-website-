import { set } from "mongoose"
import useProduct from "../customHook/useProduct"
import { useState } from "react"
import { useParams } from "react-router-dom"


function DetailUI() {
    const [color,setColor] = useState('')
    const [slideImg, setSlideImg] = useState('')
  
  
    const params = useParams()
    const {products:product} = useProduct(`/products/${params.id}`)
   


  return (
    <div className="text-left" key={product._id} >
      <img className="rounded-md" src={slideImg} alt={product.name} />
      <div className=" flex gap-2">
      {
        product.subphoto?.map((photo,index) => 
        <img className=" w-44 rounded-sm "
         src={photo}  alt={product.name} key={index}
         onClick={(e) => setSlideImg(e.target.src) }/>)
      }
      </div>
    <p>{product.name} <span>({product.set})</span></p>
    <p>{product.status}</p>
    <p>{product.price} Kyats</p>
    <p>Netweight : {product.netweight}g</p>
    <p>Production Date : {product.productionDate}</p>
    <p>Expired Date: {product.expired}</p>
  
    {
      product.color?.map((col,index) =>
      <button 
      className=" w-5 h-5 border-2 border-black"
      style={{background:col}}
      key={index}
      value={color}
      onClick={() => setColor({col})}
      ></button>)
    }
      



    {product.brief?.map((each)=><p>{each}</p>)}
    <p>{product.desc_myan}</p>
    <p>{product.desc_eng}</p>
    <img className="w-[60%]" src={product.howtouse} alt="how to use" />
  </div>
  )
}

export default DetailUI