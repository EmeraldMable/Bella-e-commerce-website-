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





function App() {
 
  return (
    <div>
   
      <Navbar/>
       <Routes>
       
        <Route path='/' element={<Home/>}></Route>
        <Route path='/product/makeup' element={<Makeup/>}></Route>
        <Route path='/product/skincare' element={<Skincare/>}></Route>
       
        <Route path='/product/collection' element={<Collection/>}></Route>
        <Route path='/product/makeup/detail/:id' element={<Detail/>}> </Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/loginpage' element={<Loginpage/>}></Route>
       </Routes>
     
   
      
    </div>
  )
}

export default App
