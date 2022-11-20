import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';


const Login = () => {
    return (
        <>
            <Container className="container mt-3">
                <Row className="vh-100 d-flex justify-content-center align-items-center">
                    <Col md={8} lg={6} xs={12}>
                        <div className="border border-3 border-dark"></div>
                        <Card className="shadow">
                            <Card.Body>
                                <h3 className='text-center '>Sign In</h3>
                                <p className="text-center mb-5">Please enter your login and password!</p>
                                <Form >
                                    <Form.Group className="mb-3" controlId="formBasicEmail">

                                        <Form.Control type="email" name='email' placeholder="Enter email" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">

                                        <Form.Control type="password" name='password' placeholder="Password" />
                                    </Form.Group>
                                    <div className="d-grid">
                                    <Button variant="dark" type="submit">
                                        Submit
                                    </Button>
                                    </div>
                                </Form>
                                <p className='text-center mt-3'>Already Have an Account <span>SignIn</span> </p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Login