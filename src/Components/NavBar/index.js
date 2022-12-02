import { Navbar, Nav, NavDropdown, Form, Button, ButtonGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function NavbarComponent() {
  /*   const navigate = useNavigate()
      
      const handleLogoutClick = () => {
           //logout()
           navigate.push('/')
       }  */

  /*     const authButton = () => {
            if (currentUser === null) {
                return (
                    <ButtonGroup>
                        <Button variant="secondary" as={Link} to="/login">Login</Button>
                        <Button variant="secondary" as={Link} to="/signup">Signup</Button>
                    </ButtonGroup>
                )
    
            } else {
                return <Button variant="secondary" onClick={handleLogoutClick}>Logout</Button>
            }
        } */
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Navbar.Brand className="mx-3">ElectricGo</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/about">
            About
          </Nav.Link>
          <Nav.Link as={Link} to="/truck">
            Truck
          </Nav.Link>
          <Nav.Link as={Link} to="/planeamento">
            Travel
          </Nav.Link>
          <Nav.Link as={Link} to="/warehouse">
            Warehouse
          </Nav.Link>
          <Nav.Link as={Link} to="/delivery">
            Delivery
          </Nav.Link>
        </Nav>
        <Form inline className="mx-3">
          <ButtonGroup>
            <Button variant="dark" as={Link} to="/signin">
              Login
            </Button>
            <Button variant="warning" as={Link} to="/signup">
              Signup
            </Button>
          </ButtonGroup>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default NavbarComponent;
