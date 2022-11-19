import { Container, Row } from 'react-bootstrap';
import AddTruck from '../../Components/Truck/AddTruck';

export default function Dashboard() {
    return (
        <>
            <main>
                <Container>
                    <Row>
                        <AddTruck />
                    </Row>
                </Container>
            </main>
        </>
    );
}