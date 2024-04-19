import {   useRef  } from 'react'
import Logo from '../assets/logo.png';
import {NavLink} from 'react-router-dom';
import { BiSolidHome } from "react-icons/bi";
import { PiUserCircleFill } from "react-icons/pi";

import { useSelector } from 'react-redux';
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import Cartfloat from './Cartfloat';



function Navbar() {
  const {currentUser} = useSelector((state) => state.user);
 

const homeRef = useRef()
 const userRef = useRef()
 const cartRef = useRef()
 const logoRef = useRef()

  useGSAP(() => {
    gsap.from(homeRef.current,{
      y:-100,
      duration:.8
      
    })
    gsap.from(userRef.current,{
      y:-100,
      duration:1
    
    })
    gsap.from(cartRef.current,{
      y:-100,
      duration:1.2
      
    })
    gsap.from(logoRef.current,{
      opacity:0,
      duration:.8
      
    })
  })



  return (
    <header className='z-40 inset-0 w-full  bg-white h-16 border-t-2 border-x-8 border-red-900 '>
      <div className=" w-full -mx-9 sm:mx-auto md:mx-auto lg:mx-auto pl-20 pr-14 h-auto flex items-center justify-between">
        <h2 className=' w-16' ref={logoRef}><img src={Logo} alt='Bella logo'/></h2>
        <div className=' flex w-auto justify-around -mx-12 gap-3'>
           <NavLink className=' w-8 sm:w-14 md:w-14 lg:w-14' to='/' ref={homeRef}><BiSolidHome className='icon'
           size={27} fill='brown' /></NavLink>
           {currentUser 
           ? (<>
            <div className='pt-serif-bold w-8 sm:w-14 md:w-14 lg:w-14' ref={userRef} 
           >
            <NavLink to='/profile'>
            <PiUserCircleFill className='icon' size={29} fill='brown'/>
            </NavLink>
             
           
            </div>
            <Cartfloat/>
           
           </>) 
          : ( <NavLink className='pt-serif-bold mr-10 md:mr-32 ld:mr-34 w-8 sm:w-14 md:w-14 lg:w-14' to='/register'>Register/Login</NavLink>)}
           
        </div>
      </div>
    </header>
  )
}

export default Navbar