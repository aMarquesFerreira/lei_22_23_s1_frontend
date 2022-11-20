import {
    Routes,
    Route,
} from "react-router-dom";
import Dashboard from "./Views/Dashboard"
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import Truck from "./Views/Truck";
import About from "./Views/About";
export default function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/signin" element={<Login />} />
                <Route exact path="/signup" element={<SignUp />} />
                <Route exact path="/truck" element={<Truck />} />
            </Routes>
        </>
    );
}