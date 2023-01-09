import { useContext } from "react";

import AuthContext from "../../Context/auth.provider.context";

const useAuth = () => {
    return useContext(AuthContext);
}
export default useAuth;

/* 
export const useAuthDispatch = () => {
    const context = useAuth();
    return context.dispatch;
}

export const useAuthState = () => {
    const context = useAuth();
    return context.state;
}
export const  setAuth = () => {
    const context = useContext(AuthContext);
    context.dispatch({
        type: "SET_AUTH",
        payload: {
            isAuthenticated: true,
            token: "",
            roles: "",
            firstName: "",
            email: "",
        }
    });
    return context.dispatch;

}

export const clearAuth = () => {
    const context = useAuth();
    context.dispatch({
        type: "SET_AUTH",
        payload: {
            isAuthenticated: false,
            roles: null,
            token: null
        }
    });
    return context.dispatch;
}
 */