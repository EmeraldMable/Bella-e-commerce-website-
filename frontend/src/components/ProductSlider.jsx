import { Link } from "react-router-dom"
import { IoIosArrowDropright } from "react-icons/io";
import { IoIosArrowDropleft } from "react-icons/io";


function ProductSlider({children:products}) {

     return (
    <div>
    <span className="absolute left-0 top-40 rounded-md bg-gray-500"
    >
        <IoIosArrowDropleft size={38} fill="white"/></span>
    <span className="absolute right-0 top-40 h-10 rounded-md bg-gray-500"
   >
        <IoIosArrowDropright size={38} fill="white"/></span>
    </div>
  )
}

export default ProductSlider