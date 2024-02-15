import React from 'react'
import Logo from '../assets/logo.png';
import {Link} from 'react-router-dom';
import { BiSolidHome } from "react-icons/bi";
import { PiUserCircleFill } from "react-icons/pi";
import { IoIosCart } from "react-icons/io";

function Navbar() {
  return (
    <div className=' w-auto mx-auto bg-white max-h-15 border-t-2 border-x-8 border-red-900 '>
      <div className=" w-auto mx-auto pl-20 pr-14 h-auto flex items-center justify-between">
        <h2 className=' w-16'><img src={Logo} alt='Bella logo'/></h2>
        <div className=' flex justify-around '>
           <Link className=' w-14' to='/'><BiSolidHome  size={27}  style={{color:'rgb(84,84,84)'}}/></Link>
           <Link className='w-14' to='/product/makeup'><PiUserCircleFill size={29}  style={{color:'rgb(84,84,84)'}}/></Link>
           <Link className=' w-14' to='/product/makeup'><IoIosCart size={30} style={{color:'rgb(84,84,84)'}}/></Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar