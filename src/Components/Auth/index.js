import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../../Hook/Auth";

const Authorization = ({ allowedRoles }) => {
    const { auth } = useAuth();
    const location = useLocation();

    // console.log(allowedRoles, "Authorization roles are ");
   // console.log(auth), "allowed roles are authenticated ";
    //console.log(auth.roles, "authorized roles")
    //console.log(auth.email, "email authorized")
    if (auth && auth.roles) {
        if (auth.roles.includes("ADMIN")) {
            return (
                <Outlet />
            )
        }
    }

    if (auth && auth.roles) {
        if (auth.roles.includes("USER")) {
            return (
                <Outlet />
            )
        }
    }


    return (
        auth?.roles?.find(role => allowedRoles?.includes(role))
            ? <Outlet />
            : auth?.email
                ? <Navigate to="/unauthorized" state={{ from: location }} replace />
                : <Navigate to="/signin" state={{ from: location }} replace />
    );
}

export default Authorization;