import React from 'react'
import {Link} from 'react-router-dom'
import { BsFacebook } from "react-icons/bs";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaTiktok } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";

function Footer() {
  return (
    <div className=' w-auto mx-0 min-h-96 text-white pb-10 mt-16' 
     style={{background:'#786252'}}>
        <p className=' w-auto text-xl md:text-2xl font-bold mb-2 pt-10 pb-4  '>Always Building Confidence Through Beauty</p>
         <div className=' w-auto mx-12 h-auto lg:gap-5 lg:flex lg:items-center lg:justify-center'>
            <div className=' w-auto h-auto mb-5 mx-10 lg:w-1/4 lg:h-32'>
                <p className=' text-base md:text-lg font-bold mb-2'>CONTACT US</p>
                <p className='text-base w-auto'>No.11, 6th street, Ward No.8, South Okkalapa 
                    Industrial Zone, South Okkalapa Township, Yangon.
                </p>
                <p className='text-base w-auto'>Telephone:(+95)01 9345533</p>
                <p className='text-base w-auto'>Email:
                <Link to='mailto:customer
                service@abcbeauty.com' className='hover:underline'> customer
                service@abcbeauty.com
                </Link>
                </p>
            
            </div>
           

            <div className='w-auto h-auto mb-8 lg:w-1/4 lg:h-32 '>
                <p className=' text-base md:text-lg font-bold mb-2'>ABOUT US</p>
                <Link className='text-base block hover:underline' to='/our_story'>Our Story</Link>
                <Link className='text-base block hover:underline' to='/contactus'>Contact Us</Link>
                <Link className='text-base block hover:underline' to='/Location'>Shops Location</Link>
               
            
            </div> 
            <div className=' w-auto h-auto mb-8 lg:w-1/4 lg:h-32 '>
                <p className=' text-base md:text-lg font-bold mb-2'>FOLLOW US ON SOCIAL MEDIA</p>
                <div className=' w-auto flex items-center justify-center'>
                <Link className=' w-10 hover:scale-110' to='https://www.facebook.com/BellaBeAStar/' target='_blank'><BsFacebook size={30} /></Link>
                <Link className=' w-10 hover:scale-110' to='https://www.tiktok.com/@bella_superstars' target='_blank'><BiLogoInstagramAlt size={38}/></Link>
                <Link className=' w-10 hover:scale-110' to='https://www.instagram.com/bella_beastar' target='_blank'><FaTiktok size={30} /></Link>
                <Link className=' w-10 hover:scale-110' to='https://t.me/bellacosmeticsmyanmar' target='_blank'><FaTelegram size={34}/></Link>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Footer