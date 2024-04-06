import { useLocation , Link } from "react-router-dom"
import { IoIosArrowForward } from "react-icons/io";


function Breadcrumb() {
    const {pathname} = useLocation();
    const names = pathname.split('/').filter((x) => x)  
    let track = ""
  return (
    <div className="text-sm md:text-lg lg:text-xl mx-1 w-full md:mx-5 lg:mx-10 text-left mt-2 md:mt-3 lg:mt-3">
    { names.length > 0  &&  <Link className=" hover:opacity-40 md:mr-2 lg:mr-2 " to="/"> Home</Link>}
        {names.map((name,index) => { 
            track+=`/${name}`;

            const last = index==names.length-1;


        return last  ? <span key={index}><IoIosArrowForward  style={{display:'inline'}}/>{name}</span> :


        <span className="hover:opacity-45 md:mr-2 lg:mr-2" key={index}><Link  to={track}><IoIosArrowForward style={{display:'inline' , marginRight:'5'}}/>{name}</Link></span> })}
    </div>
  )
}

export default Breadcrumb