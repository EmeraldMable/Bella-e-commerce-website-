import { useEffect, useState } from 'react';
import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa6";



function Productreview({className , id , userid , username, photo }) {
    const [review, setReview] = useState('')
    const [rating , setRating] = useState(0)
    const [getData , setGetData] = useState(null)
    const [addreview, setAddreview] = useState(null)
    const [limit, setLimit] = useState(3)
    const [viewall, setViewall] = useState(true)

    const handleView = (number) => {
        setLimit(number)
        setViewall(!viewall)
    }
 

    const handleReview = async (e) => {
        e.preventDefault();
        
        try{
            const sendReview = await fetch('/products/review' , {
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    productId:id,
                    customerId:userid,
                    username,
                    photo,
                    review:review,
                    star:rating
                })
            })
            const data = await sendReview.json()
           setAddreview(data)
           setReview('')
        }catch(error){
            console.log(error)
        }
    }
   
    useEffect(() => {
        const getReview = async () => {
            try{
                const response = await fetch(`/products/getreview/${id}`)
                const returnData = await response.json()
                setGetData(returnData)
            }catch(error){
                console.log(error)
            }
        }
        getReview()
    },[addreview])
  return (
    <div className=' w-full'>
    <p className={`w-auto pt-serif-regular pt-5 md:pt-10 lg:pt-10  mx-3 md:mx-10 lg:mx-10 mb-8  text-xl md:text-2xl lg:text-3xl`}>Rating & Reviews ({getData?.length})</p>
    <div className={`w-full flex gap-10 ml-${className}`}>
       
        <div className=' w-1/2'>
            { getData?.length == 0 && <p className='mb-8'>No Reviews yet.</p>}
           
            {getData?.length >= 4 ?(
                viewall ? (<p className='mb-5 text-right hover:underline hover:cursor-pointer hover:font-bold text-lg'
                onClick={()=>handleView(getData.length)}>View All</p>)
            : (<p className='mb-5 text-right hover:underline hover:cursor-pointer hover:font-bold text-lg'
            onClick={()=>handleView(3)}>View less</p>))
            : ''
            }
                
            {
                getData?.length >= 2 && 
                getData?.slice(0,limit).map((each,index) => (
                    <div className=' w-full flex gap-5 mb-10' key={index}>
                    <img className=' w-12 h-12 rounded-full' src={each.photo} alt="photo" />
                    <div className='w-full'>
                    <div className='md:flex md:gap-5 lg:flex lg:gap-5'>
                       <p className='text-sm md:text-md lg:text-md'>{each.username} </p>
                        <p className='text-sm md:text-md lg:text-md '>{each.createdAt.slice(0,10)}</p>
                       </div>
                        <span>{
                            [...Array(5).keys()].map((i) => (
                                each.star <= i ? <FaRegStar style={{display:'inline'}} fill='brown' key={i}/> : <FaStar style={{display:'inline'}} fill='brown' key={i}/>
                            ))
                            }</span>
                        <p className='pt-serif-regular text-lg mt-2 mb-5'>{each.review}</p>
                       
                    </div>
                </div>
                ))
            }
            {
                getData?.length <= 1 &&  
                 getData?.map((each,index) => (
                    <div className=' w-full flex gap-5 mb-10' key={index}>
                    <img className=' w-12 h-12 rounded-full' src={each.photo} alt="photo" />
                    <div className='w-full'>
                       <div className='md:flex md:gap-5 lg:flex lg:gap-5'>
                       <p className='text-sm md:text-md lg:text-md'>{each.username} </p>
                        <p className='text-sm md:text-md lg:text-md '>{each.createdAt.slice(0,10)}</p>
                       </div>
                        <span>{
                            [...Array(5).keys()].map((i) => (
                                each.star <= i ? <FaRegStar style={{display:'inline'}} fill='brown' key={i}/> : <FaStar style={{display:'inline'}} fill='brown' key={i}/>
                            ))
                            }</span>
                        <p className='pt-serif-regular text-md md:text-lg lg:text-xl mt-2 mb-5'>{each.review}</p>
                
                    </div>
                </div>))
            }
       
       
        </div>
       
        
        
    </div>
    <form className={`w-auto mx-3 md:mx-10 lg:mx-10`} >
        <p className={`pt-serif-regular text-lg md:text-xl lg:text-2xl mb-2 border-t-2 pt-5`}>Leave Your Reviews.</p>
            <div className='mb-3'>
            <label htmlFor="star" className='block text-md md:text-lg lg:text-xl'>Rate the product</label>
            {
                [...Array(5).keys()].map((i) => (
                    
                        rating <= i ? (
                            <FaRegStar style={{display:'inline', marginRight:'2px'}} fill='brown' key={i} onClick={() => setRating(i+1)}/>
                        )
                       
                        :(
                            
                            <FaStar style={{display:'inline', marginRight:'2px'}} fill='brown' key={i} onClick={() => setRating(i+1)}/>
                        )
                       
                
                ))
            }
            </div>
            
          
            <label htmlFor="review" className='text-md md:text-lg lg:text-xl'>Please leave your review here.</label>
            
            <input type='text' 
            className='p-3 w-2/3 outline-none text-sm md:text-lg lg:text-xl block mb-4 mt-5 border-2 h-28 rounded-xl'  value={review} id="review" 
            onChange={(e) => setReview(e.target.value)}/>
            <button className='bg-red-800 p-2 w-28  rounded-xl my-5 text-white'
            onClick={handleReview}>Send</button>
            
            
        </form>
    </div>
  ) 
}

export default Productreview