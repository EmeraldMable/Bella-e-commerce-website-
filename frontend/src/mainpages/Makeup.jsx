import useProduct from '../customHook/useProduct';
import { Link } from 'react-router-dom';
import Loading from '../components/Loading'
import Linksbar from '../components/Linksbar';
import Footer from '../components/Footerbar'





function Makeup() {
    const {products, loading , error} = useProduct('/products')
  
  return (
    <>
    <Linksbar/>
    <div className=' mt-28 p-8 w-full mx-auto'>
      <p className='pt-serif-bold w-full mb-3 mx-auto text-xl md:text-2xl lg:text-3xl' style={{color:'#786262'}}>MakeUp</p>
      <p className='pt-serif-regular mb-2 w-sull mx-auto text-xl'>Enhance your <span className='pt-serif-bold-italic' style={{color:'#786262'}}>Natural features</span></p>
      <p className=' mb-10 w-sull mx-auto text-xl font-bold italic' style={{color:'#786262'}}>လှသထက် လှဖို့</p>
      <div className='w-auto mx-auto'>
        <p className='pt-serif-regular text-left md:mx-10 lg:mx-20 w-full text-lg md:text-xl lg:text-2xl' style={{color:'#786262'}}>Foundation</p>
        {
          loading ? <Loading/> : (
           
           <div className='w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
              {products.map((each,index) => ( each.subcategory == 'face' ? 
              (
              <div className='text-center mx-auto mt-2 mb-10 hover:opacity-[.7] hover:border-x-2 hover:border-red-200'
              key={index}>
                <Link to={`/product/makeup/detail/${each._id}`} >
                  <img className=' w-[60%] mx-auto' key={index} src={each.subphoto[0]} alt='foundation'/> 
                  <p className='mx-auto mb-3 mt-2'>{each.name}</p>
                  <span className='mx-auto'>price : {each.price} Kyats</span>
                </Link>
              </div>
              )
              :''
              )) }
              </div>)
         
          }
      </div>
      <div className='w-auto mx-auto'>
        <p className='pt-serif-regular text-left md:mx-10 lg:mx-20 w-full text-lg md:text-xl lg:text-2xl' style={{color:'#786262'}}>Lip</p>
          {
          loading ? <Loading/> : (
            <div className='w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {products.map((each,index) => ( each.subcategory == 'lips' ? 
            
              <div className='text-center mx-auto mt-2 mb-10 hover:opacity-[.7] hover:border-x-2 hover:border-red-200'
              key={index}>
                 <Link to={`/product/makeup/detail/${each._id}`} >
                  <img className=' w-[60%] mx-auto' key={index} src={each.subphoto[0]} alt='products for lips'/> 
                  <p className='mx-auto mb-3'>{each.name}</p>
                  <span className='mx-auto'>price : {each.price} Kyats</span>
                </Link>
            </div>
            
            : '')) }
            </div>
          )
        }
        
      </div>
      <div className='w-auto mx-auto'>
        <p className='pt-serif-regular text-left md:mx-10 lg:mx-20 w-full text-lg md:text-xl lg:text-2xl' style={{color:'#786262'}}>Eyes</p>
        {
          loading ? <Loading/> : (
            <div className='w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {products.map((each,index) => ( each.subcategory == 'eyes' ? 
            <div className='text-center mx-auto mt-2 mb-10 hover:opacity-[.7] hover:border-x-2 hover:border-red-200'
            key={index}>
              <Link to={`/product/makeup/detail/${each._id}`} >
              <img className=' w-[60%] mx-auto' key={index} src={each.subphoto[0]} alt='products for eyes'/> 
              <p className='mx-auto mb-3'>{each.name}</p>
              <span className='mx-auto'>price : {each.price} Kyats</span>
              </Link>
            </div>
            : '')) }
            </div>
          )
        }
       
      </div>
      <div className='w-auto mx-auto mt-10 mb-10'>
        <p className='pt-serif-regular mb-10 text-left md:mx-10 lg:mx-20 w-full text-lg md:text-xl lg:text-2xl' style={{color:'#786262'}}>Beauty Tools</p>
        <p className=' h-24 p-10 mx-10 text-left text-white bg-red-800'>No items Yet for beauty tools.</p>
      </div>

    </div>
    <Footer/>
    </>
  )
}

export default Makeup