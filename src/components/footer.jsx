import React from 'react'
import {Link} from 'react-router-dom'
import { BsFacebook } from "react-icons/bs";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaTiktok } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";

function footer() {
  return (
    <div className=' w-auto mx-0 min-h-96 text-white mt-10'  style={{background:'#786262'}}>
        <div className=' w-auto min-h-24 pt-8 mx-10'>
            
            <p className=' text-xl font-bold mb-5  '>Always Building Confidence Through Beauty</p>
            <p className=' text-lg font-semibold mb-2'>CONTACT US</p>
            <p className='text-base w-auto'>No.11, 6th street, Ward No.8, South Okkalapa 
                Industrial Zone, South Okkalapa Township, Yangon.
            </p>
            <p className='text-base'>Telephone:(+95)01 9345533</p>
            <p className='text-base'>Email:customerservice@abcbeauty.com</p>
           
        </div>
        <div className=' w-auto min-h-20 mt-10 '>
            <p className=' text-lg font-semibold mb-2'>FOLLOW US ON SOCIAL MEDIA</p>
            <div className=' w-auto flex items-center justify-center'>
               <Link className=' w-10 hover:scale-110' to='https://www.facebook.com/BellaBeAStar/' target='_blank'><BsFacebook size={30} /></Link>
               <Link className=' w-10 hover:scale-110' to='https://www.tiktok.com/@bella_superstars' target='_blank'><BiLogoInstagramAlt size={38}/></Link>
               <Link className=' w-10 hover:scale-110' to='https://www.instagram.com/bella_beastar' target='_blank'><FaTiktok size={30} /></Link>
               <Link className=' w-10 hover:scale-110' to='https://t.me/bellacosmeticsmyanmar' target='_blank'><FaTelegram size={34}/></Link>
            </div>
            
        </div>

        <div className='w-auto min-h-24 mt-8'>
            <p className=' text-lg font-semibold mb-2'>QUICK LINKS</p>
            <Link className='text-base block hover:underline' to='/'>Lip</Link>
            <Link  className='text-base block hover:underline' to='/'>Eyes</Link>
            <Link  className='text-base block hover:underline' to='/'>Face</Link>
            <Link  className='text-base block hover:underline' to='/'>Beauty Tools</Link>
            <Link  className='text-base block hover:underline' to='/'>Privacy Policy</Link>
            <Link  className='text-base block hover:underline' to='/'>Terms and Conditions</Link>
        </div>
        <div className='w-auto min-h-24 mt-10'>
            <p className=' text-lg font-semibold mb-2'>ABOUT US</p>
            <Link className='text-base block hover:underline' to='/'>Explore Bella</Link>
            <Link className='text-base block hover:underline' to='/'>Our Activities</Link>
            <Link className='text-base block hover:underline' to='/'>Buying Guide</Link>
            <Link className='text-base block hover:underline' to='/'>Vacancies</Link>
            <Link className='text-base block hover:underline' to='/'>FAQ</Link>
          
        </div> 
    </div>
  )
}

export default footer