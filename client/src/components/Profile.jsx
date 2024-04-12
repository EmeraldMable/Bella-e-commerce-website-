import {useRef,useState, useEffect} from 'react'
import { RxCross2 } from "react-icons/rx";
import { TiTick } from "react-icons/ti";
import {getDownloadURL, getStorage , ref, uploadBytesResumable} from 'firebase/storage';
import { app } from '../firebase.js';
import { useDispatch , useSelector } from 'react-redux';
import { updateUserStart,updateUserSuccess,updateUserFailure , signoutSuccess } from '../redux/userSlice.js';
import { FaEdit } from "react-icons/fa";
import { IoIosPlay } from "react-icons/io";
import History from "../components/History"



function Profile() {
 
    const {currentUser} = useSelector(state=>state.user)
    const uploadRef = useRef()
    const dispatch = useDispatch();
    const [photoedit,setPhotoedit] = useState(false)
    const [nameedit,setNameedit] = useState(false)
   
    const [image,setImage] = useState(undefined)
    const [uploadprogress, setUploadprogress] = useState(0)
    const [error,setError] = useState(false)
    const [formdata , setFormdata] = useState({})

   
    useEffect(() => {
      if(image){
        handleUpdate(image)
      }
      
    },[image])
    
   const handleSignout = async () => {
    try{
        await fetch('/admission/user')
        dispatch(signoutSuccess())
        windwo.location.href = '/'

    }catch(error){
      console.log(error)
    }
  }


    const handleUpdate = async (image) => {
      const storage = getStorage(app)
      const fileName = new Date().getTime() + image.name
      const storageRef = ref(storage,fileName)
      const uploadTask = uploadBytesResumable(storageRef,image)
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / 
          snapshot.totalBytes) * 100 
          setUploadprogress(Math.floor(progress))
          
        },
        (error) => {
          setError(true)
        },
        ()=> {
          getDownloadURL(uploadTask.snapshot.ref)
          .then((downloadURL) => {
            setFormdata({...formdata,profile:downloadURL})
          })
        }
      )
   
    }

   const handleChange = (e) => {
    setFormdata({...formdata , [e.target.id] : e.target.value})
   }

    const handleSubmit= async (e) => {
      e.preventDefault()
      try{
        dispatch(updateUserStart())
        const updated = await fetch(`/admission/update/${currentUser._id}` , {
          method:'POST',
          headers:{
            "Content-type":'application/json'
          },
          body:JSON.stringify({
            username:formdata.updatename,
            photo:formdata.profile
          })
        })
       const data = await updated.json();
      console.log(data)
          if(data.success == false){
            dispatch(updateUserFailure(data))
            return
          }
        dispatch(updateUserSuccess(data))
        setNameedit(!nameedit)
        setPhotoedit(!photoedit)
      }catch(error){
        dispatch(updateUserFailure(error))
       
      }
    }

   
   
  return (
<>
     <div 
     className='bg-red-900 text-white w-full pt-serif-regular p-8 text-sm md:text-lg lg:text-lg  rounded-r-sm'>
 
    
        <form>
        <div >
          <p className='mb-3'>{
          error ? (
            <span className=' text-white -mt-10 w-20 mx-auto pl-2 pr-2'>Fail to upload</span>
          )  : (uploadprogress > 0 && uploadprogress < 100 ? ( 
          <span className='text-white -mt-8  mx-auto pl-2 pr-2'>Uploading...</span>) 
          : uploadprogress > 99 ? (<span className=' text-white -mt-8 w-20 mx-auto pl-2 pr-2'>Upload successfully</span>) : '' )
           }</p>

         
           <p onClick={() => setPhotoedit(!photoedit)}
            >
          {photoedit  ? (
              <>
            <input type="file" ref={uploadRef}
            hidden accept='image/.*' onChange={(e) => setImage(e.target.files[0])}/>

            <img className="rounded-lg w-10 object-fit mx-auto" 
            id='photo'
            src={ formdata.profile || currentUser?.photo} alt="user photo" 
            />
          <div className='flex mt-3 items-center justify-center gap-3'>
              
              <p className=' border-2 border-white'> <RxCross2 size={28} onClick={() => setPhotoedit(!photoedit)}/></p>
              <p className=' border-2 border-white'> <TiTick size={28}  onClick={handleSubmit}/></p>
              
          </div>
          </>
           ) : (
            <>
            <input type="file" ref={uploadRef}
            hidden accept='image/.*' onChange={(e) => setImage(e.target.files[0])}/>

            <img className="rounded-lg object-fit w-10 mx-auto" 
            id='photo'
            src={currentUser?.photo} alt="user photo" 
            />
            <div className='p-3 mt-3 flex items-center justify-center gap-5'
            onClick={() => uploadRef.current.click()}>
               <p className='  cursor-pointer'
                >Change Profile </p>
                <FaEdit/>
            </div>
            </>
             )
              }
              </p>
            
          
           
        </div>
     
        <div className=' rounded-xl h-auto w-full'>

        <div className=" p-3 mt-2 flex items-center justify-center">
          {nameedit ? (
            <>
            <div className='flex-col'>
                <input className=' placeholder:text-white placeholder:opacity-50 w-full h-7 p-4 border-b-2
              border-white outline-none mb-4 rounded-md '
              id='updatename'
              type="text"  placeholder='New username.'
                style={{background:'rgb(184,84,84)'}}
                onChange={handleChange }
                /> 
              <div className=' w-28 flex gap-6'>
                <button className="border-2 border-white p-1 rounded-md hover:shadow-xl hover:rounded-xl hover:bg-white hover:text-black"
                 onClick={() => setNameedit(!nameedit)}>Cancel</button>
                <button className="border-2 border-white p-1 rounded-md hover:shadow-xl hover:rounded-xl hover:bg-white hover:text-black" 
                onClick={handleSubmit}>Update</button>
              </div>
            </div>
         
         </> ) : (
         <>
          <p><IoIosPlay style={{display:'inline' , marginRight:'10px'}}/>Username: {currentUser?.username} </p>
          <FaEdit className='ml-5' onClick={() => setNameedit(!nameedit)}/>
          </>
        )}
          
        
        </div>
        
       
        <p className="p-2 mb-3"><IoIosPlay style={{display:'inline' , marginRight:'10px'}}/>Email : {currentUser?.email}</p>
        <button className=" bg-white mb-10 text-black p-2 rounded-xl hover:shadow-xl hover:w-24"
         onClick={handleSignout}>Log Out</button>
        </div>

        
        
    </form>

   
    </div>
     <History userId={currentUser?._id}/>
     </>
    
   
      
      
   
   
  )
}

export default Profile