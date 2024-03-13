import React, { useState } from 'react'
import special from '../assets/specialgift1.jpg'
import { ImBin2 } from "react-icons/im";


function Cartitem() {
    const [qty,setQty] = useState(1)
  return (
  
    <tr className='w-auto border-b-2 border-red-700 '>
    <td className=' w-2 md:w-6 lg:w-12'><input type='checkbox' className=' accent-red-800' /></td>
    <td className=' w-24 md:w-24 lg:w-24'><img className=' w-full' src={special} alt='image'/></td>
    <td className=' w-20 md:w-32 '><p className='pt-serif-regular md:text-lg lg:text-xl'></p></td>
    <td className=' w-12'><span className=' md:text-lg lg:text-xl'>3400 Kyats</span></td>
    <td className=' w-16'>
            <select className=' border-2 border-black rounded-md md:text-lg lg:text-xl'>
                <option value={qty}>1</option>
                <option value={qty}>2</option>
            </select>
    </td>
    <td className=' w-16'> <p className='md:text-lg lg:text-xl'>105000 Kyats</p> </td>
    <td className=' w-16'><button className=' md:text-lg lg:text-xl'>
        <ImBin2/>
        </button></td>
   </tr>
  

  )
}

export default Cartitem