import React from 'react'
import {Link} from 'react-router-dom'
import { AiFillStar } from "react-icons/ai";

function Admission() {
  return (
    <div className='w-full h-screen p-10 mx-auto bg-red-800'>
      <p className='pt-serif-bold text-white text-3xl'>Sign Up Form</p>
      <p className='pt-serif-regular mt-3 mb-8 text-white'>Welcome To Our Community! <span className='pt-serif-bold-italic'>Be A Star</span>.</p>
        <form className='max-w-lg p-10 mx-auto bg-white shadow-xl rounded-md '  onSubmit={}>
          <input className=' w-72 h-7 p-4 border-b-2 border-black outline-none mb-4 rounded-md' type="text" placeholder='Username' />
          <input className=' w-72 h-7 p-4 border-b-2 border-black outline-none mb-4 rounded-md' type="email" placeholder='Email' />
          <input className=' w-72 h-7 p-4 border-b-2 border-black outline-none  mb-4 rounded-md' type="password" placeholder='Password' />
          <input className=' w-72 h-7 p-4 border-b-2 border-black outline-none mb-4 rounded-md' type="password" placeholder='Confirm password...' />
          <div className=' w-auto mx-auto flex items-center justify-around'>
            <input className= ' w-52 ' type="file"  />

            <button className='w-20 bg-black text-white p-2 rounded-md hover:shadow-lg hover:rounded-xl' >Sign Up</button>
          </div>

          <div className='pt-serif-regular text-lg mt-8 flex w-auto items-center justify-center gap-2'>
            <AiFillStar size={20} style={{color:'red'}}/>
            <p>Already have an account?</p>
            <Link className='hover:underline font-semibold' to='/'>Sign in here.</Link>
          </div>
        </form>
    </div>
  )
}

export default Admission