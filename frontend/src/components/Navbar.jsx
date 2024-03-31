import {  useState , useRef , useEffect } from 'react'
import Logo from '../assets/logo.png';
import {NavLink} from 'react-router-dom';
import { BiSolidHome } from "react-icons/bi";
import { PiUserCircleFill } from "react-icons/pi";
import { IoIosCart } from "react-icons/io";
import { useSelector } from 'react-redux';
import Profile from '../components/Profile'
import { RxCross2 } from "react-icons/rx";
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'



function Navbar() {
  const {currentUser} = useSelector((state) => state.user);
  const [profile,setProfile] = useState(false)
  const [cart, setCart] = useState(null)
  

 const homeRef = useRef()
 const userRef = useRef()
 const cartRef = useRef()
 const logoRef = useRef()

  useGSAP(() => {
    gsap.from(homeRef.current,{
      y:-100,
      duration:.8
      
    })
    gsap.from(userRef.current,{
      y:-100,
      duration:1
    
    })
    gsap.from(cartRef.current,{
      y:-100,
      duration:1.2
      
    })
    gsap.from(logoRef.current,{
      opacity:0,
      duration:.8
      
    })
  })

  useEffect (() => {
    const carts = async () =>{
      try{
        const data = await fetch('/products/cart' , {
          method:"POST",
          headers:{
            "Content-type" : "application/json"
          },
          body:JSON.stringify({
            userId:currentUser._id
          })
        })
        const itemsIncart = await data.json()
        setCart(itemsIncart)
       
      }catch(error){
        console.log(error)
      }
    }
    carts();
},[cart])

  
  return (
    <header className='z-40 inset-0 w-auto mx-auto bg-white h-16 border-t-2 border-x-8 border-red-900 '>
      <div className=" w-full -mx-9 sm:mx-auto md:mx-auto lg:mx-auto pl-20 pr-14 h-auto flex items-center justify-between">
        <h2 className=' w-16' ref={logoRef}><img src={Logo} alt='Bella logo'/></h2>
        <div className=' flex w-auto justify-around -mx-12 gap-3'>
           <NavLink className=' w-8 sm:w-14 md:w-14 lg:w-14' to='/' ref={homeRef}><BiSolidHome className='icon'
           size={27} fill='brown' onClick={() => setActive(true)}/></NavLink>
           {currentUser 
           ? (<>
            <div className='pt-serif-bold w-8 sm:w-14 md:w-14 lg:w-14' ref={userRef} 
           >
              <PiUserCircleFill className='icon' size={29} fill='brown'
               onClick={() => setProfile(!profile)}/>
                {profile ? 
                <>
                 <RxCross2 size={30} className='absolute bg-white -bottom-20 z-50 rounded-md' onClick={() => setProfile(!profile)}/>
                 <Profile {...currentUser} />
                </>
                 : ''}
            </div>
            <NavLink className='relative w-8 sm:w-14 md:w-14 lg:w-14' to='/cart' ref={cartRef}><IoIosCart className='icon' size={30} fill='brown'/>
             <span className='absolute -top-2 w-6 h-6 bg-red-700 rounded-full text-white'>{cart?.length >= 1 ? cart.length : '0' }</span>
            </NavLink>
           </>) 
          : ( <NavLink className='pt-serif-bold mr-10 md:mr-32 ld:mr-34 w-8 sm:w-14 md:w-14 lg:w-14' to='/register'>Register/Login</NavLink>)}
           
        </div>
      </div>
    </header>
  )
}

export default Navbar