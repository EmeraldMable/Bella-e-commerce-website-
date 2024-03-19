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
import Special from './mainpages/Special'
import Specialpage from './mainpages/SpecialSet';
import BestDetail from './mainpages/BestDetail';

function App() {
 
  return (
    <div>

      <Navbar/>
       <Routes>
       
        <Route path='/' element={<Home/>}></Route>
        <Route path='/makeup' element={<Makeup/>}></Route>
        <Route path='/skincare' element={<Skincare/>}></Route>
        <Route path='/collection' element={<Collection/>}></Route>
        <Route path='/specialsets' element={<Specialpage/>}></Route>
        <Route path='/makeup/detail/:id' element={<Detail/>}> </Route>
        <Route path='/skincare/detail/:id' element={<Detail/>}> </Route>
        <Route path='/collection/detail/:id' element={<Detail/>}> </Route>
        <Route path='/specialsets/detail/:id' element={<Special/>}> </Route>
        <Route path='/detail/:id' element={<BestDetail/>}></Route>
        <Route path='/cart' element={<Cartpage/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/loginpage' element={<Loginpage/>}></Route>
       </Routes>
     
   
      
    </div>
  )
}

export default App
