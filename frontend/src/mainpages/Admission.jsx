import React from 'react'
import { useState } from 'react';
import {Link} from 'react-router-dom'
import { AiFillStar } from "react-icons/ai";




function Admission() {
  const [username, setUsername]=useState('')
  const [email,setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm,setConfirm] = useState('')
 
 
  

const handleSubmit = async (e) => {
  e.preventDefault();
  const userData = {username,email,password}
  console.log(userData)
  const response = await fetch ('/admission/user' , {
    method:"POST",
    headers:{
      "Content-type":"application/json"
    },
    body:JSON.stringify(userData)
  })
  console.log(response)
  const data = await response.json();
  console.log(data)
}

  return (
    <div className='w-full min-h-screen p-10 mx-auto bg-red-800 flex-col items-center justify-center'>
      <p className='pt-serif-bold text-white text-3xl'>Sign Up Form</p>
      <div className='flex flex-col items-center justify-center '>
      <p className='pt-serif-regular mt-3 text-white'>Welcome To Our Community!</p>
      <p className='pt-serif-bold-italic text-white mb-8'>Be A Star.</p>
      </div>
      
        <form className='max-w-lg min-w-52 p-10 mx-auto bg-white shadow-xl rounded-md flex flex-col items-center' 
          onSubmit={handleSubmit}>
          <input 
          className='min-w-38 h-7 p-4 border-b-2 border-black outline-none mb-4 rounded-md sm:w-72 md:w-72 lg:w-72' 
          id='username' 
          type="text" 
          placeholder='Username' 
          value={username}
          onChange={(e)=>setUsername(e.target.value)}
          />
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
          <input 
          className='min-w-38 h-7 p-4 border-b-2 border-black outline-none mb-4 rounded-md sm:w-72 md:w-72 lg:w-72' 
          id='confirm' 
          type="password" 
          placeholder='Confirm password...'
          value={confirm}
          onChange={(e)=>setConfirm(e.target.value)} />
         
           <button 
           className='w-20 mt-3 bg-black text-white p-2 rounded-md hover:shadow-xl hover:rounded-xl' >
            Sign Up
            </button>
        

          <div className='pt-serif-regular text-lg mt-8 flex flex-col w-auto items-center justify-center gap-2 md:flex-row lg:flex-row'>
            <AiFillStar size={20} style={{color:'red'}}/>
            <p className='mb-2'>Already have an account?</p>
            <Link className='hover:underline font-semibold mb-2' to='/'>Sign in here.</Link>
          </div>
        </form>
    </div>
  )
}

export default Admission