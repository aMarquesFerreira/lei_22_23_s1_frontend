import { Navbar, Nav, NavDropdown, Form, Button, ButtonGroup } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../Hook/Auth';
import { auth, signOut, logout } from "../Firebase";


function NavbarComponent() {
  const navegate = useNavigate();
  const currentUser = localStorage.getItem('role')
  const { setAuth } = useAuth();
/*   const initialState = {
    email: "",
    role: "",
    token: ""
  }; */
  const handleLogoutClick = () => {
    localStorage.clear();
    if (auth) {
      signOut(auth).then(() => {
        console.log("authenticated successfully logged out");
        setAuth(null);

      }).catch((error) => {
        console.log(error.message);
      });
    }
    logout()
    navegate("/home");
  }

  const authButton = () => {
    if (currentUser === null) {
      return (
        <ButtonGroup>
          <ButtonGroup>
            <Button variant="dark" as={Link} to="/signin">
              Login
            </Button>
            <Button variant="warning" as={Link} to="/signup">
              Signup
            </Button>
          </ButtonGroup>
        </ButtonGroup>
      )

    } else {
      return <Button variant="warning" onClick={handleLogoutClick}>Logout</Button>
    }
  }

  const authRoles = () => {
    if (currentUser === "ADMIN") {
      return (
        <>
          <Nav.Link className='truck' as={Link} to="/truck">
            Truck
          </Nav.Link>
          <Nav.Link as={Link} to="/planeamento">
            Travel
          </Nav.Link>
        </>
      )
    }
    if (currentUser === "USER") {
      return (
        <>
          <Nav.Link as={Link} to="/warehouse">
            Warehouse
          </Nav.Link>
          <Nav.Link as={Link} to="/delivery">
            Delivery
          </Nav.Link>
        </>
      )

    }
  }



  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Navbar.Brand className="mx-3">ElectricGo</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/home">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/about">
            About
          </Nav.Link>
          {authRoles()}
        </Nav>
        <Form inline className="mx-3">
          {authButton()}
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default NavbarComponent;
