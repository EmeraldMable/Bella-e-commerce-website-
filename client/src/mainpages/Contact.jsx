import Linksbar from "../components/Linksbar"
import Footerbar from "../components/Footerbar"
import ScrollBtn from "../components/ScrollBtn"
import Breadcrumb from "../components/Breadcrumb"
import { useRef } from "react"
import { useEffect } from "react"

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0,0)
   },[])
  const form = useRef()
  const handleEmail = () => {
    
  }
  return (
    <>
        <Linksbar/>
        <Breadcrumb/>
       
        <div className="pt-serif-bold w-full mt-5 md:mx-10 lg:mx-4 lg:mt-10 flex flex-col lg:flex-row"
         style={{color:'#786262'}}>
          <div className="mx-4 md:mx-10 text-left mb-10 border-b-2 pb-10 flex-1 lg:border-b-0">
            <h1 className="text-3xl md:text-4xl lg:text-4xl mb-3" >Contact Us</h1>
            <p >If you have any questions, please do not hesitate to contact us.</p>
            <h2 className="text-xl md:text-2xl lg:text-2xl mt-5 mb-1">Head Office</h2>
            <p className="mb-1" >abcBeauty Company Limited</p>
            <p  className="mb-5">No.11,6th, Ward No.8, South Okkalapa Industrial Zone, South Okkalapa Township, Yangon</p>

            <h2 className="text-xl md:text-2xl lg:text-2xl mt-5 mb-1">Customer Service Center</h2>
            <p>Telephone : 
              <p style={{display:"block"}}>+95 (9) 400089991</p>
              <p>+95 (1) 9345533</p>
            </p>

            <h2 className="text-xl md:text-2xl lg:text-2xl mt-5 mb-1">Media and Business Center</h2>
            <p>PR Department : +95 (9)969989160</p>
          </div>
          <form className="flex flex-col mx-4 md:mx-10 lg:mx-32" ref={form} onSubmit={handleEmail}
          >
            <h2 className="text-xl md:text-2xl lg:text-2xl mb-5">Your inquiries are welcomed!</h2>

           <div className="flex flex-col text-left mb-3">
           <label>Your Name(required)</label>
            <input className="w-auto border-4 pl-2 h-12 outline-none mt-2 md:w-72 rounded-md" type="text" placeholder="Name*" />
           </div>
 
           <div className="flex flex-col text-left mb-3">
           <label>Your Email(required)</label>
            <input className="w-auto border-4 pl-2  h-12 outline-none  mt-2 md:w-72 rounded-md"  type="text" placeholder="Email*" />
           </div>

           <div className="flex flex-col text-left mb-3">
           <label>Subject</label>
            <input className="w-auto border-4 pl-2  h-12 outline-none mt-2 md:w-72 rounded-md"  type="text" placeholder="subject*" />
           </div>

           <div className="flex flex-col text-left mb-3">
           <label>Message</label>
            <input className="w-auto h-20 border-4 pl-2  outline-none mt-2 md:w-72 rounded-md"  type="text" placeholder="message*" />
           </div>


            <button type="submit" className=" mt-5 rounded-2xl shadow-lg p-3 md:w-72 text-sm md:text-md lg:text-md bg-red-900 text-white">Send</button>
          </form>
       
        </div>
        <ScrollBtn/>
        <Footerbar/>
    </>
  )
}

export default Contact