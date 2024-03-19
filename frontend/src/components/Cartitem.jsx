import React, { useState } from 'react'
import { BsFillPlusCircleFill } from "react-icons/bs";
import { ImBin2 } from "react-icons/im";
import { HiOutlineMinusCircle } from "react-icons/hi";


function Cartitem({items}) {
    const [qty,setQty] = useState(1)
  return (

  <>
  {
    items  ? (
      items?.map((item) => (

        <tr className='w-auto border-b-2 '>
        <td className=' w-2 md:w-6 lg:w-12'><input type='checkbox' className=' accent-red-800' /></td>
        <td className=' w-16'><img className=' w-full' src={item.img} alt='image'/></td>
        <td className=' w-32'><p className='pt-serif-regular text-sm md:text-lg lg:text-xl'>{item.productName}</p></td>
        <td className=' w-20'><span className='pt-serif-regular text-sm md:text-lg lg:text-xl'>{item.price} Kyats</span></td>
        <td className=' w-16'>

          <div className='flex items-center justify-center gap-5 md:text-lg lg:text-xl'>
            <span ><BsFillPlusCircleFill onClick={() => setQty(curr => curr +1)}/></span>
          <span className='text-lg'>{item.qty == 1 ? qty : item.qty}</span>
            <span onClick={() => setQty(curr => curr -1)}><HiOutlineMinusCircle/></span>
          </div>
              
        </td>
        <td className=' w-16'> 
        <p className='md:text-lg lg:text-xl'>{item.price * item.qty} Kyats</p></td>
        <td className=' w-16'><button className=' md:text-lg lg:text-xl'>
            <ImBin2/>
            </button></td>
        </tr>

      ))
    ): <p>No items in the Cart</p>
  }
  </>

  )
}

export default Cartitem


