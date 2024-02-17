import React from 'react'
import { useState } from 'react';
import {Link} from 'react-router-dom';
import Home from './Home';
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";

function Links() {
    const [menuclick, setMenuclick] = useState(false);

  return (

        <div className='click1 mx-auto h-12 shadow-xl' style={{background:'rgb(184,84,84)'}}>
           <button className=' text-white min-w-20 p-3 rounded-sm text-left pl-8 block md:hidden lg:hidden'
           onClick={()=>setMenuclick(!menuclick)}> 
           <RxHamburgerMenu size={30} />
           </button>
           <div className={menuclick ? ' w-52 h-screen fixed inset-y-20 bg-black flex flex-col transition-transform rounded-r-sm md:opacity-0' : 'hidden -translate-x-full'} style={{translateX:50 ,background:'rgb(184,84,84)'}}>
              <button className=' text-white min-w-20 p-0.5 rounded-sm text-left pl-8 block md:hidden lg:hidden'
              onClick={()=>setMenuclick(!menuclick)}> 
              <RxCross2 size={30} />
              </button> 
              <Link className=' text-white min-w-20 bg-red-400 p-3 ' to='/' element={<Home/>}
              onClick={()=> setMenuclick(!menuclick)}>MakeUp</Link>
              <Link className=' text-white min-w-20  p-3  ' to='/' element={<Home/>}>Skin Care</Link>
              <Link className=' text-white min-w-20   p-3 ' to='/' element={<Home/>}>Perfume</Link>
              <Link className=' text-white min-w-20  p-3 ' to='/' element={<Home/>}>For Men</Link>
              <Link className=' text-white min-w-20  p-3 ' to='/' element={<Home/>}>Star Sets</Link>
              <Link className=' text-white min-w-40  p-3 ' to='/' element={<Home/>}>Makeup Tutorials</Link>
              <Link className=' text-white min-w-20  p-3 ' to='/' element={<Home/>}>About Us</Link>
            </div>

           <div className=' flex items-center justify-around pl-20 pr-20 opacity-0 md:opacity-100'>
              <Link className=' text-white min-w-20 bg-red-400 p-3 rounded-sm' to='/' element={<Home/>}>MakeUp</Link>
              <Link className=' text-white min-w-20 ' to='/' element={<Home/>}>Skin Care</Link>
              <Link className=' text-white min-w-20 ' to='/' element={<Home/>}>Perfume</Link>
              <Link className=' text-white min-w-20 ' to='/' element={<Home/>}>For Men</Link>
              <Link className=' text-white min-w-20' to='/' element={<Home/>}>Star Sets</Link>
              <Link className=' text-white min-w-40' to='/' element={<Home/>}>Makeup Tutorials</Link>
              <Link className=' text-white min-w-20' to='/' element={<Home/>}>About Us</Link>
            </div>
         
        </div>
   
    
  )
}

export default Links