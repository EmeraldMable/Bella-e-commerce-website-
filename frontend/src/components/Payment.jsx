import { Link } from "react-router-dom"
import Visa from '../assets/Visa.png'
import kbz from '../assets/kbz.png'
import wave from '../assets/wave.png'
import aya from '../assets/aya.png'
import ayapay from '../assets/ayapay.jpg'

function Payment() {
  return (
    <div className="pt-serif-regular text-left ml-28 ">
       <p className="pt-serif-bold text-2xl text-left -mt-10 mb-10"> Step 3 : Please choose your prefered payment</p>
       <div className="mt-5 flex items-center">
       <Link to='/orderconfirm' className="link w-20 mr-5 hover:scale-110">
        <img className=" w-[90%] border-2" src={Visa} alt="visa card for payment" /></Link>
       <Link to='/orderconfirm' className="link w-20 mr-5 hover:scale-110">
        <img className=" w-20 " src={kbz} alt="KBZ bank for payment" /></Link>
       <Link to='/orderconfirm' className="link w-20  mr-5 hover:scale-110">
        <img className=" w-20 " src={wave} alt="wave money application for payment" /></Link>
       <Link to='/orderconfirm' className="link w-20 mr-5 hover:scale-110">
        <img className=" w-20 " src={aya} alt="aya bank for payment" /></Link>
       <Link to='/orderconfirm' className="link w-12 mr-5 hover:scale-110">
        <img className=" w-20 " src={ayapay} alt="aya pay application for payment" /></Link>
       <Link to='/orderconfirm' className="link w-auto border-2 mt-2 p-3 rounded-md hover:bg-black hover:text-white">Cash on delivery</Link>
       </div>
     
    </div>
  )
}

export default Payment