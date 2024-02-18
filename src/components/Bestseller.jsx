import React from 'react'
import {Link} from 'react-router-dom'
import { bestSellers } from '../data/data'
import Carousel2 from './Carousel2'





function Giftset() {
  return (
    <div className=' max-h-6xl mx-auto bg-white mt-16' style={{color:'#786262'}}>
    <p className='pt-serif-bold text-4xl w-auto mx-auto lg:text-5xl mb-1 md:mb-4 lg:mb-6' >Best of the Best</p>

   
      <div className=" max-w-6xl mx-auto mb-6">
         
         <Carousel2>
         {
               bestSellers.map((slide,index) => (
                  <Link className='w-full mx-auto hover:opacity-[.7] hover:border-x-2 hover:border-red-200' key={index}>
                     <img className=' w-full mx-auto' src={slide} alt='Bestseller products'/>
                  </Link>
                  
               ))
            }
         </Carousel2>
            
         
         
     
   </div>
    
    
  </div>
  )
}

export default Giftset