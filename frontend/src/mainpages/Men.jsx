
import { Link } from 'react-router-dom';
import Loading from '../components/Loading'
import Linksbar from '../components/Linksbar';
import Footer from '../components/Footerbar';
import useProduct from '../customHook/useProduct';
import Breadcrumb from '../components/Breadcrumb';
import ScrollBtn from '../components/ScrollBtn';
import { FaArrowRight } from "react-icons/fa6";
import Cartfloat from '../components/Cartfloat';


function Men() {
  const {products, loading,error} = useProduct('/products')

  return (
    <>
    <Linksbar/>
    <Breadcrumb/>
    <div className='px-6 w-full mx-auto'>
      <p className='pt-serif-bold w-full mt-2 mb-1 mx-auto text-3xl md:text-4xl lg:text-4xl' style={{color:'#786262'}}>Skincare</p>
      <p className='pt-serif-regular mb-1 w-sull mx-auto text-xl'>Empower your <span className='pt-serif-bold-italic' style={{color:'#786262'}}>Natural Beauty</span></p>
      <p className=' mb-10 w-sull mx-auto text-xl font-bold italic' style={{color:'#786262'}}>ပင်ကိုယ်အလှတိုးဖို့</p>
      <div className='w-auto mx-auto'>
        <p className='pt-serif-regular text-center text-2xl mb-5 md:mx-5 md:text-left lg:text-left lg:mx-5 w-full md:text-3xl lg:text-3xl' 
        style={{color:'#786262'}}>Face</p>
       
         
            {loading ? <Loading/>
            :
            (
              <>
              <div className='w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
              {products.map((each,index) => ( each.category == 'men'  ? 
              (
              <div className='text-center mx-auto mt-2 mb-10 '
              key={index}>
                <Link to={`/men-session/detail/${each._id}`} >
                    <img className=' w-[60%] mx-auto hover:opacity-[.7] hover:border-x-2 hover:border-red-200' key={index} src={each.subphoto[0]} alt='Skincare products'/>
                    <div className='pt-serif-regular  bg-gray-100 w-auto mr-3 p-2 mx-auto rounded-md mt-3 h-36'>
                      <p className='font-bold text-lg mx-auto mb-3 mt-2 md:text-lg lg:text-xl'>{each.name}</p>
                      <span className='mx-auto'>price : {each.price} Kyats</span>
                    </div>
                </Link>
              </div>
               ) :''
              )) 
            }
            </div>
            </>
            )
           
            }
            
            <div className='pt-serif-regular w-full text-center mx-auto mt-2 mb-10 bg-gray-200 p-5'>
                <p className='font-bold text-xl mx-auto mb-3 mt-2 md:text-2xl lg:text-3xl '> Announcement</p>
            <p className='text-lg mx-auto mb-1 mt-2 md:text-lg lg:text-xl'> New products are on the way.</p>
            <p className='text-lg mx-auto mb-10  md:text-lg lg:text-xl'> Yay!!</p>
                  
            </div>
            
          
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

export default Men