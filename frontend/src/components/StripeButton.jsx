import PayButton from "./PayButton"
const StripeButton = ({items}) => {
  return (
    <div
    className=" w-full ">
       <span style={{display:'block'}} className="mt-5 text-center lg:text-left lg:ml-48 font-semibold text-lg">Or</span>
    
        <PayButton items={items} className={` w-full -mx-3 md:-mx-16 border-2 p-2 mt-5 bg-red-800 rounded-md text-white hover:bg-gradient-to-r hover:from-red-900 hover:to-red-600`}
        type='Pay with Stripe'></PayButton> 

    </div>
  )
}

export default StripeButton