import {Route , Routes} from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar';
import Home from './mainpages/Home';
import Makeup from './mainpages/Makeup';
import Skincare from './mainpages/Skincare'
import Register from './mainpages/Register';
import Loginpage from './mainpages/Loginpage';
import Detail from './mainpages/Detailpage'
import Collection from './mainpages/Collection'
import Cartpage from './mainpages/Cartpage'
import Specialpage from './mainpages/SpecialSet';
import BestDetail from './mainpages/BestDetail';
import Order from './mainpages/Orderpage';
import Confirm from './mainpages/Confirm'
import Men from './mainpages/Men.jsx'
import Best from './mainpages/Best.jsx'
import ProfilePage from './mainpages/ProfilePage.jsx';
import Story from './mainpages/Story.jsx'
import Contact from './mainpages/Contact.jsx'
import Location from './mainpages/Location.jsx'

function App() {
 
  return (
    <div>

      <Navbar/>
       <Routes>
       
        <Route path='/' element={<Home/>}></Route>
        <Route path='/makeup' element={<Makeup/>}></Route>
        <Route path='/skincare' element={<Skincare/>}></Route>
        <Route path='/collection' element={<Collection/>}></Route>
        <Route path='/men-session' element={<Men/>}></Route>
        <Route path='/specialsets' element={<Specialpage/>}></Route>
        <Route path='/makeup/:id' element={<Detail/>}> </Route>
        <Route path='/skincare/:id' element={<Detail/>}> </Route>
        <Route path='/men-session/:id' element={<Detail/>}> </Route>
        <Route path='/collection/:id' element={<Detail/>}> </Route>
        <Route path='/specialsets/:id' element={<Detail/>}> </Route>
        <Route path='/order' element={<Order/>}></Route>
        <Route path='/orderconfirm' element={<Confirm/>}></Route>
        <Route path='/best' element={<Best/>}></Route>
        <Route path='/best/:id' element={<BestDetail/>}></Route>
        <Route path='/cart' element={<Cartpage/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/loginpage' element={<Loginpage/>}></Route>
        <Route path='/profile' element={<ProfilePage/>}></Route>
        <Route path='/our_story' element={<Story/>}></Route>
        <Route path='/contactus' element={<Contact/>}></Route>
        <Route path='/Location' element={<Location/>}></Route>
       </Routes>
     
   
      
    </div>
  )
}

export default App
