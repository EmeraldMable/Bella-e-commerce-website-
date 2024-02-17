import React from 'react'
import { Link } from 'react-router-dom'

const category = () => {
  return (
    <div className=' w-auto mx-auto bg-white mt-16' style={{color:'#786262'}}>
      <p className='pt-serif-bold text-4xl w-auto mx-auto lg:text-5xl mb-10' >Shop by categories</p>

      <div className="w-auto mx-auto md:grid md:grid-cols-2 lg:flex">
        <div className=' w-auto lg:w-1/2 py-2 border-4 border-white rounded-lg' style={{background:'#3b0b0b'}}>
          <Link className='pt-serif-bold text-white text-2xl hover:underline'>Makeup</Link>
        </div>
        <div className=' w-auto lg:w-1/2 py-2 border-4 border-white rounded-lg' style={{background:'#3b0b0b'}}>
          <Link className='pt-serif-bold py-2 text-white text-2xl hover:underline'>Skin Care</Link>
        </div>
        <div className=' w-auto lg:w-1/2 py-2 border-4 border-white rounded-lg' style={{background:'#3b0b0b'}}>
          <Link className='pt-serif-bold py-2 text-white text-2xl hover:underline'>Perfume</Link>
        </div>
        <div className=' w-auto lg:w-1/2 py-2 border-4 border-white rounded-lg' style={{background:'#3b0b0b'}}>
          <Link className='pt-serif-bold py-2 text-white text-2xl hover:underline'>For Men</Link>
        </div>
      </div>
    </div>
  )
}

export default category