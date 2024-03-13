import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import Linksbar from '../components/Linksbar';
import Footer from '../components/Footerbar';
import Review from '../components/Review';
import Shortcut from'../components/Shortcut';
import Giftset from '../components/Giftset';
import BestSeller from '../components/Bestseller'
import Carousel from '../components/Carousel';
import {video, carouselSlide , Slogans } from '../data/data'
import Breadcrumb from '../components/Breadcrumb';



function Home() {
   const slogan2 = useRef()
   const slogan1 = useRef()

   useGSAP(() => {
    gsap.from(slogan2.current,{x:90 , duration:0.5 , delay:1})
    gsap.from(slogan1.current,{x:100 , duration:0.5 })
   })
  
  return (
    <>
    <Linksbar />
   
    <Breadcrumb />
    
   <div className='w-auto mx-auto ml-10 mr-10 lg:mt-8'>
      <div className='mx-auto mt-36 max-w-6xl lg:flex lg:items-center lg:gap-10' >
        
          <div className=' w-full mx-auto my-auto pt-2 pb-2 sm:pt-4 sm:pb-6 text-center'  >
         
            <p className=' text-base font-bold leading-7 sm:leading-10 sm:text-xl lg:text-2xl lg:leading-10' ref={slogan1}>{Slogans.des.myanmar} </p>
           
           
          </div>
          <video   className=' w-2/3 h-1/2 md:w-1/2 mx-auto mt-5 lg:w-1/3 rounded-lg object-cover' controls>
            <source  src={video.link} alt="bella advertising" type='video/mp4'/>
          </video>
           
      </div>

      <div className='w-auto mx-5 lg:flex lg:items-center lg:justify-between'>
        <div className=' max-w-xl mb-6 md:max-w-3xl mx-auto lg:mx-10 mt-5 lg:flex'  >
          <Carousel autoSlide={true}>
            {carouselSlide.map((slide,index) =>( <img className=' w-fit mx-auto rounded-lg' key={index} src={slide} alt="slide pictures" />))}
          </Carousel>
        
        </div>
        <p className='pt-serif-bold -z-0 text-base w-full mx-auto leading-7 sm:leading-10 sm:text-xl lg:text-2xl lg:leading-10  ' ref={slogan2}>{Slogans.des.eng}</p>
      </div>
   </div>
      <Shortcut/>
      <Giftset  />
      <BestSeller/>
       <Review/>
       <Footer/>
       </>
  )
}

export default Home