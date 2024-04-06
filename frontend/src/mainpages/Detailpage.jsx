
import Linksbar from '../components/Linksbar'
import Footer from '../components/Footerbar'
import DetailUI from '../components/Detail'
import Breadcrumb from '../components/Breadcrumb'
import useProduct from "../customHook/useProduct"
import { useParams } from "react-router-dom"
import Cartfloat from '../components/Cartfloat'
import ScrollBtn from '../components/ScrollBtn'
import { useEffect } from 'react'
import { Toaster } from 'react-hot-toast'

function Detailpage() {
 
 
  const param = useParams()


   //fetch data using customHook 
    const {products:product} = useProduct(`/products/${param.id}`)
 
    useEffect(() => {
      window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth"
      })
    },[])
  return (
    <>
      <Linksbar/>
      <Breadcrumb/>
      <div className="w-auto mx-1 md:mx-2 lg:mx-20"  >
    <Toaster/>
    
      <DetailUI product={product}/>
     
      </div>
    
      
    <Cartfloat/>
    <ScrollBtn/>
      <Footer/>
    </>
  )
}

export default Detailpage