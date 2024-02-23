import {Route , Routes} from 'react-router-dom';
import './App.css'
import Home from './mainpages/Home';
import Makeup from './mainpages/Makeup';
import Register from './mainpages/Register';
import Login from './mainpages/Loginpage';


function App() {
 
  return (
    <div>
   
      
       <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/product/makeup' element={<Makeup/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/loginpage' element={<Login/>}></Route>
       </Routes>
     
   
      
    </div>
  )
}

export default App
