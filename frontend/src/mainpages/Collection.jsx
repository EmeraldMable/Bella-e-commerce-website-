import { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../components/Loading'
import Linksbar from '../components/Linksbar';
import Footer from '../components/Footerbar';

function CollectionSkin() {
  const [product,setProduct] = useState([])
  const [loading,setLoading] = useState(false)


  useEffect( () => {
    const Products = async () => {
      setLoading(true)
      try{
        const response = await fetch('/products');
        const data = await response.json();
        setProduct(data)
        setLoading(false)
        
      }catch(error) {
       
        setLoading(false)
      }
    }
    Products();
  },[])

  

  return (
    <>
    <Linksbar/>
    <div className=' mt-28 p-8 w-full mx-auto'>
      <p className='pt-serif-bold w-full mb-3 mx-auto text-xl md:text-2xl lg:text-3xl' style={{color:'#786262'}}>Collections</p>
      <p className='pt-serif-regular mb-5 w-sull mx-auto text-xl'><span className='pt-serif-bold-italic' style={{color:'#786262'}}>Collection Sets</span></p>
      <p className=' mb-10 w-full text-left mx-20 text-4xl p-2 rounded-md font-bold italic' style={{color:'#786252'}}>Skincare</p>
      <div className='w-auto mx-auto'>
        <p className='pt-serif-regular text-left md:mx-10 lg:mx-20 w-full text-lg md:text-xl lg:text-2xl' style={{color:'#786262'}}>Thanakha Series</p>
       
         
            {loading ? <Loading/>
            :
            (
              <>
              <div className='w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
              {product.map((each,index) => ( each.category == 'skincare' && each.set == 'Thanakha'
               ? 
              (
              <div className='text-center mx-auto mt-2 mb-10'>
                <Link to={`/product/makeup/detail/:${each._id}`} >
                    <img className=' w-[60%] mx-auto' key={index} src={each.subphoto[0]} alt='Skincare products'/>
                    <p className='mx-auto mb-3'>{each.name}</p>
                    <span className='mx-auto'>price : {each.price} Kyats</span>
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
        <p className='pt-serif-regular text-left md:mx-10 lg:mx-20 w-full text-lg md:text-xl lg:text-2xl' style={{color:'#786262'}}>Watermelon Series</p>
       
         
            {loading ? <Loading/>
            :
            (
              <>
              <div className='w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
              {product.map((each,index) => ( each.category == 'skincare' && each.set == 'Watermelon'
               ? 
              (
              <div className='text-center mx-auto mt-2 mb-10'>
                <Link to={`/product/makeup/detail/:${each._id}`} >
                    <img className=' w-[60%] mx-auto' key={index} src={each.subphoto[0]} alt='Skincare products'/>
                    <p className='mx-auto mb-3'>{each.name}</p>
                    <span className='mx-auto'>price : {each.price} Kyats</span>
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
        <p className='pt-serif-regular text-left md:mx-10 lg:mx-20 w-full text-lg md:text-xl lg:text-2xl' style={{color:'#786262'}}>Cica Series</p>
       
         
            {loading ? <Loading/>
            :
            (
              <>
              <div className='w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
              {product.map((each,index) => ( each.category == 'skincare' && each.set == 'cica'
               ? 
              (
              <div className='text-center mx-auto mt-2 mb-10'>
                <Link to={`/product/makeup/detail/:${each._id}`} >
                    <img className=' w-[60%] mx-auto' key={index} src={each.subphoto[0]} alt='Skincare products'/>
                    <p className='mx-auto mb-3'>{each.name}</p>
                    <span className='mx-auto'>price : {each.price} Kyats</span>
                </Link>
              </div>
               ) :''
              )) 
            }</div>
            </>
            )
            }
          
          

       
      </div>

      <div className='w-auto mx-auto mt-5'>
      <p className=' mb-10 w-full mx-20 text-left text-4xl p-2 rounded-md font-bold italic ' style={{color:'#786252'}}>MakeUp</p>
        <p className='pt-serif-regular text-left md:mx-10 lg:mx-20 w-full text-lg md:text-xl lg:text-2xl' style={{color:'#786262'}}>Thanakha Series</p>
       
         
            {loading ? <Loading/>
            :
            (
              <>
              <div className='w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
              {product.map((each,index) => ( each.category == 'makeup' && each.set == 'Thanakha'|| each.set == 'Thanakha series'
               ? 
              (
              <div className='text-center mx-auto mt-2 mb-10'>
                <Link to={`/product/makeup/detail/:${each._id}`} >
                    <img className=' w-[60%] mx-auto' key={index} src={each.subphoto[0]} alt='Skincare products'/>
                    <p className='mx-auto mb-3'>{each.name}</p>
                    <span className='mx-auto'>price : {each.price} Kyats</span>
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
        <p className='pt-serif-regular text-left md:mx-10 lg:mx-20 w-full text-lg md:text-xl lg:text-2xl' style={{color:'#786262'}}>Superstar series</p>
       
         
            {loading ? <Loading/>
            :
            (
              <>
              <div className='w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
              {product.map((each,index) => ( each.category == 'makeup' && each.set == 'Superstar'
               ? 
              (
              <div className='text-center mx-auto mt-2 mb-10'>
                <Link to={`/product/makeup/detail/:${each._id}`} >
                    <img className=' w-[60%] mx-auto' key={index} src={each.subphoto[0]} alt='Skincare products'/>
                    <p className='mx-auto mb-3'>{each.name}</p>
                    <span className='mx-auto'>price : {each.price} Kyats</span>
                </Link>
              </div>
               ) :''
              )) 
            }</div>
            </>
            )
            }
          
          

       
      </div>
      
      
      

     
    </div>
    <Footer/>
    </>
  )
}

export default CollectionSkin