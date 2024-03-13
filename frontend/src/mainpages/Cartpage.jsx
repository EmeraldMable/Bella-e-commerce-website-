import React from 'react'
import Linksbar from '../components/Linksbar'
import Cartitem from '../components/Cartitem'
import Footer from '../components/Footerbar'
import Breadcrumb from '../components/Breadcrumb'



function Cartpage() {

 
  return (
    <>
    <Linksbar/>
    <Breadcrumb/>
    <div className=' mt-5 w-full mx-auto' style={{color:'#786262'}}>
      <h2 className='pt-serif-bold text-3xl  '
      >Shopping Cart</h2>
      <table className='table-auto min-w-full mt-8 md:mt-10 lg:mt-10 mx-1 md:mx-auto lg:mx-auto
      '>
        <thead>
          <tr className=' text-lg md:text-2xl lg:text-2xl'>
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
            <Cartitem />
        </tbody>
      </table>
    
    </div>
    <Footer/>
    </>
  )
}

export default Cartpage