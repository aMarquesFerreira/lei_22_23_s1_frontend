import { Container, Row, Jumbotron } from 'react-bootstrap';
import NavbarComponent from '../../Components/NavBar';
import FooterCompoment from '../../Components/Footer';
import './styles.css';
import PlaneamentoCompoment from '../../Components/Planeamento';

export default function Planeamento() {
  return (
    <>
      <header>
        <NavbarComponent />
        <Jumbotron className="text-center">
          <Container>
            <h1 className="jumbotron-heading">Create travel</h1>
          </Container>
        </Jumbotron>
      </header>
      <main>
        <Container>
          <Row>
            <PlaneamentoCompoment />
          </Row>
        </Container>
      </main>
      <FooterCompoment />
    </>
  );
}
