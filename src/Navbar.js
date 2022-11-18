import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar(){
    return( 
    <nav className="nav">
        <Link to="/" className="site-title">
            ElectricGo
        </Link>
        <ul>
            <div className="dropdown">
            <CustomLink className="dropbtn" to="/warehouse"> Warehouse</CustomLink>
            <div className="dropdown-content">
                <a href="#">Add Warehouse</a>
                <a href="#">Update Warehouse</a>
                <a href="#">List Warehouse</a>
                <a href="#">Delete Warehouse</a>
            </div>
            </div>
            <CustomLink to="/addTruck"> addTruck</CustomLink>
            <CustomLink to="/ListTruck"> listTruck</CustomLink>
        </ul>
</nav>
)
}


function CustomLink({to, children,...props}) {
    //const path = window.location.pathname
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end: true })
    return(
        <li className={isActive ? "active" : ""}>
            <Link to={to}{...props}>
                {children}
            </Link>
        </li>
    )

}