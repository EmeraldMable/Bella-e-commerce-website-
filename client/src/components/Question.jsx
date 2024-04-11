
import { useEffect, useState } from "react";
import { MdQuestionAnswer } from "react-icons/md";
import Reply from "../components/Reply";
import { current } from "@reduxjs/toolkit";


function Question({className, id ,userid, username}) {
    const [question, setQuestion] = useState(false)
    const [Quest, setQuest] = useState('')
    const [newQuest, setNewQuest] = useState(null)
    const [returnData, setReturnData] = useState(null)
    const [deleted, setDeleted] = useState(null)
    const [reply, setReply] = useState('')
    const [checkid, setCheckid] = useState(null)
    const [newreply, setNewreply] = useState(null)



   
 
    const postQuestion = async () => {
        setQuestion(false)
        try{
            const sendQuestion = await fetch('/products/question' , {
                method:'POST',
                headers:{
                    "Content-Type" : "application/json"
                },
                body:JSON.stringify({
                    productId:id,
                    customerId:userid,
                    username,
                    questions:Quest
                })
            })
            const data = await sendQuestion.json()
            setQuest('')
            setNewQuest(data)
        }catch(error){
            console.log(error)
        }
    }
   

   
    const handleQuestion = () => {
        setQuestion(true)
       
    }
    const handleReplyMode = (questId) => {
        setCheckid(questId)
        setReply('')
    }
    const sendReply = async (replyId) => {
        try{
            const postReply = await fetch('/products/replyQuestion' ,{
                method:"POST" ,
                headers:{ 
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                   
                        questionsId:replyId,
                        customerId:userid,
                        username,
                        reply
                    

                })
            })
            const response = await postReply.json()
            setNewreply(response) 
            setReply('')
            setCheckid(4)
           
        }catch(error){
            console.log(error)
        }
    }

    const DeleteQuestion = async (questionId) => {

        try{
            const deleteData = await fetch(`/products/deletequestion/${questionId}`)
            const deleted = await deleteData.json()
            setDeleted(deleted)
 
        }catch(error){
            console.log(error)
        }
    }
    const DeleteReply = async (questionid,replyId) => {
        try{
            const deletedReply = await fetch(`/products/deleteReply/${questionid}/${replyId}`)
            const response = await deletedReply.json()
            console.log(response)
        }catch(error){
            console.log(error)
        }
    }

    useEffect(() => {
        const getQuestion = async () => {
            try{
                const getData = await fetch (`/products/getquestion/${id}`)
                const response = await getData.json()
                setReturnData(response)
              
            }catch(error){
                console.log(error)
            }
        }
        getQuestion()
    },[newQuest , deleted , newreply , DeleteReply])

  
   
  return (
   
    <div className={`mt-${className} mx-3 md:mx-10 lg:mx-10 w-auto border-t-2 pt-5 md:pt-10 lg:pt-10 border-b-2` }>
        <p className='pt-serif-regular text-xl md:text-2xl lg:text-3xl'>Questions about this product ({returnData?.length})</p>
 

 

    {
        returnData?.length >= 1  ? returnData?.map((each,index) => (
        <>
           
        <div className='flex mx-5 gap-5 w-full mt-5 relative ' key={index}>
        <p className="absolute text-white top-0 left-2 text-sm"> Q </p>
        <MdQuestionAnswer size={36} fill="gray"/>
        <div className="flex flex-col">
        <p className="text-sm md:text-md lg:text-md">{each.username}
            <span className="text-sm ml-2 md:text-md lg:text-md"> {each.createdAt.slice(0,10)}</span></p>
            <p className="font-semibold text-lg md:text-xl lg:text-2xl mb-1">
              {each.questions}
              
            </p>
            {
                userid == each.customerId ?
                <div className="pt-serif-regular -ml-1">
                
                {checkid == each._id ?
               <div className="flex flex-col">
                <input type="text" autoFocus={true} 
                        className="mt-3 ml-5 border-2 border-gray-800 rounded-lg outline-none p-2" 
                        value={reply} 
                        onChange={(e)=>setReply(e.target.value)}/>
                <Reply 
                className={`bg-red-800 w-16 p-1 mt-4 rounded-xl mb-2 text-white`}
                type="Send" 
                handleClick={() => sendReply(each._id)}
                 />
        
                <Reply 
                className={`w-12 cursor-pointer hover:font-semibold mr-5`} 
                type='Cancel' handleClick={() => {handleReplyMode(each.id)}}
                />
                </div>
               :
                <div className="flex items-center">
                <Reply 
                className={`w-12 cursor-pointer hover:font-semibold mr-5`}
                type='Reply' handleClick={()=> {handleReplyMode(each._id)}}
                />
                <Reply 
                className={`w-12 cursor-pointer hover:font-semibold mr-5`}
                type='Delete' handleClick={()=> {DeleteQuestion(each._id)}}
                /> 
                </div> }
            
          
            </div>  
            :''} 
                
            
          
            
        </div>
        </div>

       {each.replies?.length >= 1 && each.replies?.map((re,index) => (
         <div className='flex mx-10 gap-5 w-auto mt-5 relative' key={index}>
         <p className="absolute text-white top-0 left-2 text-sm"> R </p>
         <MdQuestionAnswer size={36} fill="brown"/>
         <div className="flex flex-col">
         <p className="text-sm md:text-md lg:text-md">{re.username}
             <span className="text-sm ml-2 md:text-md lg:text-md"> {re.created_at?.slice(0,10)}</span></p>
             <p className="font-semibold text-lg md:text-xl lg:text-2xl mb-1">
               {re.reply}
               
             </p>
             {userid == re.customerId ? 
             <div className="pt-serif-regular -ml-1">
                
                      {checkid == re._id ?
                        <div className="flex flex-col">
                         <input type="text" autoFocus={true} 
                                 className="mt-3 ml-5 border-2 border-gray-800 rounded-lg outline-none p-2" 
                                 value={reply}
                                 onChange={(e)=>setReply(e.target.value)}/>
                         <Reply 
                         className={`bg-red-800 w-16 p-1 mt-4 rounded-xl mb-2 text-white`}
                         type="Send" 
                         handleClick={() => sendReply(re.questionsId)}
                          />
                 
                         <Reply 
                         className={`w-12 cursor-pointer hover:font-semibold mr-5`} 
                         type='Cancel' handleClick={() => {handleReplyMode(re.id)}}
                         />
                         </div>
                        :
                         <div className="flex items-center">
                         <Reply 
                         className={`w-12 cursor-pointer hover:font-semibold mr-5`}
                         type='Reply' handleClick={()=> {handleReplyMode(re._id)}}
                         />
                         <Reply 
                         className={`w-12 cursor-pointer hover:font-semibold mr-5`}
                         type='Delete' handleClick={()=> {DeleteReply(re.questionsId,re._id )}}
                         /> 
                         </div> }
                
             
               
             
           
             </div>
            :''  }
             
         </div>
         </div>
       ))} 

        </>
            
        )) :<p className="mt-3">No question is asked yet.</p>
    }
    
     
        <button className={ question ? ` hidden` : `button bg-red-800 text-white p-2 rounded-xl my-8 mx-1 hover:bg-gradient-to-r hover:from-red-900 hover:to-red-600`}
       onClick={handleQuestion} >
            Ask a question</button>

            {
                question && <div className="w-full">
                <input className="p-3 w-2/3 outline-none text-sm md:text-lg lg:text-xl block mb-4 mt-5 border-2 h-28 rounded-xl"
                 type="text" value={Quest} autoFocus={true} placeholder="Ask your question..."
                onChange={(e)=>setQuest(e.target.value)}></input>
               
                <div className="flex items-center gap-3">
                <Reply 
                className={ `button bg-red-800 p-2 w-28 text-center rounded-xl mb-10 text-white hover:bg-gradient-to-r hover:from-red-900 hover:to-red-600`} 
                type='Send' handleClick={postQuestion}
                />

                <Reply 
                className={`button bg-red-800 p-2 w-28 text-center rounded-xl mb-10 text-white hover:bg-gradient-to-r hover:from-red-900 hover:to-red-600`} 
                type='Cancel' handleClick={() => setQuestion(false)}
                />
                </div>
                
                </div>
            }
   
    </div>
   
  )
}

export default Question