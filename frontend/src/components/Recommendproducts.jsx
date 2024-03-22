import useProduct from "../customHook/useProduct"
import { Link } from "react-router-dom";
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
  
  
      

function Recommendproducts({category}) {
   const {products} = useProduct('/products')
   var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
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
          initialSlide: 2,
          dots:false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots:false
        }
      }
    ]
  };
   

   

  return (
    <div className='slider-container mx-10 my-20' >
        <p className="pt-serif-bold-italic text-xl mb-4 text-center">Explore Our products</p>
<Slider {...settings}>
  
  {
      products?.map((product,index) => ( product.category !== category &&
        <div className='text-center mt-2 mb-10'
      key={index} >
      <Link to={`/detail/${product._id}`} >
          <img className=' w-full hover:opacity-[.7] hover:border-x-2 hover:border-red-200' key={index} src={product.photo} alt='product special set'/> 
         
          </Link>
      </div>
      ) 
      )
      
  }





</Slider>
    </div>
  )
}

export default Recommendproducts