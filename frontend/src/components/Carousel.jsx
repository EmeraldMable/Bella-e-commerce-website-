import React from 'react'
import { useState , useEffect } from 'react'

function Carousel({children:carouselSlides , autoSlide = false , autoSlideInterval = 5000}) {
 
  const [current, setCurrent] = useState(0);
  const pre = () => setCurrent((current) => (current == 0 ? carouselSlides.length-1 : current - 1));
  const next = () => setCurrent((current) => (current == carouselSlides.length -1 ? 0 : current + 1))
  const handleCurrent = (i) => {
    setCurrent(i)
  }

  useEffect(()=>{
    
   
    if(!autoSlide) return
    const slideInterval = setInterval(next, autoSlideInterval)
    
    return () => clearInterval(slideInterval)
  },[])

  return (
    <div className=' overflow-hidden relative'>
      <div className='flex transition-transform ease-out duration-500 ' style={{transform:`translateX(-${current * 100}%)`}}>{carouselSlides}</div>
      <div className=' z-10 absolute bottom-4 left-0 right-0'>
        <div className='flex items-center justify-center gap-2'>
        {carouselSlides.map((_,i) => (
          <div className={` w-3 h-3 rounded-full bg-white ${current == i  ? 'p-2' : 'bg-opacity-50'}`} onClick={(e) => handleCurrent(i)} key={i}></div>
        ))}
        </div>
        
      </div>
    </div>
  )
}

export default Carousel