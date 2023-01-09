import { useContext, useDebugValue } from 'react';
import AuthContext from '../../Context/user.Context';

export default function useAuth() {

    const { auth } = useContext(AuthContext);
    useDebugValue(auth, auth => auth?.user ? "Login" : "Logout");
    return useContext(AuthContext)
}