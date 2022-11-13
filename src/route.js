import React from "react";
import {
    Routes,
    Route,
} from "react-router-dom";
import AddTruck from "./Components/Truck/AddTruck"

export default function App() {
    return (
        <>
            <Routes>
                <Route path="" element={<AddTruck />}>
                </Route>
            </Routes>
        </>
    );
}