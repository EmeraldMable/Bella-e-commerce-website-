import React from 'react'
import useProduct from '../customHook/useProduct'
import Loading from '../components/Loading'
import { Link } from 'react-router-dom'
import Linksbar from '../components/Linksbar'
import Breadcrumb from '../components/Breadcrumb'
import Footer from '../components/Footerbar'
import ScrollBtn from '../components/ScrollBtn'

function SpecialSet() {
    const {products , loading} = useProduct('/products')
  return (
    <>
    <Linksbar/>
    <Breadcrumb/>
    <div className='px-6 w-full mx-auto'>
    <p className='pt-serif-bold w-full mb-1 mx-auto text-4xl' style={{color:'#786262'}}>Special Gift Sets</p>
      <p className='pt-serif-regular mb-1 w-sull mx-auto text-xl'> <span className='pt-serif-bold-italic' style={{color:'#786262'}}>The Best Bargain</span></p>
      <p className=' mb-10 w-sull mx-auto text-xl font-bold italic' style={{color:'#786262'}}>ဈေးအတန်ဆုံးနဲ့ အချိုဆုံး</p>

        {
          loading ? <Loading/> : (
           
           <div className='w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
              {products.map((each,index) => ( each.category == 'special' ? 
              (
              <div className='text-center mx-auto mt-2 mb-10 '
              key={index}>
                <Link to={`/specialsets/detail/${each._id}`} >
                  <img className=' w-[60%] mx-auto hover:opacity-[.7] hover:border-x-2 hover:border-red-200' key={index} src={each.photo} alt='product special sets'/> 
                  <div className='pt-serif-regular  bg-gray-100 w-auto mr-3 p-2 mx-auto rounded-md mt-3 h-36'>
                  <p className='font-bold text-lg mx-auto mb-3 mt-2 md:text-lg lg:text-xl'>{each.name}</p>
                  <span className='mx-auto'>Price : {each.price} Kyats</span>
                  </div>
                  
                </Link>
              </div>
              )
              :''
              )) }
              </div>)
         
          }
    </div>
    <ScrollBtn/>
    <Footer/>
    </>
  )
}

export default SpecialSet