import { Suspense } from 'react'
import { Link } from 'react-router-dom';
import { bestSellers } from '../data/data'
import Linksbar from '../components/Linksbar'
import Breadcrumb from '../components/Breadcrumb';
import Cartfloat from '../components/Cartfloat';
import ScrollBtn from '../components/ScrollBtn';
import Footer from '../components/Footerbar';
import { FaArrowRight } from "react-icons/fa6";
import Loading from '../components/Loading'


const Component = () => {
    return (
        <div className='w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {bestSellers.map((each,index) => ( 
        (
        <div className='text-center mx-auto mt-2 mb-10 '
        key={index}>
          <Link to={`/best/${each._id}`} >
              <img className=' w-[60%] mx-auto hover:opacity-[.7] hover:border-x-2 hover:border-red-200' key={index} src={each.subphoto[0]} alt='Skincare products'/>
              <div className='pt-serif-regular  bg-gray-100 w-auto mr-3 p-2 mx-auto rounded-md mt-3 h-36'>
                <p className='font-bold text-lg mx-auto mb-3 mt-2 md:text-lg lg:text-xl'>{each.name}</p>
                <span className='mx-auto'>price : {each.price} Kyats</span>
              </div>
          </Link>
        </div>
         ) 
        )) 
      }</div>
    )
}


function Best() {

   
  return (
    <>
    <Linksbar/>
    <Breadcrumb/>
    <div className='px-6 w-full mx-auto'>
      <p className='pt-serif-bold w-full mt-2 mb-1 mx-auto text-3xl md:text-4xl lg:text-4xl' style={{color:'#786262'}}>Best of our products</p>
      <p className=' mb-10 w-sull mx-auto text-xl font-bold italic' style={{color:'#786262'}}>အရောင်းရဆုံး ထုတ်ကုန်များ</p>
      <div className='w-auto mx-auto'>
         
           
            <Suspense fallback={<Loading/>}>
              
           <Component/>
            
            </Suspense>
            
          
          <Link className='pt-serif-regular hover:underline text-xl h-10 mb-10' 
        to='/collection'
        >Go to collection page <FaArrowRight style={{display:'inline'}}/></Link>

       
      </div>
     
    </div>
    <Cartfloat/>
    <ScrollBtn/>
    <Footer/>
    </>
  )
}

export default Best