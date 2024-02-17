import React from 'react'
import {Link} from 'react-router-dom'
import makeupset from '../assets/makeupset.jpg'
import specialgift2 from '../assets/specialgift2.jpg'
import specialgift1 from '../assets/specialgift1.jpg'
import watermelon from '../assets/watermelonset.jpg'

function Giftset() {
  return (
    <div className=' w-auto mx-auto bg-white mt-16' style={{color:'#786262'}}>
    <p className='pt-serif-bold text-4xl w-auto mx-auto lg:text-5xl mb-1 md:mb-4 lg:mb-6' >Best of the Best</p>

    <div className="w-auto mx-10 sm:grid sm:grid-cols-2 md:grid md:grid-cols-3 lg:grid lg:grid-cols-4 ">
        <div className='bg-white w-full hover:opacity-[.7] hover:border-x-2 hover:border-red-200'>
           <Link to='/'> <img src={makeupset} alt='makeup set'/></Link>
        </div>
        <div className='bg-white w-full hover:opacity-[.7] hover:border-x-2 hover:border-red-200'>
           <Link to='/'> <img src={specialgift2} alt='makeup set'/></Link>
        </div>
        <div className='bg-white w-full hover:opacity-[.7] hover:border-x-2 hover:border-red-200'>
           <Link to='/'> <img src={specialgift1} alt='makeup set'/></Link>
        </div>
        <div className='bg-white w-full hover:opacity-[.7] hover:border-x-2 hover:border-red-200'>
           <Link to='/'> <img src={watermelon} alt='makeup set'/></Link>
        </div>
    </div>
    
  </div>
  )
}

export default Giftset