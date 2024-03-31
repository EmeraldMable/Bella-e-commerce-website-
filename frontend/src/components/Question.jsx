
import { useState } from "react";
import { MdQuestionAnswer } from "react-icons/md";



function Question({className, id}) {
    const [question, setQuestion] = useState(false)
    const [quest, setQuest] = useState('')
   
  return (
    <div className={`mt-${className} w-full border-t-2 pt-10 border-b-2` }>
        <p className='pt-serif-regular text-3xl'>Questions about this product (3)</p>

        <div className='flex mx-5 gap-5 w-full mt-5 relative'>
            <p className="absolute text-white top-0 left-2 text-sm"> Q</p>
            <MdQuestionAnswer size={36}/>
            <div className="flex flex-col">
                <p className="font-bold text-md md:text-lg lg:text-lg">
                    When will it be expired?
                </p>
                <span className="text-sm"> username 13 Step 2023</span>
            </div>
        </div>

        <div className='flex mx-5 gap-5 w-full mt-5 relative'>
            <p className="absolute text-white top-0 left-2 text-sm"> A </p>
            <MdQuestionAnswer size={36} fill="brown"/>
            <div className="flex flex-col">
                <p className="font-bold text-md md:text-lg lg:text-lg">
                   13 Step, 2026
                </p>
                <span className="text-sm"> Admin 13 Step 2023</span>
            </div>
        </div>
        <button className={ question ? ` hidden` : `bg-red-800 text-white p-2 rounded-xl my-8 mx-5`}
       onClick={() => setQuestion(true)}>
            Ask a question</button>

            {
                question && <div>
                    <input className="p-3 ml-5 w-1/2 block mb-4 mt-10 border-2 h-28 rounded-xl"
                 type="text" value={quest} placeholder="Ask your question..."
                onChange={(e)=>setQuest(e.target.value)}></input>
                <button className='bg-red-800 p-2 w-28 mx-5 rounded-xl mb-10 text-white'>Send</button>
                </div>
            }
    </div>
  )
}

export default Question