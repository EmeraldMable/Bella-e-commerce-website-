

import { useEffect,  useState} from 'react'
import { ImBin2 } from "react-icons/im";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from 'react-redux';
import { increaseItems } from '../redux/cartSlice';
import { UpdateChecked } from '../redux/cartSlice';
import { UpdateCart } from '../redux/cartSlice';
import { useNavigate } from 'react-router-dom';


function MobileCart() {
 const {list} = useSelector(state => state.cart)
  const [total, setTotal] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [cart, setCart] = useState(null)


const [select , setSelect] = useState(0)

const RemoveItems = async (id) => {
  try{
      const deleteitems = await fetch(`/products/delete` , {
        method:"POST",
        headers:{
          "Content-type" : "application/json"
        },
        body:JSON.stringify({
          id
        })
      })
      const deleted = await deleteitems.json()
      dispatch(UpdateCart(deleted))
  }catch(error){
    console.log(error)
  }
 }


 useEffect(() => {
  const selection = list.filter((li) => li.isChecked !== false)
  setSelect(selection)
  setTotal(selection.reduce((acc, currentValue) => (acc + (currentValue.price * currentValue.qty)), 0))
 },[list])

const handleOrder = () => {
  navigate('/order')
}

 
  
  return (
    <>
    <div className='pt-serif-regular mt-10 text-lg md:mx-20 md:text-right lg:text-right lg:mx-60 '>({list.length}) items in cart</div>
    <div className=' w-full mx-auto mt-5 md:max-w-4xl h-96 overflow-y-scroll shadow-gray-600 shadow-inner p-3 bg-slate-100 relative'>
        { list.length >= 1 ? (
            list?.map((item,index) => (
                <div key={index} className='w-full flex gap-1 mx-auto border-2 mb-3'>
                  
                      <input className="mx-8 accent-black" type="checkbox"  checked={item.isChecked}
                      
                      onChange={(e) =>dispatch(UpdateChecked({
                        id:item._id,
                        isChecked:e.target.checked
                      })) }/>
                    
                 
                
                  <img className=' max-w-20 h-36 md:max-w-36 lg:max-w-xl mix-blend-multiply' src={item.img} alt={item.productName} />
                  <div className='pt-serif-regular w-full p-4 flex flex-col text-left '>
                    <p className="text-lg">{item.productName}</p>
                    <p className='text-sm mt-4'>{item.price} <RxCross2 className='inline'/> {item.qty} = {item.price* item.qty} Kyats</p>
                   
                   <div className="flex items-center gap-5">
                   
                   <select className='border-2 mt-2' value={item.qty} onChange={(e) => dispatch(increaseItems({
                    id:item._id,
                    qty:e.target.value
                   }))} >
                    {[...Array(item.instock).keys()].map((val) => (
                      <option key={val} value={val+1}>{val+1}</option>
                    ))}
                   </select>
                   <p> ({item.instock} items in stock )</p>
                   <button className=' absolute right-10'
                   onClick={() => RemoveItems(item._id)}> <ImBin2  /></button>
                   </div>
                  </div>
                 </div>
            ))
         
        ): <p className='pt-serif-regular'>No items in the cart yet.</p>}
            
       
    </div>
    <div className='grid grid-cols-2 items-center p-4 bg-gray-100 my-20 h-32'>
        <div className='flex gap-3 pl-10'>
          <input className='w-auto accent-black' type='checkbox'  id='all' onChange={(e) => dispatch(UpdateChecked({
            id:e.target.id,
            isChecked:e.target.checked
          })) }/>
          <p>All Items</p>
        </div>
        <div className='flex flex-col'>
          <p className='text-sm mb-5'>Delivery : 2,390 Kyats</p>
          <p className='text-xl'>Total : {total } Kyats</p>
        </div>
        <button className='col-span-2 mt-5 bg-red-900  text-white p-3 rounded-md hover:bg-red-800' onClick={handleOrder}>
          Check Out ({select.length} items)
        </button>
        
      </div>

    </>
  )
}

export default MobileCart