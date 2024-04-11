import React from 'react'

function Invoice() {
  return (
    <div className='mt-1 p-5 border-y-2'>
      <h3 className='pt-serif-bold mb-4'>Order Summary</h3>
     
        <div className='grid grid-cols-2'>
          <p className='text-left'>Items Total (2 items)</p>
          <span>ks </span>
        </div>
      <div className='grid grid-cols-2'>
        <p className='text-left'>Delivery Fee</p>
        <span>Ks </span>
      </div>
      <div className='grid grid-cols-2'>
        <p className='text-left'>Total Payment</p>
        <span>Ks </span>
      </div>
      </div>
     
   
  )
}

export default Invoice