import { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../components/Loading'
import Linksbar from '../components/Linksbar';
import Footer from '../components/Footerbar';




function Skincare() {
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
      <p className='pt-serif-bold w-full mb-3 mx-auto text-xl md:text-2xl lg:text-3xl' style={{color:'#786262'}}>Skincare</p>
      <p className='pt-serif-regular mb-2 w-sull mx-auto text-xl'>Empower your <span className='pt-serif-bold-italic' style={{color:'#786262'}}>Natural Beauty</span></p>
      <p className=' mb-10 w-sull mx-auto text-xl font-bold italic' style={{color:'#786262'}}>ပင်ကိုယ်အလှတိုးဖို့</p>
      <div className='w-auto mx-auto'>
        <p className='pt-serif-regular text-left md:mx-10 lg:mx-20 w-full text-lg md:text-xl lg:text-2xl' style={{color:'#786262'}}>Face</p>
       
         
            {loading ? <Loading/>
            :
            (
              <>
              <div className='w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
              {product.map((each,index) => ( each.category == 'skincare'  ? 
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

export default Skincare