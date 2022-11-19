import './App.css';
import Navbar from "./Navbar"
import Home from "./Components/Home/Home"
import Warehouse from "./Components/Warehouse/warehouse"
import AddTruck from "./Components/Truck/AddTruck"
import ListTruck from "./Components/ListTruck"
import {Route, Routes} from "react-router-dom"
import Delivery from './Components/Delivery/delivery';

function App() {
  return ( 
  <>
    <Navbar />
    <div className="container">
      <Routes>
        <Route path="/" element ={<Home />}/>
        <Route path="/warehouse" element ={<Warehouse />}/>
        <Route path="/delivery" element ={<Delivery />}/>
        <Route path="/addTruck" element={<AddTruck />}/>
        <Route path="/listTruck" element={<ListTruck />}/>
        
      </Routes>

    </div> 
  </>
)
}

export default App;