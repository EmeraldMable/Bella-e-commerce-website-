import Linksbar from "../components/Linksbar"
import Footerbar from "../components/Footerbar"
import ScrollBtn from "../components/ScrollBtn"
import Breadcrumb from "../components/Breadcrumb"
import {story} from "../data/data"
import { useEffect } from "react"

const Story = () => {
  useEffect(() => {
    window.scrollTo(0,0)
   },[])
  return (
    <>
        <Linksbar/>
        <Breadcrumb/>
       
        <div className="pt-serif-bold w-full mt-5  mx-auto"
        style={{color:'#786262'}}>
            <h1 className="text-3xl md:text-4xl lg:text-4xl">Our Story</h1>
            <p className="pt-serif-regular indent-10 md:indent-12 lg:indent-16 leading-7 text-justify mx-3 mt-5 md:mx-10 lg:mx-20">{story.history}</p>

            <h3 className="mt-5 text-left mx-3 text-xl md:text-2xl lg:text-2xl md:mx-10 lg:mx-20">Our Vision</h3>
            <p className="pt-serif-regular indent-10 md:indent-12 lg:indent-16 leading-7 text-justify mx-3 mt-2 md:mx-10 lg:mx-20">{story.vision}</p>
        
            <h3 className="mt-5 text-left mx-3 text-xl md:text-2xl lg:text-2xl md:mx-10 lg:mx-20">Our Mission</h3>
            {
              story.missions.map((mission) => (
                <p className="pt-serif-regular mx-3 mt-2 md:mx-10 lg:mx-20 text-left"
                key={mission.id}>{mission.mission}</p>
              ))
            }
        </div>
        <ScrollBtn/>
        <Footerbar/>
    </>
  )
}

export default Story