
import {Link} from 'react-router-dom'
import useProduct from '../customHook/useProduct'
import Loading from '../components/Loading'
import { FaArrowRight } from "react-icons/fa6";

function Giftset() {


  const {products:sets , loading} = useProduct('/products')
 


  return (
    <div className=' w-auto mx-auto bg-white mt-16 lg:mt-20' >
         <p className='pt-serif-bold text-4xl w-auto mx-auto lg:text-5xl mb-4 md:mb-2 lg:mb-4' style={{color:'#786262'}}>Special Gift Sets</p>
          <Link className=' hover:underline' to='/specialsets'> <p className='pt-serif-regular  mb-5 md:mb-4 lg:mb-6 text-right mr-20 md:mr-32 lg:mr-32'>Explore 
          <FaArrowRight style={{display:'inline' , marginLeft:'8px'}}/></p></Link>
         {loading ? <Loading/> : 
         
         (
          <div className="w-auto mx-10 sm:grid sm:grid-cols-2 md:grid md:grid-cols-3 lg:grid lg:grid-cols-4 ">
          {
           sets?.map((set,index) => set.category == 'special' ? (
             <div className='text-center mx-auto mt-2 mb-3 mr-3 '
             key={index}>
               <Link to={`/specialsets/${set._id}`} >
                 <img className=' w-80 mx-auto hover:opacity-[.7] hover:border-x-2 hover:border-red-200' key={index} src={set.photo} alt='product special set'/> 
                 <div className='pt-serif-regular bg-gray-100 w-full p-2 mx-auto rounded-md mt-3 h-36 mr-3'>
                 <p className='font-bold text-lg mx-auto mb-3 mt-2'>{set.name}</p>
                 <span className='mx-auto'>price : {set.price} Kyats</span>
                 </div>
               </Link>
             </div>) : '')
          }
        </div>
       )

         }

         
    
  </div>
  )
}

export default Giftset