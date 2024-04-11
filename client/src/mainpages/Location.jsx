import Linksbar from "../components/Linksbar"
import Footerbar from "../components/Footerbar"
import ScrollBtn from "../components/ScrollBtn"
import Breadcrumb from "../components/Breadcrumb"
import { useEffect } from "react"

const Location = () => {
  useEffect(() => {
    window.scrollTo(0,0)
   },[])
  return (
    <div>
      <Linksbar/>
      <Breadcrumb/>
      <iframe className="mt-5 w-full h-96 rounded-2xl"
       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3817.8181567606243!2d96.09396787461637!3d16.88488761708766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c195bbb5cc984f%3A0xf3d6ac926d1c848a!2s23%20Hlaing%20River%20Rd%2C%20Yangon!5e0!3m2!1sen!2smm!4v1712647775319!5m2!1sen!2smm" style={{border:"0"}} allowfullscreen="" loading="lazy" >

      </iframe>
      <ScrollBtn/>
      <Footerbar/>
    </div>
  )
}

export default Location