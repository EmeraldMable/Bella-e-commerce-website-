import React from 'react'
import DetailUI from '../components/Detail'
import { useParams } from 'react-router-dom'
import useProduct from '../customHook/useProduct'
import Linksbar from '../components/Linksbar'
import Breadcrumb from '../components/Breadcrumb'
import Footer from '../components/Footerbar'
import Cartfloat from '../components/Cartfloat'
import ScrollBtn from '../components/ScrollBtn'


function BestDetail() {
    const param = useParams()
    const {products:product,loading} = useProduct(`/products/${param.id}`)

  return (
    <>
    <Linksbar/>
    <Breadcrumb/>
    <div className="w-auto mx-4 md:mx-10 lg:mx-40"  >
  
    <DetailUI product={product}/>
   
    </div>
    <Cartfloat/>
  <ScrollBtn/>
    <Footer/>
  </>
    
  )
}

export default BestDetail