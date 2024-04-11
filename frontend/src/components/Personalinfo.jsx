import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import { updateAddress } from "../redux/userSlice"
import Reply from "../components/Reply"

function Personalinfo({items}) {
  const {currentUser} = useSelector(state => state.user)
  const dispatch = useDispatch()
  const [info , setInfo] = useState(false)
  const [address, setAddress] = useState('')
  const [phone, setPhone] = useState('')
  const handleAddress = () => {
    setInfo(true)
  }

  const AddInfo = async (id) => {
    setInfo(false)
    try{
      const updated = await fetch(`/admission/info/${id}` , {
        method:'POST',
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          address,
          phoneno:phone
        })
      })
      const data = await updated.json()
      dispatch(updateAddress(data))
    }catch(error){
       console.log(error)
    }
  }
  return (
    <div className='w-full mt-5 mb-10 mx-3 md:mx-20 lg:mx-16 text-left leading-9 mr-32'>
       
              <p className='  pt-serif-bold text-2xl text-left mb-5'>Step 1 : Please check your info.</p>
           
        
          <p className='pt-serif-regular text-lg md:text-xl lg:text-xl mb-2'>
              Deliver to : {currentUser?.username}
          </p>
          <p className='pt-serif-regular text-lg md:text-xl lg:text-xl mb-2'>
              Email : {currentUser?.email}
          </p>
        <p className="pt-serif-regular text-lg md:text-xl lg:text-xl mb-2">
           Address: {info ?   <input type="text" autoFocus={true} value={address}
           onChange={(e)=>setAddress(e.target.value)}
           className="border-2 outline-none pl-2 border-black mb-4 rounded-lg ml-2" /> 
           : currentUser?.address }
        </p>
        <p className="pt-serif-regular text-lg md:text-xl lg:text-xl">
            Phone Number : +95 {info ?   <input type="text"  onChange={(e)=>setPhone(e.target.value)}
            value={phone} className="border-2 mb-6 outline-none pl-2 border-black rounded-lg ml-2" />
             : currentUser?.phoneno }
        </p>
       
    {
      !info ? (
        <Reply className={`button bg-red-800 text-white w-24  mt-5 rounded-lg hover:shadow-inner hover:bg-gradient-to-r hover:from-red-900 hover:to-red-600`}
        type="Edit info" 
        handleClick={handleAddress}>Edit info</Reply>
      ):(
        <div className=" flex items-center gap-5">
        <Reply 
        className={ `button bg-red-800  text-white w-24 rounded-lg hover:bg-gradient-to-r hover:from-red-900 hover:to-red-600`}
        type="Add"
        handleClick={()=>AddInfo(currentUser._id)}>Add</Reply>
        <Reply 
        className={`button bg-red-800 text-white w-24  rounded-lg hover:bg-gradient-to-r hover:from-red-900 hover:to-red-600`}
        type="Cancel"
        handleClick={()=>setInfo(false)}></Reply>
        </div>
      )
    }
       
    </div>
  )
}

export default Personalinfo