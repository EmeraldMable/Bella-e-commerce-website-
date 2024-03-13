
import { useState } from 'react';
import {NavLink} from 'react-router-dom';
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";

function Links() {
    const [menuclick, setMenuclick] = useState(false);

  

  return (

        <div className='fixed z-40 w-full top-16 mx-auto h-12 md:h-auto lg:h-auto shadow-xl' style={{background:'rgb(184,84,84)'}}>
           <button className=' text-white min-w-20 p-3 rounded-sm text-left pl-8 block md:hidden lg:hidden'
           onClick={()=>setMenuclick(!menuclick)}> 
           <RxHamburgerMenu size={30} />
           </button>
           <div className={menuclick ? 'pt-serif-regular text-lg  w-52 h-screen fixed inset-y-20 flex flex-col transition-transform rounded-r-sm md:opacity-0' : 'hidden -translate-x-full'} style={{translateX:50 ,background:'rgb(184,84,84)'}}>
              <button className=' text-white min-w-20 pt-0.5 rounded-sm text-left pl-8 block md:hidden lg:hidden mb-8'
              onClick={()=>setMenuclick(!menuclick)}> 
              <RxCross2 size={30} />
              </button> 
             
              <NavLink className=  {({ isActive}) => isActive ? 'text-white min-w-20 p-3 bg-red-400' 
               : ' text-white min-w-20  p-3 hover:opacity-50  ' } 
               to='/makeup'
               onClick={()=>setMenuclick(!menuclick)} >MakeUp
               </NavLink>


              <NavLink className=  {({ isActive}) => isActive ? 'text-white min-w-20 p-3 bg-red-400' 
               : ' text-white min-w-20  p-3 hover:opacity-50  ' }  to='/skincare'
              onClick={()=>setMenuclick(!menuclick)} >Skin Care
              </NavLink>

              <NavLink className=  {({ isActive}) => isActive ? 'text-white min-w-20 p-3 bg-red-400' 
               : ' text-white min-w-20  p-3 hover:opacity-50  ' }  to='/collection'
              onClick={()=>setMenuclick(!menuclick)} >Collections
              </NavLink>

   

              <NavLink className=  {({ isActive}) => isActive ? 'text-white min-w-20 p-3 bg-red-400' 
               : ' text-white min-w-20  p-3 hover:opacity-50 ' }  to='/'
              onClick={()=>setMenuclick(!menuclick)} >For Men
              </NavLink>

              <NavLink className=  {({ isActive}) => isActive ? 'text-white min-w-20 p-3 bg-red-400' 
               : ' text-white min-w-20  p-3 hover:opacity-50 ' }  to='/makeup'
              onClick={()=>setMenuclick(!menuclick)} >SpecialSets
              </NavLink>

              <NavLink className=  {({ isActive}) => isActive ? 'text-white min-w-20 p-3 bg-red-400' 
               : ' text-white min-w-20  p-3 hover:opacity-50  ' }  to='/'
              onClick={()=>setMenuclick(!menuclick)} >Tutorials
              </NavLink>

              <NavLink className=  {({ isActive}) => isActive ? 'text-white min-w-20 p-3 bg-red-400' 
               : ' text-white min-w-20  p-3 hover:opacity-50  ' }  to='/'
              onClick={()=>setMenuclick(!menuclick)} >About Us
              </NavLink>
          </div>


          <div className='  hidden md:flex md:items-center md:justify-around lg:flex lg:items-center lg:justify-around'>
              <NavLink className= {({ isActive }) => isActive ?
             '  text-white min-w-28 bg-red-400 p-5 rounded-sm ' : 'text-white min-w-28 p-2 rounded-sm hover:opacity-50'} to='/makeup' >MakeUp
             </NavLink>

              <NavLink className= {({ isActive }) => isActive ?
             ' text-white min-w-28 bg-red-400 p-5 rounded-sm' : 'text-white min-w-28 p-2 rounded-sm hover:opacity-50'} to='/skincare' >Skin Care
             </NavLink>

              <NavLink className= {({ isActive }) => isActive ?
             ' text-white min-w-28 bg-red-400 p-5 rounded-sm' : 'text-white min-w-28 p-2 rounded-sm hover:opacity-50'}  to='/collection' >Collections
             </NavLink>
             
              <NavLink className= {({ isActive }) => isActive ?
             ' text-white min-w-28 bg-red-400 p-5 rounded-sm' : 'text-white min-w-28 p-2 rounded-sm hover:opacity-50'} to='/' >For Men
             </NavLink>
              <NavLink className= {({ isActive }) => isActive ?
             ' text-white min-w-28 bg-red-400 p-5 rounded-sm' : 'text-white min-w-28 p-2 rounded-sm hover:opacity-50'}
             to='/'>
              SpecialSet
             </NavLink>
              <NavLink className= {({ isActive }) => isActive ?
             ' text-white min-w-28 bg-red-400 p-5 rounded-sm' : 'text-white min-w-28 p-2 rounded-sm hover:opacity-50'}to='/' >Tutorials
             </NavLink>
              <NavLink className= {({ isActive }) => isActive ?
             ' text-white min-w-28 bg-red-400 p-5 rounded-sm' : 'text-white min-w-28 p-2 rounded-sm hover:opacity-50'}to='/' >About Us
             </NavLink>
            </div>
         
         
        </div>
   
    
  )
}

export default Links