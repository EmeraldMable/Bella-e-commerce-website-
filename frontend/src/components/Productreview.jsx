import { useEffect, useState } from 'react';
import soe from '../assets/soe3.jpg'
import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa6";



function Productreview({className , id , userid , username , photo}) {
    const [review, setReview] = useState('')
    const [img, setImg] = useState(null)
    const [rating , setRating] = useState(0)
    const [getData , setGetData] = useState(null)
    console.log(img)

    const handleReview = async () => {
        try{
            const sendReview = await fetch('/products/review' , {
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    productId:id,
                    customerId:userid,
                    review:review,
                    star:rating,
                    img:img
                })
            })
            const data = await sendReview.json()
        
        }catch(error){

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
    },[])
  return (
    <>
    <p className={`pt-serif-regular text-3xl mt-${className} mb-${className}`}>Rating & Reviews ({getData?.length})</p>
    <div className={`w-full flex gap-10 mb-${className}`}>
       
        <div className=' w-1/2'>
            {
                getData?.length >= 1 ? (getData?.map((each,index) => (
                    <div className=' w-full flex gap-5 mb-10' key={index}>
                    <img className=' w-12 h-12 rounded-full' src={photo} alt="photo" />
                    <div className='w-auto'>
                        <p className='text-md'>{username} <span className='ml-5'>{each.createdAt}</span></p>
                        <span>{
                            [...Array(5).keys()].map((i) => (
                                each.star <= i ? <FaRegStar style={{display:'inline'}} fill='brown' key={i}/> : <FaStar style={{display:'inline'}} fill='brown' key={i}/>
                            ))
                            }</span>
                        <p className='pt-serif-regular text-lg mt-2 mb-5'>{each.review}</p>
                        <img className=' rounded-md' src={each.img} alt="product" />
                    </div>
                </div>
                ))): <p>No Reviews yet.</p>
            }
       
       
        </div>
       
        
        
    </div>
    <form action="" >
        <p className={`pt-serif-regular text-2xl mb-2 border-t-2 pt-5`}>Leave Your Reviews.</p>
            <div className='mb-3'>
            <label htmlFor="star" className='block'>Rate the product</label>
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
            
          
            <label htmlFor="review">Please leave your review here.</label>
            <input type="file" className='ml-5' onChange={(e) => setImg(e.target.files[0])} />
            <textarea className='p-2 border-2 block mt-3' autoFocus={true} value={review} id="review" cols="60" rows="10" 
            onChange={(e) => setReview(e.target.value)}> </textarea>
            <button className='bg-red-800 p-2 w-28  rounded-xl my-5 text-white'
            onClick={handleReview}>Send</button>
            
            
        </form>
    </>
  ) 
}

export default Productreview