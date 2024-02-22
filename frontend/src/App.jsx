import {Route , Routes} from 'react-router-dom';
import './App.css'
import Home from './mainpages/Home';
import Makeup from './mainpages/Makeup';
import Admission from './mainpages/Admission';

function App() {
 
  return (
    <div>
   
      
       <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/product/makeup' element={<Makeup/>}></Route>
        <Route path='/signinorup' element={<Admission/>}></Route>
       </Routes>
     
   
      
    </div>
  )
}

export default App
