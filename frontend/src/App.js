import logo from './logo.svg';
import './App.css';
import Googlelogin from './Components/Googlelogin';
import Navbar from './Components/Navbar';
import Example from './Components/Example';

function App() {
  return (
   <>
   <Navbar/>
   <Googlelogin/>
   <div style={{marginLeft:"-1.3vh"}} className="h">
    
   
    <div className="div" style={{marginTop:"12.6vh"}}>
    <Example></Example>
    
    </div></div>
   </>
  );
}

export default App;
