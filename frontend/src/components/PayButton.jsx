
import { useSelector } from "react-redux"


function PayButton({items, className , type}) {
    const {currentUser} = useSelector(state => state.user)
  
    const handleOrder = async () => {
        try{
          const clearOrder = await fetch('/products/stripe/create-checkout-session' , {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                items,
                userId: currentUser._id
            })
          })
        const data = await clearOrder.json()
        window.location.href = data.url
        }catch(error){
          console.log(error)
        }
      }
  return (
    <button className={className} onClick={handleOrder}>{type}</button>
  )
}

export default PayButton