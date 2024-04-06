
import { useState , useRef } from 'react';
import {NavLink} from 'react-router-dom';
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";


function Links() {
    const [menuclick, setMenuclick] = useState(false);
    const [isfocused, setIsfocused] = useState(false)
    
    const handleonFocus = () => {
      setIsfocused(!isfocused)
    }
    const handleMenuClick = () => {
      setMenuclick(!menuclick)
      if(!menuclick){
        document.body.style.overflowY = "hidden"
      }else{
        document.body.style.overflowY = "scroll"
      
      }
    }

  return (

        <div className='w-full h-12 md:h-auto lg:h-auto shadow-xl' id='back' style={{background:'rgb(184,84,84)' }}
  
        >
           <button className=' text-white min-w-20 p-3 rounded-sm text-left pl-8 block md:hidden lg:hidden' onFocus={handleonFocus}
           onClick={handleMenuClick}> 
           <RxHamburgerMenu size={30} />
           </button>
           <div className={menuclick ? 'bar text-lg  w-52 h-screen  fixed inset-y-16 flex flex-col transition-transform rounded-r-sm md:opacity-0' 
           : 'bar hidden -translate-x-full'} 
           style={{translateX:50 ,background:'rgb(184,84,84)'}}>
              <button className=' text-white min-w-20 pt-2 rounded-sm text-left pl-8 block md:hidden lg:hidden mb-5' onFocus={handleonFocus}
              onClick={handleMenuClick}> 
              <RxCross2 size={30} />
              </button> 
             
              <NavLink className=  {({ isActive}) => isActive ? 'text-white min-w-20 p-3 bg-red-800 mb-2' 
               : 'hamburger text-white' } 
               to='/makeup' tabIndex={1}
               onClick={handleMenuClick} >MakeUp
               </NavLink>


              <NavLink className=  {({ isActive}) => isActive ? 'text-white min-w-20 p-3 bg-red-800 mb-2' 
               : 'hamburger text-white' }  to='/skincare' tabIndex={2}
              onClick={handleMenuClick} >Skin Care
              </NavLink>

              <NavLink className=  {({ isActive}) => isActive ? 'text-white min-w-20 p-3 bg-red-800 mb-2' 
               : 'hamburger text-white' }  to='/collection' tabIndex={3}
              onClick={handleMenuClick} >Collections
              </NavLink>

   

              <NavLink className=  {({ isActive}) => isActive ? 'text-white min-w-20 p-3 bg-red-800 mb-2' 
               : 'hamburger text-white' }  to='/men-session'
              onClick={handleMenuClick} >For Men
              </NavLink>

              <NavLink className=  {({ isActive}) => isActive ? 'text-white min-w-20 p-3 bg-red-800 mb-2' 
               : 'hamburger text-white' }  to='/specialsets'
              onClick={handleMenuClick} >SpecialSets
              </NavLink>

              <NavLink className=  {({ isActive}) => isActive ? 'text-white min-w-20 p-3 bg-red-800 mb-2' 
               : 'hamburger  text-white ' }  to='/'
              onClick={handleMenuClick} >Tutorials
              </NavLink>

              <NavLink className=  {({ isActive}) => isActive ? 'text-white min-w-20 p-3 bg-red-800 mb-2' 
               : 'hamburger text-white ' }  to='/'
              onClick={handleMenuClick} >About Us
              </NavLink>
          </div>


          <div className=' h-8 hidden md:flex md:items-center md:justify-around lg:flex lg:items-center lg:justify-around'>
              <NavLink className= {({ isActive }) => isActive ?
             'text-white  ' : 'linkbar text-white'} to='/makeup' tabIndex={0} >MakeUp
             </NavLink>

              <NavLink className= {({ isActive }) => isActive ?
              'text-white' : 'linkbar text-white'} to='/skincare' tabIndex={0} >Skin Care
             </NavLink>

              <NavLink className= {({ isActive }) => isActive ?
              'text-white ' : 'linkbar text-white'}  to='/collection' tabIndex={0} >Collections
             </NavLink>
             
              <NavLink className= {({ isActive }) => isActive ?
              'text-white ' : 'linkbar text-white'} to='/men-session' tabIndex={0}  >For Men
             </NavLink>
              <NavLink className= {({ isActive }) => isActive ?
              ' text-white' : 'linkbar text-white'}
             to='/specialsets'>
              SpecialSet
             </NavLink>
              <NavLink className= {({ isActive }) => isActive ?
              ' text-white ' : 'linkbar text-white'}to='/' tabIndex={0}  >Tutorials
             </NavLink>
              <NavLink className= {({ isActive }) => isActive ?
              'text-white' : 'linkbar text-white'}to='/'tabIndex={0}  >About Us
             </NavLink>
            </div>
         
         
        </div>
   
    
  )
}

export default Links