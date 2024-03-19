import React from 'react'
import useProduct from '../customHook/useProduct'
import Linksbar from '../components/Linksbar'
import Breadcrumb from '../components/Breadcrumb'
import Footer from '../components/Footerbar'
import DetailUI from '../components/Detail'
import { useParams } from 'react-router-dom'

function Special() {
    const params = useParams()
    const {products:product , loading} = useProduct(`/products/${params.id}`)
  return (
    <>
    <Linksbar/>
    <Breadcrumb/>
    <div className="w-auto mx-4 md:mx-10 lg:mx-40"  >
  
    <DetailUI product={product}/>
   
    </div>
    

    <Footer/>
  </>
  )
}

export default Special