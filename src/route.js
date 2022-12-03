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
import Warehouse from "./Views/Warehouse";
import NewWarehouse from './Views/Warehouse/AddWarehouse';
import EditWarehouse from './Views/Warehouse/EditWarehouse';
import Planeamento from './Views/Planeamento';
import Travel from './Views/Planeamento/List'
import EditDelivery from "./Components/Delivery/EditDelivery";
import RedeNetWork from './Views/RedeNetWork';

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
        <Route exact path="/warehouse" element={<Warehouse />} />
        <Route exact path="/warehouse/new" element={<NewWarehouse />} />
        <Route exact path="/warehouse/edit/:id" element={<EditWarehouse />} />
        <Route exact path="/planeamento/new" element={<Planeamento />} />
        <Route exact path="/planeamento" element={<Travel />} />
        <Route exact path="/delivery/edit/:id" element={<EditDelivery />} />
        <Route exact path="/planeamento/redenetwork" element={<RedeNetWork />} />
      </Routes>
    </>
  );
}