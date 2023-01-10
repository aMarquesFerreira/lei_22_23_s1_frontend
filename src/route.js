import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from "framer-motion";
import Dashboard from './Views/Dashboard';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Truck from './Views/Truck';
import About from './Views/About';
import NewTruck from './Views/Truck/AddTruck';
import EditTruck from './Views/Truck/EditTruck';
import Delivery from './Views/Delivery';
import NewDelivery from './Views/Delivery/AddDelivery';
import Warehouse from './Views/Warehouse';
import NewWarehouse from './Views/Warehouse/AddWarehouse';
import EditWarehouse from './Views/Warehouse/EditWarehouse';
import Planeamento from './Views/Planeamento';
import Travel from './Views/Planeamento/List';
import EditDelivery from './Components/Delivery/EditDelivery';
import RedeNetWork from './Views/RedeNetWork';
import Unauthorized from './Components/Unauthorized';
import PhoneSignUp from './Components/PhoneAuth';
import Layout from './Components/Layout';
import Authorization from './Components/Auth';
import { createBrowserHistory } from "history";
import { Navigate } from 'react-router-dom';


const history = createBrowserHistory();

const ROLES = {
  USER: 'USER',
  ADMIN: 'ADMIN',
}

export default function App() {
  const location = useLocation();
  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <Routes history={history} location={location} key={location.pathname}>

          {/* public routes children */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
          </Route>
          
          {/* public routes */}
          <Route index path='/home' element={<Dashboard />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/signin' element={<Login />} />
          <Route exact path='/signup' element={<SignUp />} />
          <Route exact path='/unauthorized' element={<Unauthorized />} />
          <Route exact path='/signin/phone' element={<PhoneSignUp />} />

          {/* private Logic */}
          <Route element={<Authorization allowedRoles={[ROLES.ADMIN]} />}>
            <Route exact path='/truck' element={<Truck />} />
            <Route exact path='/truck/new' element={<NewTruck />} />
            <Route exact path='/truck/edit/:id' element={<EditTruck />} />
            <Route exact path='/planeamento/new' element={<Planeamento />} />
            <Route exact path='/planeamento' element={<Travel />} />
            <Route exact path='/planeamento/redenetwork' element={<RedeNetWork />} />
          </Route>
    
          {/* private Warehouse */}
          <Route element={<Authorization allowedRoles={[ROLES.USER]} />}>
            <Route exact path='/delivery' element={<Delivery />}></Route>
            <Route exact path='/delivery/edit/:id' element={<EditDelivery />} />
            <Route exact path='/delivery/new' element={<NewDelivery />} />
            <Route exact path='/warehouse' element={<Warehouse />} />
            <Route exact path='/warehouse/new' element={<NewWarehouse />} />
            <Route exact path='/warehouse/edit/:id' element={<EditWarehouse />} />
          </Route>

          

          {/* error 404 */}


        </Routes>
      </AnimatePresence>
    </>
  );
}

let state = {
  location: window.location.pathname,
  user: {
    authenticated: false,
    id: null,
    name: null,
    token: null
  }
};
