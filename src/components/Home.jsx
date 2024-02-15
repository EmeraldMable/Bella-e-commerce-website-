import React from 'react'
import Slide3  from '../assets/slide/bellslide3.jpg';
import Gift  from '../assets/specialgift1.jpg';
import Best  from '../assets/bestseller.jpg';
import { BsArrowBarRight } from "react-icons/bs";
import {Link} from 'react-router-dom';
import Review from './Review';
import Footer from './footer';

function Home() {
  return (
    <>
   <div className='w-auto sm:container sm:mx-auto mt-5 ml-10 mr-10'>
      <div className='mx-auto max-w-6xl' style={{background:'#786262'}}>
        <img className=' w-full' src={Slide3} alt="Slide1" />
          <div className=' w-auto mx-10 pt-2 pb-2 sm:pt-4 sm:pb-4 text-center text-white' >
         
            <p className=' text-base sm:text-xl'> Bella ဈေးအချိုဆုံးနှင့် အရည်အသွေးကောင်းသော cosmetic ပစ္စည်းများ  ထုတ်လုပ်ဖြန့်ချီသည့် မြန်မာပြည်၏</p>
            <p className=' text-base sm:text-xl'>နံပါတ်တစ် အမှတ်တံဆိပ်</p>
           
          </div>
           
     
      
      </div>
      <div className=' max-w-6xl mx-auto flex'  style={{background:'#786262'}}>
        <div className=' w-1/2'>
          <img src={Gift} alt='speciall gift sets'/>
          <Link className='w-auto' to='/'>
            <div className=' mx-5 pt-2 pb-2 sm:pt-4 sm:pb-4 sm:mx-10 w-auto text-left text-white flex' >
              <p className=' text-base sm:text-xl mx-5'>အထူးလက်ဆောင် Setများ</p>
              <p className=' my-auto'><BsArrowBarRight/></p>
          </div>
          </Link>
        </div>
        <div className=' w-1/2'>
          <img src={Best} alt='bestsellers'/>
          <Link className='w-auto' to='/'>
            <div className=' mx-5 pt-2 pb-2 sm:mx-10 sm:pt-4 sm:pb-4 w-auto text-left text-white flex' >
              <p className='  text-base sm:text-xl mx-5'>နောက်ဆုံးထွက် ပစ္စည်းများ</p>
              <p className=' my-auto'><BsArrowBarRight/></p>
            </div>
          </Link>
        </div>
      </div>

   </div>
       <Review/>
       <Footer/>
       </>
  )
}

export default Home