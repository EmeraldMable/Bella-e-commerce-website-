import React from 'react'
import Matte from '../assets/bestseller/matte.png';
import Linksbar from '../components/Linksbar';
function Makeup() {
  return (
    <>
    <Linksbar/>
    <div className=' mt-28 p-8 w-full mx-auto'>
      <p className='pt-serif-bold w-full mb-3 mx-auto text-xl md:text-2xl lg:text-3xl' style={{color:'#786262'}}>MakeUp</p>
      <p className='pt-serif-regular mb-2 w-sull mx-auto text-xl'>Enhance your <span className='pt-serif-bold-italic' style={{color:'#786262'}}>Natural features</span></p>
      <p className=' mb-10 w-sull mx-auto text-xl font-bold italic' style={{color:'#786262'}}>လှသထက် လှဖို့</p>
      <div className='w-auto mx-auto'>
        <p className='pt-serif-regular text-left md:mx-10 lg:mx-20 w-full text-lg md:text-xl lg:text-2xl' style={{color:'#786262'}}>Foundation</p>
        <img className=' w-1/2' src={Matte} alt='foundation'/>
      </div>
      <div className='w-auto mx-auto'>
        <p className='pt-serif-regular text-left md:mx-10 lg:mx-20 w-full text-lg md:text-xl lg:text-2xl' style={{color:'#786262'}}>Lip</p>
        <img className=' w-1/2' src={Matte} alt='foundation'/>
      </div>
      <div className='w-auto mx-auto'>
        <p className='pt-serif-regular text-left md:mx-10 lg:mx-20 w-full text-lg md:text-xl lg:text-2xl' style={{color:'#786262'}}>Eyes</p>
        <img className=' w-1/2' src={Matte} alt='foundation'/>
      </div>
      <div className='w-auto mx-auto'>
        <p className='pt-serif-regular text-left md:mx-10 lg:mx-20 w-full text-lg md:text-xl lg:text-2xl' style={{color:'#786262'}}>Beauty Tools</p>
        <img className=' w-1/2' src={Matte} alt='foundation'/>
      </div>

      <div>
      <p className='pt-serif-bold w-full mb-10 mx-auto text-xl md:text-2xl lg:text-3xl hover:underline' style={{color:'#786262'}}>
          See Collections
      </p>
        
      </div>
    
      
    </div>
    </>
  )
}

export default Makeup