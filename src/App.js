
import './App.css';
import Header from "./Components/Header";
import Events from './Components/Events';
import Symbol from './Components/Symbol';
import Organizers from './Components/Organizers';
import Stadium from './Components/Stadium';
import Reach from './Components/Reach';
import Footer from './Components/Footer';
import Devices from './Components/Devices';

function App() {
  return (
    <div className="App">
     
  <Header/> 
  <Events/>
  <Symbol/>
  <Organizers/>
  <Stadium/>
 <Devices/>
  {/* <Reach/> */}
  {/* <Footer/> */}
   
    </div>
  );
}

export default App;
