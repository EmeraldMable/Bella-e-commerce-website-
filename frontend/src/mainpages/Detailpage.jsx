
import Linksbar from '../components/Linksbar'
import Footer from '../components/Footerbar'
import DetailUI from '../components/Detail'
import Breadcrumb from '../components/Breadcrumb'
import useProduct from "../customHook/useProduct"
import { useParams } from "react-router-dom"
import Cartfloat from '../components/Cartfloat'



function Detailpage() {
 
 
  const param = useParams()

   //fetch data using customHook 
    const {products:product} = useProduct(`/products/${param.id}`)

  return (
    <>
      <Linksbar/>
      <Breadcrumb/>
      <div className="w-auto mx-4 md:mx-10 lg:mx-40"  >
    
      <DetailUI product={product}/>
     
      </div>
    
      
    <Cartfloat/>
      <Footer/>
    </>
  )
}

export default Detailpage