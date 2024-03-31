import { Suspense } from 'react'
import Loading from './Loading'
import { Link } from 'react-router-dom';
import { bestSellers } from '../data/data'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



function SampleNextArrow(props) {
  const { className:name, style, onClick } = props;
  return (
    <div
      className={name}
      style={{ ...style, display: "block", background: "black" , width: "30px" , height:"30px",
      borderRadius:'50%' , display:"flex" , alignItems:"center" , justifyContent:"center" , zIndex:"90" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" , width: "30px" , height:"30px",
    borderRadius:'50%' , display:"flex" , alignItems:"center" , justifyContent:"center" , zIndex:"90"}}
      onClick={onClick}
    />
  );
}


function Bestseller() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

  return (
   <>
   <p className='pt-serif-bold text-4xl mt-16 w-auto mx-auto lg:text-5xl mb-3 md:mb-4 lg:mb-8' style={{color:'#786262'}} >Best of the best</p>

   <div className='slider-container mx-10' >
    <Suspense fallback={<Loading/>}>
    <Slider {...settings}>
  
           {
               bestSellers?.map((product,index) => 
               <div className='text-center mt-2 mb-10'
               key={index} >
               <Link to={`/best/${product._id}`} >
                   <img className=' w-full hover:opacity-[.7] hover:border-x-2 hover:border-red-200' key={index} src={product.photo} alt='product special set'/> 
                   <div className='pt-serif-regular bg-gray-100 w-auto p-2 mx-auto rounded-md mt-3 h-36 mr-3'>
                   <p className='font-bold text-lg mx-auto mb-3 mt-2'>{product.name}</p>
                   <span className='mx-auto'>Price : {product.price} Kyats</span>
                   </div>
                   </Link>
               </div>
               ) 
           }
       
         
 
    </Slider>
  
    </Suspense>
   

</div>
</>
  )
}

export default Bestseller