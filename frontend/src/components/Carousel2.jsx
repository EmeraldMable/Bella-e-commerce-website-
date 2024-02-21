import React from 'react'

function Carousel2({children:slides}) {
  return (
    <div className=' overflow-hidden'>
        <div className='flex'>
            {slides}
        </div>
    </div>
  )
}

export default Carousel2