import {useRef,useState} from 'react'
import { FaEdit } from "react-icons/fa";



function Profile({...currentUser}) {
    const uploadRef = useRef()
    const [edit,setEdit] = useState(false)
    const [updatename,setUpdatename] = useState('')
   
    const handleUpdate =(e) => {
      e.preventDefault();
      const updateData = async () => {
        const updatefile = {updatename,}
        try{

        }catch(error){

        }
      }
    }
  return (
 
    <div className='pt-serif-regular mx-auto p-8 text-white text-lg w-1/2 h-screen fixed right-0 inset-y-20 flex flex-col transition-transform rounded-r-sm'
    style={{translateX:50 ,background:'rgb(184,84,84)'}}
   >
      <form onSubmit={handleUpdate} >
          <div  className="w-50 h-20  ">
            <input type="file" ref={uploadRef}
            hidden />
             <img className="rounded-full object-cover mx-auto" 
             id='photo'
             src={currentUser.photo}alt="user photo" 
             onClick={() => uploadRef.current.click()}/>
          </div>
       
          <div className='bg-red-900 -mt-5 p-3 rounded-xl h-auto w-full'>

          <div className=" p-3 mt-8 flex items-center justify-center">
            {edit ? (
              <>
              <div className='flex-col'>
                  <input className=' placeholder:text-white placeholder:opacity-50 w-full h-7 p-4 border-b-2
                border-white outline-none mb-4 rounded-md '
                type="text" value={updatename} placeholder='New username.'
                  style={{background:'rgb(184,84,84)'}}
                  onChange={(e)=>setUpdatename(e.target.value)}
                  /> 
                <div className=' w-28 flex gap-6'>
                  <button className="border-2 border-white p-1 rounded-md hover:shadow-xl hover:rounded-xl hover:bg-white hover:text-black"
                   onClick={() => setEdit(!edit)}>Cancel</button>
                  <button className="border-2 border-white p-1 rounded-md hover:shadow-xl hover:rounded-xl hover:bg-white hover:text-black" onClick={() => setEdit(!edit)}>Change</button>
                </div>
              </div>
           
           </> ) : (
            <>
            <p>Username: {currentUser.username} </p>
            <FaEdit className='ml-5' onClick={() => setEdit(!edit)}/>
            </>
          )}
            
          
          </div>
          
         
          <p className="p-2 mb-3">Email : {currentUser.email}</p>
          <button className=" bg-white mb-10 text-black p-2 rounded-xl hover:shadow-xl hover:w-24
           ">Log Out</button>
          </div>

          <div className="mt-10">
              <p className="pt-serif-regular-italic text-xl">WishList</p>
          </div>
          
      </form>
      
    </div>
   
  )
}

export default Profile