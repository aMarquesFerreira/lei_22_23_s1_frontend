import { useRef, useState } from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';
import { warehouseUpdateIsActive } from './../../../Services/Warehouse';
import SuccessCompoment from './../../Alerts/Success';
import AlertDismissible from './../../Alerts/danger';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import useAuth from '../../../Hook/Auth';

const WarehouseInactive = ({ id }) => {
    const { auth ,setAuth } = useAuth();
    const initWarehousesIsActive = {
        WarehouseIdentifier: {
            Identifier: id
        },
        active: Boolean(),
    }
    const [isActive, setActive] = useState(initWarehousesIsActive);
    const [status, setStatus] = useState({
        type: '',
        messagem: ''
    });

    function handleChange(e) {
        return setActive((isActive) => ({ ...isActive, [e.target.name]: e.target.value }));
    }

    const handleSubmit = () => {
        warehouseUpdateIsActive(id, isActive)
            .then((response) => {
                if (response.data.erro) {
                    setStatus({
                        type: 'erro',
                        messagem: response.data.messagem
                    });
                } else {
                    setStatus({
                        type: 'success',
                        messagem: response.data.messagem
                    });
                }
            })
            .catch(() => {
                setStatus({
                    type: 'erro',
                    messagem: 'Err: Try later!'
                });
            });
    };
 
    useEffect(() => {
        if (JSON.stringify(auth) !== '{}') {
            const email = window.localStorage.getItem('email');
            const roles = window.localStorage.getItem('role');
            const token = window.localStorage.getItem('token');
            if(roles !== null) return setAuth({ email, roles, token });
        }
    }, []);

    return (
        <section>
            <Form onSubmit={handleSubmit}>
                <Row>
                    <Form.Group as={Col}>
                        <Form.Label htmlFor="active">Active</Form.Label>
                        <Form.Control
                            as="select"
                            name="active"
                            onChange={handleChange}
                            aria-label="Default select example">
                            <option>Open this select menu</option>
                            <option defaultValue value="false">
                                False
                            </option>
                            <option value="true">True</option>
                        </Form.Control>
                    </Form.Group>
                </Row>
                <Button variant="dark" type="submit">
                    Submit
                </Button>
            </Form>
        </section>
    );
};

export default WarehouseInactive;