import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button, Container, Row, Col, Card } from "react-bootstrap";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import {
    onAuthStateChanged,
    setUpRecaptha,
    auth,
    logout,
} from "../Firebase"
import useAuth from '../../Hook/Auth';
import { getAuth } from "firebase/auth";


const PhoneSignUp = () => {
    const [user, setuser] = useState();
    const [error, setError] = useState("");
    const [number, setNumber] = useState("");
    const [loading, setLoading] = useState(false);
    const [flag, setFlag] = useState(false);
    const [otp, setOtp] = useState("");
    const [result, setResult] = useState("");
    const { setAuth } = useAuth();


    const navigate = useNavigate();

    const getOtp = async (e) => {
        e.preventDefault();
        console.log(number);
        setError("");
        if (number === "" || number === undefined)
            return setError("Please enter a valid phone number!");
        try {
            const response = await setUpRecaptha(number);
            setResult(response);
            setFlag(true);
        } catch (err) {
            console.log(err.message);
            setError("Authentication not performed have later!");
        }
    };

    const verifyOtp = async (e) => {
        e.preventDefault();
        setError("");
        if (otp === "" || otp === null) return;
        try {
            return await result.confirm(otp)
                .then((result) => {
                    console.log(result, "Confirmed with");
                    const token = result._tokenResponse.idToken;
                    const phone = result.user.phoneNumber;
                    const roles = "ADMIN"
                    localStorage.setItem("role", roles);
                    localStorage.setItem("token", token);
                    localStorage.setItem("phone", phone);
                    setAuth({ phone, roles, token });
                    navigate("/home");
                })
                .catch((err) => {
                    console.log(err.message);
                });
            const tokenFirebase = localStorage.getItem("token");
            /*    return await getAuth().verifyIdToken(tokenFirebase).then((result) => {
                   console.log(result, "verified");
                   setAuth({ phone, roles, token });
                   navigate("/home");
               }).then(((er) => {
                   console.log(er);
               })) */
        } catch (err) {
            console.log(err.message);
            setError("verification number is not valid");
            setOtp("");
        } finally {
            setFlag(false);
            setLoading(false);
        }
    };
    useEffect(() => {
        const authResult = onAuthStateChanged(auth, (currentPhoneNumber) => {
            console.log(currentPhoneNumber);
            setuser(currentPhoneNumber);
        });
        return () => {
            if (authResult.success) {
                logout();
            }
        };
    }, []);
    useEffect(() => { setLoading(false) })

    return (
        <>
            <Container>
                <Row className="vh-100 d-flex justify-content-center align-items-center">
                    <Col md={8} lg={6} xs={12}>
                        <Card className="shadow">
                            <Card.Body>
                                <h2 className="text-center">Phone Auth</h2>
                                {error && <Alert variant="danger">{error}</Alert>}
                                <Form onSubmit={getOtp} style={{ display: !flag ? "block" : "none" }}>
                                    <Row className="d-flex justify-content-center align-items-center">
                                        <Form.Group controlId="formBasicEmail">
                                            <PhoneInput
                                                defaultCountry="PT"
                                                value={number}
                                                onChange={setNumber}
                                                placeholder="Enter Phone Number"
                                            />
                                            <div className='align-items-center justify-content-center'>
                                                <div id="recaptcha-container"></div>
                                            </div>
                                        </Form.Group>
                                    </Row>
                                    <Row className="d-flex justify-content-center">
                                        <div className="button-centrer">
                                            <Link to="/signup" style={{
                                                marginLeft: "10px"
                                            }}>
                                                <Button variant="dark">Come back</Button>
                                            </Link>
                                            &nbsp;
                                            <Button type="submit" variant="primary" style={{
                                                padding: "10px 10px 10px 10px"
                                            }}>
                                                Send Otp
                                            </Button>
                                        </div>
                                    </Row>
                                </Form>
                                <Form onSubmit={verifyOtp} style={{ display: flag ? "block" : "none" }}>
                                    <Row className="d-flex justify-content-center align-items-center">
                                        <Form.Group className="mb-3" controlId="formBasicOtp">
                                            <Form.Control
                                                type="otp"
                                                placeholder="Enter OTP"
                                                onChange={(e) => setOtp(e.target.value)}
                                            />
                                        </Form.Group>
                                    </Row>
                                    <Row className="d-flex justify-content-center">
                                        <Link to="/">
                                            <Button variant="dark">Come back</Button>
                                        </Link>
                                        &nbsp;
                                        <Button type="submit" variant="primary">
                                            Verify
                                        </Button>
                                    </Row>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default PhoneSignUp;