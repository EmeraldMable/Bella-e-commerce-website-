import { useLocation , Link } from "react-router-dom"
import { IoIosArrowForward } from "react-icons/io";


function Breadcrumb() {
    const {pathname} = useLocation();
    const names = pathname.split('/').filter((x) => x)
    console.log(names)
  
    let track = ""

    console.log(track)
  return (
    <div className="text-lg w-full mx-3 md:mx-5 lg:mx-10 text-left mt-6 md:mt-6 lg:mt-6">
    { names.length > 0  &&  <Link className=" hover:opacity-40" to="/"> Home</Link>}
        {names.map((name,index) => { 
            track+=`/${name}`;

            const last = index==names.length-1;


        return last  ? <span key={index}><IoIosArrowForward  style={{display:'inline'}}/>{name}</span> :


        <span className="hover:opacity-45"><Link key={index} to={track}><IoIosArrowForward style={{display:'inline'}}/>{name}</Link></span> })}
    </div>
  )
}

export default Breadcrumb