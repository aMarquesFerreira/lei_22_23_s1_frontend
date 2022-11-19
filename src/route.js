import React from "react";
import {
    Routes,
    Route,
} from "react-router-dom";
import AddTruck from "./Components/Truck/AddTruck"
import Dashboard from "./Views/Dashboard/index"
export default function App() {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<Dashboard/>}/>
            </Routes>
        </>
    );
}