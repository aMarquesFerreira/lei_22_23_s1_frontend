import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../../Hook/Auth";
import { getMe } from "../../Services/User"

const Authorization = ({ allowedRoles }) => {
    const { auth } = useAuth();
    const location = useLocation();

    console.log(allowedRoles, "Authorization roles are ");
    console.log(auth, "allowed roles are authenticated ");
    console.log(auth.roles, "authorized roles")

    function handleAuthorization() {
        const authorization = localStorage.getItem("token");
        getMe(authorization).then((response) => {
            console.log(response);

        }).catch((error) => {
            console.log(error.message);
        })
    }

    function getAllowedRoles(value) {
        if (value === undefined || value === null) return (<Navigate to="/signin" state={{ from: location }} replace />)
        if (auth.roles == value) {
            return true
        }
        return value
    }




    return (
        auth?.roles != getAllowedRoles(allowedRoles)
            ? <Outlet />
            : auth?.email
                ? <Navigate to="/unauthorized" state={{ from: location }} replace />
                : <Navigate to="/signin" state={{ from: location }} replace />
    );
}

export default Authorization;