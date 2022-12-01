import { Routes, Route } from 'react-router-dom';
import Dashboard from './Views/Dashboard';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Truck from './Views/Truck';
import About from './Views/About';
import Map from './Views/Map';
import NewTruck from './Views/Truck/AddTruck';
import EditTruck from './Views/Truck/EditTruck';
import Delivery from "./Views/Delivery";
import NewDelivery from './Views/Delivery/AddDelivery';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/signin" element={<Login />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/truck" element={<Truck />} />
        <Route exact path="/truck/new" element={<NewTruck />} />
        <Route exact path="/truck/edit/:id" element={<EditTruck />} />
        <Route exact path="/map" element={<Map />} />
        <Route exact path="/delivery" element={<Delivery />} />
        <Route exact path="/delivery/new" element={<NewDelivery />} />
      </Routes>
    </>
  );
}