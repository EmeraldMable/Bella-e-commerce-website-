import React from 'react'
import {Link} from 'react-router-dom'
import { bestSellers } from '../data/data'






function Bestseller() {
  return (
    <div className='mx-auto bg-white mt-16' style={{color:'#786262'}}>
    <p className='pt-serif-bold text-4xl w-auto mx-auto lg:text-5xl mb-4 md:mb-4 lg:mb-6' >Best of the Best</p>

   
      <div className=" w-auto mx-10 mb-6 flex flex-col sm:grid sm:grid-cols-2 md:grid md:grid-cols-3 lg:flex-row">
         
         {
               bestSellers.map((slide,index) => (
                  <Link className='w-auto mx-auto hover:opacity-[.7] hover:border-x-2 hover:border-red-200' key={index}>
                     <img className=' w-[300px] mx-auto' src={slide} alt='Bestseller products'/>
                  </Link>
                  
               ))
            }
      
            
         
         
     
   </div>
    
    
  </div>
  )
}

export default Bestseller