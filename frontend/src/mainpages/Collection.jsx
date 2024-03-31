
import { Link } from 'react-router-dom';
import Loading from '../components/Loading'
import Linksbar from '../components/Linksbar';
import Footer from '../components/Footerbar';
import Breadcrumb from '../components/Breadcrumb';
import ScrollBtn from '../components/ScrollBtn';
import useProduct from '../customHook/useProduct';
import { FaArrowRight } from "react-icons/fa6";
import Cartfloat from '../components/Cartfloat';

function CollectionSkin() {
 
    const {products:product,loading} = useProduct('/products')

  return (
    <>
    <Linksbar/>
    <Breadcrumb/>
    <div className=' px-6 w-full mx-auto'>
    <p className='pt-serif-bold w-full mt-2 mb-8 mx-auto text-3xl md:text-4xl lg:text-4xl' style={{color:'#786262'}}>Collections</p>
    
      
      <div className='w-auto mx-auto'>
        <p className='pt-serif-regular text-center text-xl mb-5 md:mx-5 md:text-left lg:text-left lg:mx-5 w-full md:text-2xl lg:text-2xl' 
        style={{color:'#786262'}}>Thanakha Series</p>  
            {loading ? <Loading/>
            :
            (
              <>
              <div className='w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
              {product.map((each,index) => ( each.category == 'skincare' && each.set == 'Thanakha' || 
              each.category == 'makeup' && each.set == 'Thanakha series' || each.set == 'Thanakha'
               ? 
              (
              <div className=' text-center mx-auto mt-2 mb-20 ' key={index}>
                <Link to={`/collection/${each._id}`} >
                    <img className=' w-[60%] mx-auto hover:opacity-[.7] hover:border-x-2 hover:border-red-200' key={index} src={each.subphoto[0]} alt='Skincare products'/>
                    <div className='pt-serif-regular  bg-gray-100 w-auto mr-3 p-2 mx-auto rounded-md mt-3 h-36'
                    >
                    <p className='font-bold text-lg mx-auto mb-3 mt-2 md:text-lg lg:text-xl'>{each.name}</p>
                    <span className='mx-auto'>Price : {each.price} Kyats</span>
                    </div>
                </Link>
              </div>
               ) :''
              )) 
            }</div>
            </>
            )
            }
          
          

       
      </div>

      <div className='w-auto mx-auto'>
        <p className='pt-serif-regular text-center text-2xl mb-5 md:mx-5 md:text-left lg:text-left lg:mx-5 w-full md:text-3xl lg:text-3xl' style={{color:'#786262'}}>Watermelon Series</p>
       
         
            {loading ? <Loading/>
            :
            (
              <>
              <div className='w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
              {product.map((each,index) => ( each.category == 'skincare' && each.set == 'Watermelon'
               ? 
              (
              <div className='text-center mx-auto mt-2 mb-20 hover:opacity-[.7] hover:border-x-2 hover:border-red-200' key={index}>
                <Link to={`/collection/${each._id}`} >
                    <img className=' w-[60%] mx-auto' key={index} src={each.subphoto[0]} alt='Skincare products'/>
                    <div className='pt-serif-regular  bg-gray-100 w-auto mr-3 p-2 mx-auto rounded-md mt-3 h-36'>
                    <p className='font-bold text-lg mx-auto mb-3 mt-2 md:text-lg lg:text-xl'>{each.name}</p>
                    <span className='mx-auto'>Price : {each.price} Kyats</span>
                    </div>
                </Link>
              </div>
               ) :''
              )) 
            }</div>
            </>
            )
            }
          
          

       
      </div>

      <div className='w-auto mx-auto'>
        <p className='pt-serif-regular text-center text-2xl mb-5 md:mx-5 md:text-left lg:text-left lg:mx-5 w-full md:text-3xl lg:text-3xl' style={{color:'#786262'}}>Cica Series</p>
       
         
            {loading ? <Loading/>
            :
            (
              <>
              <div className='w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
              {product.map((each,index) => ( each.category == 'skincare' && each.set == 'cica'
               ? 
              (
              <div className='text-center mx-auto mt-2 mb-20 hover:opacity-[.7] hover:border-x-2 hover:border-red-200' key={index}>
                <Link to={`/collection/${each._id}`} >
                    <img className=' w-[60%] mx-auto' key={index} src={each.subphoto[0]} alt='Skincare products'/>
                    <div className='pt-serif-regular  bg-gray-100 w-auto mr-3 p-2 mx-auto rounded-md mt-3 h-36'>
                    <p className='font-bold text-lg mx-auto mb-3 mt-2 md:text-lg lg:text-xl'>{each.name}</p>
                    <span className='mx-auto'>Price : {each.price} Kyats</span>
                    </div>
                </Link>
              </div>
               ) :''
              )) 
            }</div>
            </>
            )
            }
          
          

       
      </div>

     

      <div className='w-auto mx-auto'>
        <p className='pt-serif-regular text-center text-2xl mb-5 md:mx-5 md:text-left lg:text-left lg:mx-5 w-full md:text-3xl lg:text-3xl' style={{color:'#786262'}}>Superstar Series</p>
       
         
            {loading ? <Loading/>
            :
            (
              <>
              <div className='w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
              {product.map((each,index) => ( each.category == 'makeup' && each.set == 'Superstar'
               ? 
              (
              <div className='text-center mx-auto mt-2 mb-10 hover:opacity-[.7] hover:border-x-2 hover:border-red-200' key={index}>
                <Link to={`/collection/${each._id}`} >
                    <img className=' w-[60%] mx-auto' key={index} src={each.subphoto[0]} alt='Skincare products'/>
                    <div className='pt-serif-regular bg-gray-100 w-auto mr-3 p-2 mx-auto rounded-md mt-3 h-36'>
                    <p className='font-bold text-lg mx-auto mb-3 mt-2 md:text-lg lg:text-xl'>{each.name}</p>
                    <span className='mx-auto'>Price : {each.price} Kyats</span>
                    </div>
                </Link>
              
              </div>
               ) :''
              )) 
            }</div>
            </>
            )
            }
          
          
  
          <Link className='pt-serif-regular hover:underline text-xl' 
        to='/specialsets'
        >Go to Special Gift page <FaArrowRight style={{display:'inline'}}/></Link>
       
      </div>
      
      
      

     
    </div>
    <Cartfloat/>
    <ScrollBtn/>
    <Footer/>
    </>
  )
}

export default CollectionSkin