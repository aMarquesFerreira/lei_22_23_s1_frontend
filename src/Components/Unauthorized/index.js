import { useNavigate } from "react-router-dom"
import { Container, Row, Button } from 'react-bootstrap';
const Unauthorized = () => {
    const navigate = useNavigate();

    const goBack = () => navigate(-1);

    return (
        <>
            <Container className="d-flex align-items-center justify-content-center vh-100">
                <div className="text-center">
                    <h1 className="display-1 fw-bold">Unauthorized</h1>
                    <p className="lead">You do not have access to the requested page.</p>
                    <div className="flexGrow">
                        <Button varient="dark" onClick={goBack}>Go Back</Button>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Unauthorized