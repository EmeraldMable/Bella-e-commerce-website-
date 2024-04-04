import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import { updateAddress } from "../redux/userSlice"

function Personalinfo() {
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
    <div className=' mt-5 mb-10 ml-48 text-left leading-9 mr-32'>
        
          <p className='pt-serif-regular text-xl mb-2'>
              Deliver to : {currentUser?.username}
          </p>
          <p className='pt-serif-regular text-lg mb-2'>
              Email : {currentUser?.email}
          </p>
        <p className="pt-serif-regular">
           Address: {info ?   <input type="text" autoFocus={true} value={address}
           onChange={(e)=>setAddress(e.target.value)}
           className="border-2 pl-2 border-black mb-4 rounded-lg ml-2" /> 
           : currentUser?.address }
        </p>
        <p>
            Phone Number : +95 {info ?   <input type="text"  onChange={(e)=>setPhone(e.target.value)}
            value={phone} className="border-2 pl-2 border-black rounded-lg ml-2" />
             : currentUser?.phoneno }
        </p>
       
    {
      !info ? (
        <button className="bg-red-800 text-white w-24  mt-5 rounded-lg hover:shadow-inner hover:shadow-red-300"
        onClick={handleAddress}>Edit info</button>
      ):(
        <button className="bg-red-800 text-white w-24 mt-5 rounded-lg hover:shadow-inner hover:shadow-red-300"
        onClick={()=>AddInfo(currentUser._id)}>Add</button>
      )
    }
       
    </div>
  )
}

export default Personalinfo