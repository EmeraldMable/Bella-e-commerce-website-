import { useEffect, useState } from "react";
import { reviewsFromStars } from "../data/data"
import { FaQuoteLeft } from "react-icons/fa6";
import { FaQuoteRight } from "react-icons/fa6";


function Review() {
  const [doc, setDoc] = useState(false)
   useEffect(() => {
    const media = window.matchMedia('(min-width:1024px)')
    setDoc(media.matches)

    const handleMedia = (event) => {
      setDoc(event.matches)
    }

    media.addEventListener('change' , handleMedia)
    return() => {
      media.removeEventListener('change' , handleMedia)
    }
   },[])
 
  return (
    <div className='w-full mx-auto mt-20' >
       <p className='pt-serif-bold text-4xl lg:text-5xl mb-12 ' style={{color:'#786262'}}>Reviews from Stars</p>
     <div className="tunnel max-w-lg md:max-w-3xl lg:max-w-full flex flex-col mx-10 overflow-hidden gap-14 lg:flex-row">
       {
        reviewsFromStars?.map((review) => (
          <div key={review.id} className= { doc ? "loop min-w-96 flex items-center gap-5" : " w-full mx-auto flex flex-col items-center gap-5" } >
            <div className="w-auto flex flex-col items-center">
              <img className="w-auto rounded-full" src={review.photo} alt={review.name} />
              <p className="pt-serif-regular w-auto mt-1 ">{review.status}</p>
            </div>
            
              <p className="text-justify w-1/2"><FaQuoteLeft style={{display:'inline'}}/> {review.review_myan} <FaQuoteRight style={{display:'inline'}}/></p>
            
            
          </div>
        ))
       }
      </div>
       </div>
   
  )
}

export default Review