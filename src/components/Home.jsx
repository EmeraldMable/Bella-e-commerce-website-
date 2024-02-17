import React from 'react'
import Vd1  from '../assets/slide/video1.mp4';
import Slide2  from '../assets/slide/slide2.jpg';
import Slide3  from '../assets/slide/slide3.jpg';
import Review from './Review';
import Category from'./Category';
import Giftset from './Giftset';
import BestSeller from './Bestseller'
import Carousel from './Carousel'

const slides = [Slide2 , Slide3 ]


function Home() {
  
  return (
    <>
   <div className='w-auto mx-auto ml-10 mr-10 lg:mt-8'>
      <div className='mx-auto mt-36 max-w-6xl lg:flex' >
        
          <div className=' w-full mx-auto my-auto pt-2 pb-2 sm:pt-4 sm:pb-6 text-center' >
         
            <p className=' text-base font-bold leading-7 sm:leading-10 sm:text-xl lg:text-2xl lg:leading-10'> Bella ဈေးအချိုဆုံးနှင့် အရည်အသွေးကောင်းသော cosmetic ပစ္စည်းများ ထုတ်လုပ်ဖြန့်ချီသည့်
           မြန်မာပြည်၏ နံပါတ်တစ် အမှတ်တံဆိပ်</p>
           
           
          </div>
          <video  className=' w-2/3 h-1/2 md:w-1/2 mx-auto mt-5 lg:w-1/3 rounded-lg object-cover' controls>
            <source  src={Vd1} alt="bella advertising" type='video/mp4'/>
          </video>
           
      </div>

      <div className='w-auto mx-10 lg:flex lg:items-center lg:justify-between'>
        <div className=' max-w-xl mb-6 md:max-w-3xl mx-auto lg:mx-10 mt-5 lg:flex'  >
          <Carousel autoSlide={true}>
            {slides.map((slide,index) =>( <img className=' w-fit mx-auto rounded-lg' key={index} src={slide} alt="slide pictures" />))}
          </Carousel>
        
        </div>
        <p className='pt-serif-bold text-base w-full mx-auto leading-7 sm:leading-10 sm:text-xl lg:text-2xl lg:leading-10 '>The Leading National Brand to provide Women With Beauty Solutions for Empowerment</p>
      </div>
   </div>
      <Category/>
      <Giftset  />
      <BestSeller/>
       <Review/>
       </>
  )
}

export default Home