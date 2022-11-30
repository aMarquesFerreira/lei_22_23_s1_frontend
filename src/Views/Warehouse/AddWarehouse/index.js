import { Container, Row, Jumbotron } from 'react-bootstrap';
import NavbarComponent from '../../../Components/NavBar';
import FooterCompoment from '../../../Components/Footer';
import AddWarehouse from '../../../Components/Warehouse/AddWarehouse';

export default function NewWarehouse() {
  return (
    <>
      <header>
        <NavbarComponent />
        <Jumbotron className="text-center">
          <Container>
            <h1 className="jumbotron-heading">Created Warehouse</h1>
            <p className="lead text-muted">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultricies purus velit. Ut
              et viverra mi, vel eleifend dolor. Vestibulum ipsum dui, posuere sit amet ligula a,
              finibus accumsan sapien
            </p>
          </Container>
        </Jumbotron>
      </header>
      <main>
        <Container>
          <Row>
            <AddWarehouse />
          </Row>
        </Container>
      </main>
      <FooterCompoment />
    </>
  );
}
