import { useLocation , Link } from "react-router-dom"
import { IoIosArrowForward } from "react-icons/io";


function Breadcrumb() {
    const {pathname} = useLocation();
    const names = pathname.split('/').filter((x) => x)
    console.log(names)
  
    let track = ""

    console.log(track)
  return (
    <div className="w-full mx-3 md:mx-5 lg:mx-10 text-left mt-32 text-sm md:mt-36 lg:mt-36">
    { names.length > 0  &&  <Link to="/"> Home</Link>}
        {names.map((name,index) => { 
            track+=`/${name}`;

            const last = index==names.length-1;


        return last  ? <span><IoIosArrowForward style={{display:'inline'}}/>{name}</span> :


        <span><Link key={index} to={track}><IoIosArrowForward style={{display:'inline'}}/>{name}</Link></span> })}
    </div>
  )
}

export default Breadcrumb