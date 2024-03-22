import { useSelector } from "react-redux"


function Personalinfo() {
  const {currentUser} = useSelector(state => state.user)
  return (
    <div className='mt-5 mb-10 ml-48 text-left leading-9'>
        <div className="flex items-center relative">
          <p className='pt-serif-bold'>
              Deliver to : {currentUser.username}
          </p>
       
        </div>
        
        
        <p>
            No.2022, Anawar(1) street, Taung Thu Gone Insein,
            Yangon City, Yangon
        </p>
        <p>
            +95 9782871826
        </p>
        <p className="w-auto">* Change your address or phone number in your user profile.</p>
    </div>
  )
}

export default Personalinfo