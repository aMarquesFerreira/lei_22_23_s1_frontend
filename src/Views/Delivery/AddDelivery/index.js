import { Container, Row, Jumbotron } from 'react-bootstrap';
import NavbarComponent from '../../../Components/NavBar';
import FooterCompoment from '../../../Components/Footer';
import AddTruck from '../../../Components/Truck/AddTruck';
import AddDelivery from "../../../Components/Delivery/AddDelivery";

export default function NewDelivery() {
    return (
        <>
            <header>
                <NavbarComponent />
                <Jumbotron className="text-center">
                    <Container>
                        <h1 className="jumbotron-heading">Create Delivery</h1>
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
                        <AddDelivery />
                    </Row>
                </Container>
            </main>
            <FooterCompoment />
        </>
    );
}