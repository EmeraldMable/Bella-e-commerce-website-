import GoogleLogin from '../components/GoogleLogin';
import { useState } from 'react';
import {Link , useNavigate} from 'react-router-dom'
import { AiFillStar } from "react-icons/ai";
import { useDispatch , useSelector } from 'react-redux';
import { signInFail, signInStart, signInSuccess } from '../redux/userSlice';
import { FiEye } from "react-icons/fi"; 
import { FiEyeOff } from "react-icons/fi";




function Admission() {
  const [username, setUsername]=useState('')
  const [email,setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [icon,setIcon] = useState(false)
  const [type,setType] = useState('')
  const {loading,error} = useSelector((state) => state.user)
  
  const [formnotis, setFormnotis] = useState({})
  const navigate = useNavigate();
  const dispatch = useDispatch()
 
 const showpassword = () => {
  setIcon(!icon);
  setType()
 }
  

const handleSubmit = async (e) => {
  e.preventDefault();
  const formErrors = {}
 
  if(!username.trim()){
    formErrors.username = 'Username cannot be empty'
  }
  if(!email.trim()){
    formErrors.email = 'Enter your email.'
  }else if(!/\S+@\S+\.\S+/.test(email)){
    formErrors.email = 'Invalid email'
  }

  if(!password.trim()){
    formErrors.password = 'Need a password'
  }else if(password.length <5){
    formErrors.password = 'Password should be at least 5 characters.'
  }

 
  setFormnotis(formErrors)
  const userData = {username,email,password}
try{

  dispatch(signInStart())
  const response = await fetch ('/admission/createuser' , {
    method:"POST",
    headers:{
      "Content-type":"application/json"
    },
    body:JSON.stringify(userData)
  })
 
  const data = await response.json();
  
  if(data.success == false){
    dispatch(signInFail(data))
    return
  }
  dispatch(signInSuccess(data))
  navigate('/')
  
}catch(error){
  dispatch(signInFail(error))
}
 
 
}

  return (
    <div className=' w-full min-h-screen p-10 mx-auto bg-red-800 flex-col items-center justify-center mt-12'>
      <p className='pt-serif-bold text-white text-3xl'>Register Form</p>
      <div className='flex flex-col items-center justify-center '>
      <p className='pt-serif-regular mt-3 text-white'>Welcome To Our Community!</p>
      <p className='pt-serif-bold-italic text-white mb-8'>Be A Star.</p>
      </div>
      
        <form className='max-w-xl mb-10 min-w-52 p-10 mx-auto bg-white shadow-xl rounded-md flex flex-col items-center' 
          onSubmit={handleSubmit}>
             <p className=' w-46 text-red-500 mb-5'>{error ? error.message || 'Registeration fail. Please try again.' : ''}</p>
             <p className=' w-46 text-red-500 mb-5'>{loading ? 'In progress' : ''}</p>
          <input 
          className='min-w-38 h-7 p-4 border-b-2 border-black outline-none mb-4 rounded-md sm:w-72 md:w-72 lg:w-72' 
          id='username' 
          type="text" 
          placeholder='Username' 
          value={username}
          onChange={(e)=>setUsername(e.target.value)}
          />
            <p className=' w-46 text-red-500 mb-5'>{formnotis.username ? formnotis.username : ''}</p>

          <input 
          className='min-w-38 mb-4 h-7 p-4 border-b-2 border-black outline-none rounded-md sm:w-72 md:w-72 lg:w-72' 
          id='email' 
          type="email" 
          placeholder='Email'
          value={email}
          onChange={(e) =>setEmail(e.target.value)} />
           <p className=' w-46 text-red-500 mb-5'>{formnotis.email ? formnotis.email : ''}</p>

          <div className='flex items-center'>
      
              <input 
              className='min-w-38 h-7 p-4 border-b-2 border-black outline-none mb-4 rounded-md sm:w-72 md:w-72 lg:w-72' 
              id='password' 
              type={!icon ? 'password' : 'text'} 
              placeholder='Password'
              value={password}
              onChange={(e)=> setPassword(e.target.value)}
            
              />
              <div onClick={() =>setIcon(!icon)} >
                    {
                      icon ? <FiEye className=' -ml-10 mb-4' size={20}/>:<FiEyeOff className=' -ml-10 mb-4' size={20} />
                    }
                    
              </div>
        </div>
          
           <p className=' w-46 text-red-500 mb-5'>{formnotis.password ? formnotis.password : ''}</p>

          
           <button 
           className=  'w-32 mt-3 bg-black text-white p-2 rounded-md hover:shadow-xl hover:rounded-xl' >
            {loading ? 'Loading' : 'Sign Up'}
            </button>

          
           
            <p className=' mx-2 mt-8 bg-white text-black text-xl '>Or</p>
           <p className='pt-serif-regular mt-3 mb-3  text-lg'>Sign up with Google account.</p>

           <GoogleLogin/>
           
        

          <div className='pt-serif-regular text-lg mt-8 flex flex-col w-auto items-center justify-center gap-2 md:flex-row lg:flex-row'>
            <AiFillStar size={20} style={{color:'red'}}/>
            <p className='mb-2'>Already have an account?</p>
            <Link className='hover:underline font-semibold mb-2' to='/loginpage'>Log in here.</Link>
          </div>
        </form>
    </div>
  )
}

export default Admission