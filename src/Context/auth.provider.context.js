import { createContext, useEffect, useState } from "react";
import { AlwaysDepth } from "three";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [auth, setAuth] = useState({});

    console.log(JSON.stringify(auth) + " Auth provider")
    useEffect(() => {
        if (JSON.stringify(auth) == "{}") {
            const token = localStorage.getItem("token");
            const roles = localStorage.getItem("role");
            const email = localStorage.getItem("email");
            setAuth({ email, token, roles })
        } else {
            console.log("User is authenticated")
        }
    }, [])

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;