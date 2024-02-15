import React from 'react'
import {Link} from 'react-router-dom';
import Home from './Home';

function Links() {
  return (

        <div className='mx-auto h-12 sticky flex items-center justify-around pl-20 pr-20 shadow-xl' style={{background:'rgb(184,84,84)'}}>
          <Link className=' text-white min-w-20 bg-red-400 p-3 rounded-sm ' to='/' element={<Home/>}>MakeUp</Link>
          <Link className=' text-white min-w-20 ' to='/' element={<Home/>}>Skin Care</Link>
          <Link className=' text-white min-w-20' to='/' element={<Home/>}>Star Sets</Link>
          <Link className=' text-white min-w-40' to='/' element={<Home/>}>MakeUp Tutorials</Link>
          <Link className=' text-white min-w-20' to='/' element={<Home/>}>About Us</Link>
        </div>
   
    
  )
}

export default Links