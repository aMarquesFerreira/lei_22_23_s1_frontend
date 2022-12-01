import { useState } from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';
import './style.css';
import { deliverySave } from './../../../Services/Delivery';
import SuccessCompoment from './../../Alerts/Success';
import AlertDismissible  from './../../Alerts/danger';
const AddDelivery = () => {
  const [status, setStatus] = useState({
    type: '',
    messagem: ''
  });
  const initDelivery = {
    identifier: '',
    deliveryDate: '',
    deliveryWeight: '',
    deliveryWarehouse: '',
    timeLoadTruck: '',
    timeUnloadTruck: '',
  };
  const [delivery, setDelivery] = useState(initDelivery);

  const handleChange = (e) => {
    setDelivery((delivery) => ({ ...delivery, [e.target.name]: e.target.value }));
  };

  const handleSubmit = () => {
    const headers = {
      'Content-Type': 'application/json'
    };
    deliverySave(delivery, headers)
      .then((response) => {
        console.log(delivery);
        console.log(response.data.delivery);
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

  return (
    <section>
      {status.type === 'erro' ? <AlertDismissible /> : <SuccessCompoment />}
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label htmlFor="identifier">Identifier</Form.Label>
            <Form.Control
              name="identifier"
              onChange={handleChange}
              type="text"
              placeholder="Enter identifier"
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label htmlFor="deliveryDate">DeliveryDate</Form.Label>
            <Form.Control
              name="deliveryDate"
              onChange={handleChange}
              type="text"
              placeholder="Enter delivery date"
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label htmlFor="deliveryWeight">DeliveryWeight</Form.Label>
            <Form.Control
              name="deliveryWeight"
              onChange={handleChange}
              type="number"
              placeholder="Enter delivery weight"
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label htmlFor="deliveryWarehouse">DeliveryWarehouse</Form.Label>
            <Form.Control
              name="deliveryWarehouse"
              onChange={handleChange}
              type="number"
              placeholder="Enter delivery warehouse"
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label htmlFor="timeLoadTruck">TimeLoadTruck</Form.Label>
            <Form.Control
              name="timeLoadTruck"
              onChange={handleChange}
              type="number"
              placeholder="Enter time load truck"
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label htmlFor="timeUnloadTruck">TimeUnloadTruck</Form.Label>
            <Form.Control
              name="timeUnloadTruck"
              onChange={handleChange}
              type="number"
              placeholder="Enter time unload truck"
            />
          </Form.Group>
        </Row>
        <Button variant="dark" type="submit">
          Submit
        </Button>
      </Form>
    </section>
  );
};

export default AddDelivery;
