import { FcGoogle } from "react-icons/fc";
import {GoogleAuthProvider, getAuth, signInWithPopup} from 'firebase/auth'
import {app} from '../firebase.js'
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signInFail, signInSuccess } from "../redux/userSlice";


function GoogleLogin() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const loginWithGoogle = async () => {
  
    try{
      const provider = new GoogleAuthProvider()
      const Auth = getAuth(app)
      const connect = await signInWithPopup(Auth,provider)
      console.log(connect)
      const storeData = await fetch('/admission/googlelogin' , {
        method:'POST',
        headers:{
          "Content-type": "application/json"
        },
        body:JSON.stringify({
         username:connect.user.displayName,
         email:connect.user.email,
         photo:connect.user.photoURL 
        })
      })

      const data = await storeData.json()
   
      dispatch(signInSuccess(data))
      navigate('/')
    }catch(error){
      dispatch(signInFail(error))
      
    }

  }
  return (
    <div>
   <button 
        className=' w-32 mt-3 bg-black text-white p-2 rounded-md hover:shadow-xl hover:rounded-xl'
        onClick={loginWithGoogle} >
        <FcGoogle size={22} style={{display:"inline" , marginRight:"10px"}}/>Google
    </button>
        
    </div>
  )
}

export default GoogleLogin