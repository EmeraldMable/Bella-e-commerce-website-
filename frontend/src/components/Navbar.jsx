import React, { useState } from 'react'
import Logo from '../assets/logo.png';
import {Link} from 'react-router-dom';
import { BiSolidHome } from "react-icons/bi";
import { PiUserCircleFill } from "react-icons/pi";
import { IoIosCart } from "react-icons/io";
import { useSelector } from 'react-redux';
import Profile from '../components/Profile'
import { RxCross2 } from "react-icons/rx";

function Navbar() {
  const {currentUser} = useSelector((state) => state.user)
  const [profile,setProfile] = useState(false)
  return (
    <header className='fixed z-50 inset-0 w-auto mx-auto bg-white h-16 border-t-2 border-x-8 border-red-900 '>
      <div className=" w-full -mx-9 sm:mx-auto md:mx-auto lg:mx-auto pl-20 pr-14 h-auto flex items-center justify-between">
        <h2 className=' w-16'><img src={Logo} alt='Bella logo'/></h2>
        <div className=' flex w-auto mr-5 justify-around -mx-12'>
           <Link className=' w-8 sm:w-14 md:w-14 lg:w-14' to='/'><BiSolidHome  size={27}  style={{color:'rgb(84,84,84)'}}/></Link>
           {currentUser 
           ? (<>
            <div className='pt-serif-bold w-8 sm:w-14 md:w-14 lg:w-14' 
           >
              <PiUserCircleFill size={29}  style={{color:'rgb(84,84,84)'}}
               onClick={() => setProfile(!profile)}/>
                {profile ? 
                <>
                 <RxCross2 size={30} className='absolute bg-white -bottom-20 z-50 rounded-md' onClick={() => setProfile(!profile)}/>
                 <Profile {...currentUser} />
                </>
                 : ''}
            </div>
            <Link className=' w-8 sm:w-14 md:w-14 lg:w-14' to='/product/makeup'><IoIosCart size={30} style={{color:'rgb(84,84,84)'}}/></Link>
           </>) 
          : ( <Link className='pt-serif-bold w-8 sm:w-14 md:w-14 lg:w-14' to='/register'>Register/Login</Link>)}
           
        </div>
      </div>
    </header>
  )
}

export default Navbar