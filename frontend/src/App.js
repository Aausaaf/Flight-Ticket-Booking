import logo from './logo.svg';
import './App.css';
import Googlelogin from './Components/Googlelogin';
import Navbar from './Components/Navbar';
import Example from './Components/Example';
import Homepage from './Components/Homepage';
import {Routes,Route} from 'react-router-dom'
import Booked from './Components/Booked';
import Signup from './Components/signup';
import Login from './Components/Login'
function App() {
  return (
   <>
   <Navbar/>
  
   <Routes>
    <Route path="/" element={<Homepage/>}/>
    <Route path="/booked" element={<Booked/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path="/login" element={<Login/>}/>
   </Routes>
   </>
  );
}

export default App;
