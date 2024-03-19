import { ImBin2 } from "react-icons/im";

function MobileCart({items}) {
    console.log(items)
  return (
    <div className='w-full mx-auto '>
        { items ? (
            items?.map((item,index) => (
                <div key={index} className='w-full flex gap-1 mx-auto border-2 mb-3'>
                  <img className='w-28' src={item.img} alt={item.productName} />
                  <div className='pt-serif-regular w-full p-4 flex flex-col text-left '>
                    <p>{item.productName}</p>
                    <p className='text-sm mt-4'>{item.price} Kyats</p>
                   <div className="flex items-center justify-between">
                   <p>Qty {item.qty}</p>
                    <ImBin2/>
                   </div>
                  </div>
                 </div>
            ))
         
        ): 'No items in the cart yet.'}
            
       
    </div>
    
  )
}

export default MobileCart