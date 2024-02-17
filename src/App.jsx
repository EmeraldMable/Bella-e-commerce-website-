import {Route , Routes} from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Makeup from './components/Makeup';
import Linksbar from './components/Linksbar';
import Footer from './components/Footerbar';

function App() {
 
  return (
    <>
   
      <Navbar/>
      <Linksbar/>
       <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/product/makeup' element={<Makeup/>}></Route>
       </Routes>
       <Footer/>
   
      
    </>
  )
}

export default App
