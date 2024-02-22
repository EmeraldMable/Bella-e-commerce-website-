import React from 'react'
import { useState } from 'react';
import {Link} from 'react-router-dom';
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";

function Links() {
    const [menuclick, setMenuclick] = useState(false);

  return (

        <div className='fixed z-40 w-full top-16 mx-auto h-12 shadow-xl' style={{background:'rgb(184,84,84)'}}>
           <button className=' text-white min-w-20 p-3 rounded-sm text-left pl-8 block md:hidden lg:hidden'
           onClick={()=>setMenuclick(!menuclick)}> 
           <RxHamburgerMenu size={30} />
           </button>
           <div className={menuclick ? 'pt-serif-regular text-lg  w-52 h-screen fixed inset-y-20 flex flex-col transition-transform rounded-r-sm md:opacity-0' : 'hidden -translate-x-full'} style={{translateX:50 ,background:'rgb(184,84,84)'}}>
              <button className=' text-white min-w-20 pt-0.5 rounded-sm text-left pl-8 block md:hidden lg:hidden mb-8'
              onClick={()=>setMenuclick(!menuclick)}> 
              <RxCross2 size={30} />
              </button> 
             
              <Link className=' text-white min-w-20  p-3 hover:opacity-50  '
               to='/product/makeup' onClick={()=>setMenuclick(!menuclick)} >MakeUp</Link>
              <Link className=' text-white min-w-20  p-3 hover:opacity-50 ' to='/product/makeup' >Skin Care</Link>
              <Link className=' text-white min-w-20   p-3 hover:opacity-50 ' to='/' >Perfume</Link>
              <Link className=' text-white min-w-20  p-3 hover:opacity-50  ' to='/' >For Men</Link>
              <Link className=' text-white min-w-20  p-3 hover:opacity-50 ' to='/product/makeup' >Star Sets</Link>
              <Link className=' text-white min-w-40  p-3 hover:opacity-50 ' to='/' >Makeup Tutorials</Link>
              <Link className=' text-white min-w-20  p-3 hover:opacity-50  ' to='/' >About Us</Link>
          </div>

           <div className=' flex items-center justify-around pl-20 pr-20 opacity-0 md:opacity-100'>
              <Link className=' text-white min-w-20 bg-red-400 p-3 rounded-sm' to='/product/makeup' >MakeUp</Link>
              <Link className=' text-white min-w-20 ' to='/' >Skin Care</Link>
              <Link className=' text-white min-w-20 ' to='/' >Perfume</Link>
              <Link className=' text-white min-w-20 ' to='/' >For Men</Link>
              <Link className=' text-white min-w-20' to='/' >Star Sets</Link>
              <Link className=' text-white min-w-40' to='/' >Makeup Tutorials</Link>
              <Link className=' text-white min-w-20' to='/' >About Us</Link>
            </div>
         
        </div>
   
    
  )
}

export default Links