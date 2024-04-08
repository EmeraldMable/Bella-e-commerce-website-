import Profile from "../components/Profile"
import Linksbar from "../components/Linksbar"
import Footer from "../components/Footerbar"
import ScrollBtn from "../components/ScrollBtn"

function ProfilePage() {
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