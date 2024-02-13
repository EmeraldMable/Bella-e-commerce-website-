import React from 'react'
import StarWallpaper from '../assets/star-wallpaper.jpg';

function Home() {
  return (
   <div className='container mx-auto mt-5'>
      <div className='max-w-6xl bg-black'>
        <img src={StarWallpaper} alt="star wallpaper" />
      </div>
      <div className='max-w-6xl flex bg-white'>
        <div className=' w-1/2 bg-yellow-500'>
          <img src={StarWallpaper} alt='star wallpaper'/>
        </div>
        <div className=' w-1/2 bg-green-500'>
          <img src={StarWallpaper} alt='star wallpaper'/>
        </div>
      </div>
    
   </div>
  )
}

export default Home