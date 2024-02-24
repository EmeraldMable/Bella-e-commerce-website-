import React from 'react'
import { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom'
import { AiFillStar } from "react-icons/ai";
import {signInStart , signInSuccess, signInFail} from '../redux/userSlice.js'
import { useDispatch, useSelector } from 'react-redux';




function LogginIn() {
 
  const [email,setEmail] = useState('')
  const [password, setPassword] = useState('')
 const {loading,error} = useSelector((state) => state.user);
  const navigate = useNavigate()
  const dispatch = useDispatch()
 
 
  

const handleSubmit = async (e) => {
  e.preventDefault();
 
  const userData = {email,password}

  try{
    dispatch(signInStart())
    const response = await fetch ('/admission/user' , {
      method:"POST",
      headers:{
        "Content-type":"application/json"
      },
      body:JSON.stringify(userData)
    })
    
    const data = await response.json()
    console.log(data)
    
    if(data.success == false ){
      console.log('error')
     
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
    <div className='w-full min-h-screen p-10 mx-auto bg-red-800 flex-col items-center justify-center'>
      <p className='pt-serif-bold text-white text-3xl'>Log In Form</p>
      <div className='flex flex-col items-center justify-center '>
      <p className='pt-serif-regular mt-3 text-white'>Welcome To Our Community!</p>
      <p className='pt-serif-bold-italic text-white mb-8'>Be A Star.</p>
      </div>
      
        <form className='max-w-lg min-w-52 p-10 mx-auto bg-white shadow-xl rounded-md flex flex-col items-center' 
          onSubmit={handleSubmit}>
          <p className=' w-46 text-red-500 mb-5'>{error ? error.message || 'something is wrong' : ''}</p>
          <input 
          className='min-w-38 h-7 p-4 border-b-2 border-black outline-none mb-4 rounded-md sm:w-72 md:w-72 lg:w-72' 
          id='email' 
          type="email" 
          placeholder='Email'
          value={email}
          onChange={(e) =>setEmail(e.target.value)} />
          <input 
          className='min-w-38 h-7 p-4 border-b-2 border-black outline-none mb-4 rounded-md sm:w-72 md:w-72 lg:w-72' 
          id='password' 
          type="password" 
          placeholder='Password'
          value={password}
          onChange={(e)=> setPassword(e.target.value)}/>
          
         
           <button 
           className='w-20 mt-3 bg-black text-white p-2 rounded-md hover:shadow-xl hover:rounded-xl' >
            {loading ? 'Loading' : 'Login'}
            </button>
        

          <div className='pt-serif-regular text-lg mt-8 flex flex-col w-auto items-center justify-center gap-2 md:flex-row lg:flex-row'>
            <AiFillStar size={20} style={{color:'red'}}/>
            <p className='mb-2'>Wanna create an accout?</p>
            <Link className='hover:underline font-semibold mb-2' to='/register'>Create here.</Link>
          </div>
        </form>
    </div>
  )
}

export default LogginIn