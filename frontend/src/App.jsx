import {Route , Routes} from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar';
import Home from './mainpages/Home';
import Makeup from './mainpages/Makeup';
import Register from './mainpages/Register';
import Loginpage from './mainpages/Loginpage';




function App() {
 
  return (
    <div>
   
      <Navbar/>
       <Routes>
       
        <Route path='/' element={<Home/>}></Route>
        <Route path='/product/makeup' element={<Makeup/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/loginpage' element={<Loginpage/>}></Route>
       </Routes>
     
   
      
    </div>
  )
}

export default App
