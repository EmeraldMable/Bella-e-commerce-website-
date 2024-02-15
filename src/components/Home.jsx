import React from 'react'
import {useRef} from 'react-dom';
import Vd1  from '../assets/slide/video1.mp4';
import Slide3  from '../assets/slide/bellslide3.jpg';
import Gift  from '../assets/specialgift1.jpg';
import Best  from '../assets/bestseller.jpg';
import { BsArrowBarRight } from "react-icons/bs";
import {Link} from 'react-router-dom';
import Review from './Review';
import Footer from './footer';
import Category from'./category';
import Giftset from './Giftset';



function Home() {
  
  return (
    <>
   <div className='w-auto mx-auto mt-5 ml-10 mr-10 lg:mt-8'>
      <div className='mx-auto max-w-6xl lg:flex' >
        
          <div className=' w-full mx-10 my-auto pt-2 pb-2 sm:pt-4 sm:pb-6 text-center' >
         
            <p className=' text-base font-bold leading-7 sm:leading-10 sm:text-xl lg:text-2xl lg:leading-10'> Bella ဈေးအချိုဆုံးနှင့် အရည်အသွေးကောင်းသော cosmetic ပစ္စည်းများ ထုတ်လုပ်ဖြန့်ချီသည့် <br 
            className='sm:hidden'
            /> မြန်မာပြည်၏ နံပါတ်တစ် အမှတ်တံဆိပ်</p>
           
           
          </div>
          <video  className=' w-2/3 h-1/2 md:w-1/2 mx-auto  lg:w-1/3 rounded-lg object-cover' controls>
            <source  src={Vd1} alt="bella advertising" type='video/mp4'/>
          </video>
           
     
      
      </div>
      <div className=' max-w-6xl h-auto mx-auto mt-5 md:flex md:gap-6 lg:gap-20'  >
        <img className=' w-full md:w-2/3 mx-auto rounded-lg' src={Slide3} alt="slide pictures" />
        <div className="w-auto mx-auto flex md:flex-col" >
          <div className=' w-full lg:w-2/3' >
            <img src={Gift} alt='speciall gift sets'/>
           
              <div className=' pt-2 pb-2 sm:pt-4 sm:pb-4 sm:mx-10 w-full text-left text-white flex md:relative md:-top-10 md:-left-10' 
              style={{background:'#786262'}}
               >
                <p className=' text-base mx-1 sm:text-xl md:mx-5'>Special Gift Setများ</p>
                <p className=' my-auto'><BsArrowBarRight/></p>
              </div>
            
          </div>
          <div className=' w-full lg:w-2/3'>
            <img src={Best} alt='bestsellers'/>
            <Link className='w-auto' to='/'>
              <div className=' pt-2 pb-2 mx-0 md:mx-10 sm:pt-4 sm:pb-4 w-full text-left text-white flex md:relative md:-left-10 ' style={{background:'#786262'}} >
                <p className='  text-base mx-1 sm:text-xl md:mx-5'>Latest ပစ္စည်းများ</p>
                <p className=' my-auto'><BsArrowBarRight/></p>
              </div>
            </Link>
          </div>
        </div>
      </div>

   </div>
      <Category/>
      <Giftset  />
       <Review/>
       <Footer/>
       </>
  )
}

export default Home