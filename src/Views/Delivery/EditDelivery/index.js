import { Container, Row, Jumbotron } from 'react-bootstrap';
import NavbarComponent from '../../../Components/NavBar';
import FooterCompoment from '../../../Components/Footer';
import EditDelivery from "../../../Components/Delivery/EditDelivery";

export default function NewDelivery({ location }) {
    return (
        <>
            <header>
                <NavbarComponent />
                <Jumbotron className="text-center">
                    <Container>
                        <h1 className="jumbotron-heading">Edit Delivery</h1>
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
                        <EditDelivery />
                    </Row>
                </Container>
            </main>
            <FooterCompoment />
        </>
    );
}