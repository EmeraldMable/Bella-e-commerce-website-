import Profile from "../components/Profile"
import Linksbar from "../components/Linksbar"
import Footer from "../components/Footerbar"
import ScrollBtn from "../components/ScrollBtn"
import { useEffect } from "react"

function ProfilePage() {
  useEffect(() => {
    window.scrollTo(0,0)
   },[])
  return (
    <div>
      <Linksbar/>
        <Profile/>
        
      <ScrollBtn/>
      <Footer/>
    </div>
  )
}

export default ProfilePage