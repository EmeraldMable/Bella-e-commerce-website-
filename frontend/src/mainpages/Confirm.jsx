import Linksbar from '../components/Linksbar';
import { useEffect } from 'react';
import Breadcrumb from '../components/Breadcrumb';
import Footer from '../components/Footerbar';
import { FaRegFaceGrinHearts } from "react-icons/fa6";
import ConfettiGenerator from 'confetti-js';
import ScrollBtn from '../components/ScrollBtn'

function Confirm() {
  useEffect(() => {
    const confettiSettings = { target: 'confettie-holder' };
    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();
    setTimeout(() => confetti.clear() , 4000)
  
    return () => confetti.clear();
  }, []) // add the var dependencies or not
  return (
    <div>
      <Linksbar/>
      <Breadcrumb/> 
      <canvas id='confettie-holder' className='absolute'></canvas>
  
      
       <p className='pt-serif-bold text-2xl my-10' style={{color:'#786262'}}>Your order is placed. It will be delivered within three or four days.</p>
       
         <div className='svg mx-auto p-3'>
        
            <p className='pt-serif-regular w-full text-xl my-auto' >Thanks for buying our products.</p>
            <FaRegFaceGrinHearts className='bounce mx-auto mt-5' size={43} fill='brown'/>
          
          
         </div>
            
         
       
       <ScrollBtn/>
      <Footer/>
    </div>
  )
}

export default Confirm