
import {Link} from 'react-router-dom'
import useProduct from '../customHook/useProduct'
import Loading from '../components/Loading'

function Giftset() {


  const {products:sets , loading} = useProduct('/products')
  console.log(sets)


  return (
    <div className=' w-auto mx-auto bg-white mt-16 lg:mt-20' >
         <p className='pt-serif-bold text-4xl w-auto mx-auto lg:text-5xl mb-3 md:mb-4 lg:mb-8' style={{color:'#786262'}}>Special Gift Sets</p>

         {loading ? <Loading/> : 
         
         (
          <div className="w-auto mx-10 sm:grid sm:grid-cols-2 md:grid md:grid-cols-3 lg:grid lg:grid-cols-4 ">
          {
           sets?.map((set,index) => set.category == 'special' ? (
             <div className='text-center mx-auto mt-2 mb-3 mr-3 '
             key={index}>
               <Link to={`/specialsets/detail/${set._id}`} >
                 <img className=' w-90 mx-auto hover:opacity-[.7] hover:border-x-2 hover:border-red-200' key={index} src={set.photo} alt='product special set'/> 
                 <div className='pt-serif-regular  bg-gray-100 w-auto p-2 mx-auto rounded-md mt-3 h-36 mr-3'>
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