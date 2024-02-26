import React from 'react'
import Logo from '../assets/logo.png';
import {Link} from 'react-router-dom';
import { BiSolidHome } from "react-icons/bi";
import { PiUserCircleFill } from "react-icons/pi";
import { IoIosCart } from "react-icons/io";
import { useSelector } from 'react-redux';

function Navbar() {
  const currentUser = useSelector((state) => state.user)
  console.log(currentUser)
  return (
    <div className='fixed z-50 inset-0 w-auto mx-auto bg-white h-16 border-t-2 border-x-8 border-red-900 '>
      <div className=" w-full -mx-9 sm:mx-auto md:mx-auto lg:mx-auto pl-20 pr-14 h-auto flex items-center justify-between">
        <h2 className=' w-16'><img src={Logo} alt='Bella logo'/></h2>
        <div className=' flex justify-around -mx-12'>
           <Link className=' w-8 sm:w-14 md:w-14 lg:w-14' to='/'><BiSolidHome  size={27}  style={{color:'rgb(84,84,84)'}}/></Link>
           {currentUser 
           ? ( <Link className='w-8 sm:w-14 md:w-14 lg:w-14' to='/userprofile'><PiUserCircleFill size={29}  style={{color:'rgb(84,84,84)'}}/>
           </Link>) 
          : ( <Link className='pt-serif-bold w-8 sm:w-14 md:w-14 lg:w-14' to='/register'>Register/Login</Link>)}
           <Link className=' w-8 sm:w-14 md:w-14 lg:w-14' to='/product/makeup'><IoIosCart size={30} style={{color:'rgb(84,84,84)'}}/></Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar