import './App.css';
import Navbar from "./Navbar"
import Home from "./Components/Home/Home"
import Warehouse from "./Components/Warehouse/warehouse"
import {Route, Routes} from "react-router-dom"

function App() {
  return ( 
  <>
    <Navbar />
    <div className="container">
      <Routes>
        <Route path="/" element ={<Home />}/>
        <Route path="/warehouse" element ={<Warehouse />}/>
        
      </Routes>

    </div> 
  </>
)
}

export default App;