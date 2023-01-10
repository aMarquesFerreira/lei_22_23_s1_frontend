import { useEffect, useState, useRef } from 'react';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import {
  validarEmail,
  validarPassword,
  validarFristname,
  validarLastname,
  validarConfirmarPassword
} from '../../utils/user.validatores';
import OptionsRole from './options.role';
import { roleGetAll } from '../../Services/Role';
import { SignUp } from '../../Services/User';
import { motion } from "framer-motion";
import Alert from "../Alerts/danger"
import { Link, useNavigate } from 'react-router-dom';

const CompomentSignUp = ({ location }) => {
  const initUser = {
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    role: '',
  };
  const [status, setStatus] = useState();
  const [user, setUser] = useState(initUser);
  console.log(user, "user form initialized")
  const [roles, setRoles] = useState([]);
  const [error, setError] = useState();
  const navigate = useNavigate();
  const abortController = new AbortController();
  const signal = abortController.signal


  const RolesAndStoreData = () => {
    setError(true);
    roleGetAll(signal)
      .then((data) => {
        setRoles(data);
      })
      .catch((error) => {
        if (signal.aborted) {
          console.log('The aborted the request');
        } else {
          console.error('The request failed');
        }
      })
      .finally(() => {
        setError(false);
      });

    return () => {
      abortController.abort();
    };
  };


  useEffect(() => {
    RolesAndStoreData();
  }, []);

  const handleChange = (e) => {
    setUser((user) => ({ ...user, [e.target.name]: e.target.value }));
  };


  const handleSubmit = async () => {
    try {
      const bearerToken = localStorage.getItem("token")
      const options = {
        headers: {
          "Authorization": "Bearer " + bearerToken
        },
        withCredentials: false,
      }
      setStatus(true);
      delete user.confirmPassword;
      SignUp(user, signal, options)
        .then((data) => {
          setUser(data)
          navigate('/signin')
        })
    } catch (error) {
      if (signal.aborted) {
        console.log("Request has been aborted...  " + error.message);
      } else {
        console.log("Request not aborted");
      }
    }
    finally {
      setStatus(false);
    }
    return () => {
      setTimeout(() => {
        window.location.reload();
        abortController.abort();
      }, 1000);
    }
  }
  const validadorInput = () => {
    return (
      validarEmail(user.email) &&
      validarPassword(user.password) &&
      validarFristname(user.firstName) &&
      validarLastname(user.lastName) &&
      validarConfirmarPassword(user.password , user.confirmPassword)
    )
  }

  return (
    <>
      <motion.main
        initial={{ width: "100px" }}
        animate={{ width: "100%" }}
        exit={{ x: "100%", opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Container className="container mt-3">
          <Row className="vh-100 d-flex justify-content-center align-items-center">
            <Col md={8} lg={6} xs={12}>
              <div className="border border-3 border-dark"></div>
              <Card className="shadow">
                <Card.Body>
                  <h3 className="text-center ">Sign Up</h3>
                  <p className="text-center mb-5">Please enter your login and password!</p>
                  {error && <Alert />}
                  <Form onSubmit={handleSubmit}>
                    <Row className="mb-3">
                      <Form.Group as={Col}>
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          name="email"
                          type="email"
                          onChange={handleChange}
                          placeholder="Enter email" />
                      </Form.Group>
                      <Form.Group as={Col}>
                        <Form.Label>Type of user</Form.Label>
                        <Form.Control name="role" onChange={handleChange} as="select" defaultValue="Choose...">
                          <OptionsRole roles={roles} />
                        </Form.Control>
                      </Form.Group>
                    </Row>
                    <Row className="mb-3">
                      <Form.Group as={Col}>
                        <Form.Label>First name</Form.Label>
                        <Form.Control
                          name="firstName"
                          type="text"
                          onChange={handleChange}
                          placeholder="Enter email" />
                      </Form.Group>
                      <Form.Group as={Col}>
                        <Form.Label>Last name</Form.Label>
                        <Form.Control
                          name="lastName"
                          type="text"
                          onChange={handleChange}
                          placeholder="Enter last name" />
                      </Form.Group>
                    </Row>
                    <Row className="mb-3">
                      <Form.Group as={Col}>
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          name="password"
                          type="password"
                          onChange={handleChange}
                          placeholder="Enter password" />
                      </Form.Group>
                      <Form.Group as={Col}>
                        <Form.Label>Confirm password</Form.Label>
                        <Form.Control
                          name="confirmPassword"
                          onChange={handleChange}
                          type="password"
                          placeholder="Confirm password" />
                      </Form.Group>
                    </Row>
                    <div className="d-grid">
                      <Button
                        variant="dark"
                        type="submit"
                        disabled={status === true || !validadorInput()} 
                      >
                        Submit
                      </Button>
                    </div>
                  </Form>
                  <p className="text-center mt-3">
                    Already Have an Account <span><Link to="/signin">SignIn</Link></span>{' '}
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </motion.main>
    </>
  );
};

export default CompomentSignUp;
