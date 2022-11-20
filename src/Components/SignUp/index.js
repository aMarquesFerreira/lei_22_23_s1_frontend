import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';


const SignUp = () => {
    return (
        <>
            <Container className="container mt-3">
                <Row className="vh-100 d-flex justify-content-center align-items-center">
                    <Col md={8} lg={6} xs={12}>
                        <div className="border border-3 border-dark"></div>
                        <Card className="shadow">
                            <Card.Body>
                                <h3 className='text-center '>Sign Up</h3>
                                <p className="text-center mb-5">Please enter your login and password!</p>
                                <Form >
                                    <Row className='mb-3'>
                                        <Form.Group as={Col}>
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control type="email" placeholder="Enter email" />
                                        </Form.Group>

                                        <Form.Group as={Col} controlId="formGridPassword">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control type="password" placeholder="Password" />
                                        </Form.Group>
                                    </Row>
                                    <Row className="mb-3">
                                        <Form.Group as={Col} >
                                            <Form.Label>First name</Form.Label>
                                            <Form.Control type="text" placeholder="Enter email" />
                                        </Form.Group>

                                        <Form.Group as={Col} >
                                            <Form.Label>Last name</Form.Label>
                                            <Form.Control type="text" placeholder="Password" />
                                        </Form.Group>
                                    </Row>
                                    <Row className="mb-3">
                                        <Form.Group as={Col} >
                                            <Form.Label>State</Form.Label>
                                            <Form.Control as="select" defaultValue="Choose...">
                                                <option>Choose...</option>
                                                <option>...</option>
                                            </Form.Control>
                                        </Form.Group>
                                    </Row>
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

export default SignUp