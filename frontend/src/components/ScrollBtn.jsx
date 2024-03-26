import { IoIosArrowDropupCircle } from "react-icons/io";
import { useEffect,useState } from "react";

function ScrollBtn() {
    const [top,setTop] = useState(false)
    const Nextfun = () => {
        if(window.scrollY >40) {
            setTop(true)
        }else{
            setTop(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', Nextfun)
        return () => window.removeEventListener('scroll', Nextfun)
    },[])

    const Scroll = () =>{
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    }
  return (
    <div>{top && (
        <>
        <span className="tooltip bg-red-950 text-white p-2 fixed bottom-20 right-10 "  onClick={Scroll}>Back to top</span>
        <button className="topBtn fixed bottom-5 right-16"
         onClick={Scroll}>
            <IoIosArrowDropupCircle size={46} fill="brown"/>
        </button>
        </>
        )}
       
        </div>
  )
}

export default ScrollBtn