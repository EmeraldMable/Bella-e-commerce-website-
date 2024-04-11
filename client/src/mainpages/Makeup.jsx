import useProduct from '../customHook/useProduct';
import { Link } from 'react-router-dom';
import Loading from '../components/Loading'
import Linksbar from '../components/Linksbar';
import Footer from '../components/Footerbar'
import Breadcrumb from '../components/Breadcrumb';
import ScrollBtn from '../components/ScrollBtn';
import { FaArrowRight } from "react-icons/fa6";
import Cartfloat from '../components/Cartfloat';
import { useState,useEffect } from 'react';



function Makeup() {
  const [filter, setFilter] = useState('default sorting')
  
    const {products, loading , error} = useProduct('/products')
    useEffect(() => {
      window.scrollTo(0,0)
     },[])
  
  return (
    <>
    <Linksbar/>
    <Breadcrumb />
    <div className='px-16 w-full mx-auto'>
      
        <h3 className='pt-serif-bold w-full mt-2 mb-1 mx-auto text-3xl md:text-4xl lg:text-4xl' style={{color:'#786262'}}>MakeUp</h3>
        <p className='pt-serif-regular mb-1 w-sull mx-auto text-lg md:text-xl lg:text-xl'>Enhance your <span className='pt-serif-bold-italic' style={{color:'#786262'}}>Natural features</span></p>
        <p className=' mb-5 w-sull mx-auto font-bold italic text-lg md:text-xl lg:text-xl' style={{color:'#786262'}}>လှသထက် လှဖို့</p>
         
        <select className=' w-56 mb-10 mt-8 md:mt-0 lg:mt-0 mx-auto border-2 rounded-md border-black md:float-right lg:float-right' value={filter} onChange={(e) => setFilter(e.target.value) }>
          <option>default sorting</option>
          <option>sorting by price(lowest to highest)</option>
        </select>
     
      <div className='w-auto mx-auto'>
        <p className='pt-serif-regular text-center text-2xl mb-5 md:mx-5 md:text-left lg:text-left lg:mx-5 w-full md:text-3xl lg:text-3xl' style={{color:'#786262'}}>Foundation</p>
        {
          loading ? <Loading/> : (
           
           <div className='w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
              { filter == 'default sorting' ? products.sort((a,b) => a.price > b.price ? -1 : 1)
              .map((each,index) => ( each.subcategory == 'face' ? 
              (
              <div className='text-center mx-auto mt-2 mb-20 '
              key={index}>
                <Link to={`/makeup/${each._id}`} >
                  <img className=' w-[60%] mx-auto hover:opacity-[.7] hover:border-x-2 hover:border-red-200' key={index} src={each.photo} alt='foundation'/> 
                  <div className='pt-serif-regular  bg-gray-100 w-auto mr-3 p-2 mx-auto rounded-md mt-3 h-36'>
                  <p className='font-bold text-lg mx-auto mb-3 mt-2'>{each.name}</p>
                  <span className='mx-auto'>Price : {each.price} Kyats</span>
                  </div>
                  
                </Link>
              </div>
              )
              :''
              )) :
              products  .sort((a,b) => a.price > b.price ? 1 : -1).map((each,index) => ( each.subcategory == 'face' ? 
              (
              <div className='text-center mx-auto mt-2 mb-20 '
              key={index}>
                <Link to={`/makeup/${each._id}`} >
                  <img className=' w-[60%] mx-auto hover:opacity-[.7] hover:border-x-2 hover:border-red-200' key={index} src={each.photo} alt='foundation'/> 
                  <div className='pt-serif-regular  bg-gray-100 w-auto mr-3 p-2 mx-auto rounded-md mt-3 h-36'>
                  <p className='font-bold text-lg mx-auto mb-3 mt-2'>{each.name}</p>
                  <span className='mx-auto'>Price : {each.price} Kyats</span>
                  </div>
                  
                </Link>
              </div>
              )
              :''
              )) }
              </div>)
         
          }
      </div>
      <div className='w-auto mx-auto'>
        <p className='pt-serif-regular text-center text-2xl mb-5 md:mx-5 md:text-left lg:text-left lg:mx-5 w-full md:text-3xl lg:text-3xl' style={{color:'#786262'}}>Lip</p>
          {
          loading ? <Loading/> : (
            <div className='w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            { filter == 'default sorting' ? products.sort((a,b) => a.price > b.price ? -1 : 1)
            .map((each,index) => ( each.subcategory == 'lips' ? 
            
              <div className='text-center mx-auto mt-2 mb-20 '
              key={index}>
                 <Link to={`/makeup/${each._id}`} >
                  <img className=' w-[60%] mx-auto hover:opacity-[.7] hover:border-x-2 hover:border-red-200' key={index} src={each.photo} alt='products for lips'/> 
                  <div className='pt-serif-regular  bg-gray-100 w-auto mr-3 p-2 mx-auto rounded-md mt-3 h-36'>
                  <p className='font-bold text-lg mx-auto mb-3 mt-2'>{each.name}</p>
                  <span className='mx-auto'>Price : {each.price} Kyats</span>
                  </div>
                </Link>
            </div>
            
            : '')) :
            products.sort((a,b) => a.price > b.price ? 1  : -1)
            .map((each,index) => ( each.subcategory == 'lips' ? 
            
              <div className='text-center mx-auto mt-2 mb-20 '
              key={index}>
                 <Link to={`/makeup/${each._id}`} >
                  <img className=' w-[60%] mx-auto hover:opacity-[.7] hover:border-x-2 hover:border-red-200' key={index} src={each.photo} alt='products for lips'/> 
                  <div className='pt-serif-regular  bg-gray-100 w-auto mr-3 p-2 mx-auto rounded-md mt-3 h-36'>
                  <p className='font-bold text-lg mx-auto mb-3 mt-2'>{each.name}</p>
                  <span className='mx-auto'>Price : {each.price} Kyats</span>
                  </div>
                </Link>
            </div>
            
            : ''))
            }
            </div>
          )
        }
        
      </div>
      <div className='w-auto mx-auto'>
        <p className='pt-serif-regular text-center text-2xl mb-5 md:mx-5 md:text-left lg:text-left lg:mx-5 w-full md:text-3xl lg:text-3xl' style={{color:'#786262'}}>Eyes</p>
        {
          loading ? <Loading/> : (
            <div className='w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {filter == 'default sorting' ? products.sort((a,b) => a.price > b.price ? -1 : 1)
            .map((each,index) => ( each.subcategory == 'eyes' ? 
            <div className='text-center mx-auto mt-2 mb-20'
            key={index}>
              <Link to={`/makeup/${each._id}`} >
              <img className=' w-[60%] mx-auto  hover:opacity-[.7] hover:border-x-2 hover:border-red-200' key={index} src={each.photo} alt='products for eyes'/> 
              <div className='pt-serif-regular  bg-gray-100 w-auto mr-3 p-2 mx-auto rounded-md mt-3 h-36'>
              <p className=' font-bold text-lg mx-auto mb-3 mt-2'>{each.name}</p>
              <span className='mx-auto'>Price : {each.price} Kyats</span>
              </div>
              </Link>
            </div>
            : '')) :
            products.sort((a,b) => a.price > b.price ? 1 : -1)
            .map((each,index) => ( each.subcategory == 'eyes' ? 
            <div className='text-center mx-auto mt-2 mb-20'
            key={index}>
              <Link to={`/makeup/${each._id}`} >
              <img className=' w-[60%] mx-auto  hover:opacity-[.7] hover:border-x-2 hover:border-red-200' key={index} src={each.photo} alt='products for eyes'/> 
              <div className='pt-serif-regular  bg-gray-100 w-auto mr-3 p-2 mx-auto rounded-md mt-3 h-36'>
              <p className=' font-bold text-lg mx-auto mb-3 mt-2'>{each.name}</p>
              <span className='mx-auto'>Price : {each.price} Kyats</span>
              </div>
              </Link>
            </div>
            : ''))
             }
            </div>
          )
        }
       
      </div>
      <div className='w-auto mx-auto mt-10 mb-10'>
        <p className='pt-serif-regular mb-10 text-left md:mx-10 lg:mx-20 w-full text-lg md:text-xl lg:text-2xl' style={{color:'#786262'}}>Beauty Tools</p>
        <p className='w-auto p-10 mb-10 mx-10 text-left  bg-gray-100'>No items Yet for beauty tools.</p>
        <Link className='pt-serif-regular hover:underline text-xl' 
        to='/skincare'
        >Go to skincare page <FaArrowRight style={{display:'inline'}}/></Link>
      </div>

    </div>
    <Cartfloat/>
    <ScrollBtn/>
    <Footer/>
    </>
  )
}

export default Makeup