import { Container, Row } from 'react-bootstrap';
import AddTruck from '../../Components/Truck/AddTruck';

export default function Dashboard() {
    return (
        <>
            <header>
            </header>
            <main>
                <Container>
                    <Row>
                        <AddTruck />
                    </Row>
                </Container>
            </main>
            <footer>

            </footer>
        </>
    );
}