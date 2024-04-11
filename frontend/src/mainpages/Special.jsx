import React from 'react'
import useProduct from '../customHook/useProduct'
import Linksbar from '../components/Linksbar'
import Breadcrumb from '../components/Breadcrumb'
import Footer from '../components/Footerbar'
import DetailUI from '../components/Detail'
import { useParams } from 'react-router-dom'
import Cartfloat from '../components/Cartfloat'
import ScrollBtn from '../components/ScrollBtn'
import { useEffect } from 'react'

function Special() {
    const params = useParams()
    const {products:product , loading} = useProduct(`/products/${params.id}`)
    useEffect(() => {
      window.scrollTo(0,0)
     },[])
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

export default Special