import Cartitem from "./Cartitem"

function DesktopCart({items}) {
  return (
    <div className=' w-full mx-auto ' style={{color:'#786262'}}>
       
        <table className='w-full border-2 mt-8 md:mt-10 lg:mt-10
        '>
          <thead>
            <tr className='text-lg md:text-2xl lg:text-2xl h-24'>
            <th></th>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Total</th>
            <th>Action</th>
            </tr>
          </thead>
          <tbody>
              <Cartitem items={items} />
          </tbody>
        </table>
      
      </div>
  )
}

export default DesktopCart