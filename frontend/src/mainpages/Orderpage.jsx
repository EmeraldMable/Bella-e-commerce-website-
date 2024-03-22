import Linksbar from '../components/Linksbar'
import Breadcrumb from '../components/Breadcrumb'
import Footer from '../components/Footerbar'
import PersonalInfo from '../components/Personalinfo'
import Payment from '../components/Payment'
import OrderSummary from '../components/Ordersummary'

function Orderpage() {
  return (
    <>
    <Linksbar/>
    <Breadcrumb/>
    <div className='w-auto mx-auto'>
        <div className='flex mb-10 gap-10'>
            <PersonalInfo/>
            <OrderSummary/>
        </div>
        
        <Payment/>
    </div>
    <Footer/>
    </>
  )
}

export default Orderpage