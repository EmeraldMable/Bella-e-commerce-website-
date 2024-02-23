import React from 'react'
import { useState } from 'react';
import {Link , useNavigate} from 'react-router-dom'
import { AiFillStar } from "react-icons/ai";




function Admission() {
  const [username, setUsername]=useState('')
  const [email,setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error,setError] = useState(false)
  const [notis, setNotis] = useState('')
  const [formnotis, setFormnotis] = useState({})
  const navigate = useNavigate();
 
 
  

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

  setLoading(true)
  const response = await fetch ('/admission/createuser' , {
    method:"POST",
    headers:{
      "Content-type":"application/json"
    },
    body:JSON.stringify(userData)
  })
 
  const data = await response.json();
  console.log(data)
  setLoading(false)
  if(data.success == false){
    setNotis(data.message)
    setLoading(false)
    setError(true)
    return
  }
  navigate('/')
  
}catch(error){
  setLoading(false)
  setError(true)
}
 
 
}

  return (
    <div className='w-full min-h-screen p-10 mx-auto bg-red-800 flex-col items-center justify-center'>
      <p className='pt-serif-bold text-white text-3xl'>Register Form</p>
      <div className='flex flex-col items-center justify-center '>
      <p className='pt-serif-regular mt-3 text-white'>Welcome To Our Community!</p>
      <p className='pt-serif-bold-italic text-white mb-8'>Be A Star.</p>
      </div>
      
        <form className='max-w-lg min-w-52 p-10 mx-auto bg-white shadow-xl rounded-md flex flex-col items-center' 
          onSubmit={handleSubmit}>
             <p className=' w-46 text-red-500 mb-5'>{error ? notis : ''}</p>
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
          className='min-w-38 h-7 p-4 border-b-2 border-black outline-none mb-4 rounded-md sm:w-72 md:w-72 lg:w-72' 
          id='email' 
          type="email" 
          placeholder='Email'
          value={email}
          onChange={(e) =>setEmail(e.target.value)} />
           <p className=' w-46 text-red-500 mb-5'>{formnotis.email ? formnotis.email : ''}</p>

          <input 
          className='min-w-38 h-7 p-4 border-b-2 border-black outline-none mb-4 rounded-md sm:w-72 md:w-72 lg:w-72' 
          id='password' 
          type="password" 
          placeholder='Password'
          value={password}
          onChange={(e)=> setPassword(e.target.value)}
          />
           <p className=' w-46 text-red-500 mb-5'>{formnotis.password ? formnotis.password : ''}</p>

          
           <button 
           className='w-20 mt-3 bg-black text-white p-2 rounded-md hover:shadow-xl hover:rounded-xl' >
            {loading ? 'Loading' : 'Sign Up'}
            </button>
        

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