import { Form, Button, Container, Row, Col, Card, Alert } from 'react-bootstrap';
import { validarPassword, validarEmail } from "../../utils/user.validatores"
import { useState, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { AuthenticateGoogle, EmailExists, SignIn, SignUp } from '../../Services/User'
import { useEffect } from 'react';
import { auth, provider, OAuthProvider, onAuthStateChanged } from '../Firebase'
import { GoogleButton } from 'react-google-button';
import ReCAPTCHA from "react-google-recaptcha";
import { RecaptchaVerifie } from "../../Services/AuthRecaptch"
import { KEY_CLIENT } from '../../Config/config'
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import useAuth from '../../Hook/Auth';

window.recaptchaOptions = {
    useRecaptchaNet: true,
};
const grecaptchaObject = window.grecaptcha
const Login = () => {
    const { setAuth } = useAuth();

    const initUser = {
        email: '',
        password: ''
    }
    const [user, setUser] = useState(initUser);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const userRef = useRef();
    const errRef = useRef();

    const navigate = useNavigate();
    const location = useLocation();
    const from = "/home";

    const recaptchaRef = useRef(null);

    const abort = new AbortController();
    const signal = abort.signal;

    useEffect(() => { setError("") }, [])

    //auth firebase google account
    const handleClickGoogleAccount = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // console.log(credential.idToken);

                AuthenticateGoogle(credential.idToken).then((res) => {
                    console.log(res);
                    const email = res?.userDTO.email;
                    const accessToken = res?.token;
                    const roles = res?.userDTO.role;
                    if (typeof (Storage) !== undefined) {
                        localStorage.setItem('email', email);
                        localStorage.setItem('role', roles);
                        localStorage.setItem('token', accessToken);
                    } else {
                        console.log('Storage is not available');
                    }
                    setAuth({ email, roles, accessToken });
                    navigate(from, { replace: true });
                })

                // const userCredential = data.user;
                // const names = userCredential.displayName.split(" ");
                // const password = Math.random().toString(36).slice(-8);


                // if (EmailExists(userCredential.email)) {
                //     SignIn({
                //         email: userCredential.email,
                //     }).then((response) => {
                //         error && setUser(response.data);
                //         const token = response?.data?.token;
                //         const roles = response?.data?.userDTO.role;
                //         navigate(from, {replace: true});
                //     })
                // } else {
                //     SignUp({
                //         email: userCredential.email,
                //         firstName: names.length > 0 ? names[0] : '',
                //         lastName: names.length > 1 ? names[1] : '',
                //         password: password,
                //         role: '4b173f0e-5d7f-4bd6-93e7-810e328460ff'
                //     }).then(() => {
                //         navigate(from, {replace: true});
                //     })
                // }
            })
            .catch((error) => {
                OAuthProvider.credentialFromError(error);
                alert(`Message: ${error.message}`)
            });
    }

    //***** Close ******/

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const response = await SignIn(user);
            const accessToken = response?.data?.token;
            const roles = response?.data?.userDTO.role;
            const email = response?.data?.userDTO.email;
            const firstname = response?.data?.userDTO.firstname;
            if (typeof (Storage) !== undefined) {
                localStorage.setItem('name', firstname);
                localStorage.setItem('email', email);
                localStorage.setItem('role', roles);
                localStorage.setItem('token', accessToken);
            } else {
                console.log('Storage is not available');
            }
            setAuth({ email, roles, accessToken });
            error && setUser("") && setError("");
            navigate(from, { replace: true });
        } catch (err) {
            if (signal.aborted) {
                setError("Request has been aborted... ");
            }
            if (!err?.response) {
                setError('No Server Response');
            } else if (err.response?.status === 400) {
                setError('Missing Email or Password');
            } else if (err.response?.status === 401) {
                setError('Unauthorized');
            } else {
                setError('Login Failed');
            }
            errRef.current.focus();
        } finally {
            setLoading(false);
        }
        return () => {
            signal.abort();
        }
    }

    const onSubmitWithReCAPTCHA = () => {
        size = "invisible"
        const token = recaptchaRef.current.getValue();
        setError(true);
        if (token) {
            RecaptchaVerifie(token);
            recaptchaRef.current.reset();
        }
        return setLoading(false);
    }

    const validadorInput = () => {
        return (
            validarEmail(user.email) &&
            validarPassword(user.password)
        )
    }

    useEffect(() => {
        recaptchaRef.current.getValue();
    }, [recaptchaRef])

    return (
        <>
            <Container className="container mt-3">
                <Row className="vh-100 d-flex justify-content-center align-items-center">
                    <Col md={8} lg={6} xs={12}>
                        <div ref={errRef}>{error ? false : <Alert>{error}</Alert>}</div>
                        <div className="border border-3 border-dark"></div>
                        <Card className="shadow">
                            <Card.Body>
                                <h3 className='text-center '>Sign In</h3>
                                <p className="text-center mb-5">Please enter your login and password!</p>
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group
                                        className="mb-3"
                                        controlId="formBasicEmail"
                                    >
                                        <Form.Control
                                            type="email"
                                            name='email'
                                            onChange={handleChange}
                                            placeholder="Enter email" />
                                    </Form.Group>
                                    <Form.Group
                                        className="mb-3"
                                        controlId="formBasicPassword"
                                    >
                                        <Form.Control
                                            type="password"
                                            name='password'
                                            autoComplete='false'
                                            onChange={handleChange}
                                            placeholder="Enter password"
                                        />
                                    </Form.Group>
                                    <div className="d-grid">
                                        <Button
                                            variant="dark"
                                            type="submit"
                                            disabled={loading === true || !validadorInput()}
                                        >
                                            Submit
                                        </Button>
                                    </div>
                                </Form>
                                <p className='text-center mt-3'>Already Have an Account
                                    <span><Link to={"/signUp"}> SignUp</Link></span>
                                </p>
                                <div className='h-100 d-flex align-items-center justify-content-center'>
                                    <GoogleButton
                                        type="dark"
                                        onClick={handleClickGoogleAccount}
                                    />
                                </div>
                                <ReCAPTCHA
                                    style={{ marginTop: '30px' }}
                                    sitekey={KEY_CLIENT}
                                    ref={recaptchaRef}
                                    onChange={onSubmitWithReCAPTCHA}
                                    grecaptcha={grecaptchaObject}
                                />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Login