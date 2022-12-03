import { useState } from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';
import './style.css';
import { deliverySave } from './../../../Services/Delivery';
import SuccessCompoment from './../../Alerts/Success';
import AlertDismissible from './../../Alerts/danger';
const AddDelivery = () => {
  const [status, setStatus] = useState({
    type: '',
    messagem: ''
  });
  const initDelivery = {
    DeliveryIdentifier: {
      Identifier: '456'
    },
    DeliveryDate: '20221005',
    DeliveryWeight: {
      DeliveryWeight: '1000'
    },
    DeliveryWarehouse: '111',
    TimeLoadTruck: {
      Time: '60'
    },
    TimeUnloadTruck: {
      Time: '60'
    }
  };
  const [delivery, setDelivery] = useState(initDelivery);

  function handleDeliveryIdentifierChange(e) {
    delivery.DeliveryIdentifier.identifier = e.target.value;
  }
  
  function handleDeliveryDateChange(e) {
    delivery.DeliveryDate = e.target.value;
  }
  function handleDeliveryWeightChange(e) {
    delivery.DeliveryWeight.DeliveryWeight = e.target.value;
  }
  function handleDeliveryWarehouseChange(e) {
    delivery.DeliveryWarehouse.TimeLoadTruck = e.target.value;
  }
  function handleTimeUnloadTruckChange(e) {
    delivery.TimeUnloadTruck.Time = e.target.value;
  }
  function handleTimeLoadTruckChange(e) {
    delivery.TimeLoadTruck.Time = e.target.value;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

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
              name={delivery.DeliveryIdentifier.identifier}
              onChange={handleDeliveryIdentifierChange}
              type="text"
              placeholder="Enter identifier"
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label htmlFor="deliveryDate">DeliveryDate</Form.Label>
            <Form.Control
              name={delivery.DeliveryDate}
              onChange={handleDeliveryDateChange}
              type="date"
              placeholder="Enter delivery date"
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label htmlFor="deliveryWeight">DeliveryWeight</Form.Label>
            <Form.Control
              name={delivery.DeliveryWeight.DeliveryWeight}
              onChange={handleDeliveryWeightChange}
              type="number"
              placeholder="Enter delivery weight"
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label htmlFor="deliveryWarehouse">DeliveryWarehouse</Form.Label>
            <Form.Control
              name={delivery.DeliveryWarehouse.TimeLoadTruck}
              onChange={handleDeliveryWarehouseChange}
              type="number"
              placeholder="Enter delivery warehouse"
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label htmlFor="timeLoadTruck">TimeLoadTruck</Form.Label>
            <Form.Control
              name={delivery.TimeUnloadTruck.Time}
              onChange={handleTimeUnloadTruckChange}
              type="number"
              placeholder="Enter time load truck"
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label htmlFor="timeUnloadTruck">TimeUnloadTruck</Form.Label>
            <Form.Control
              name={delivery.TimeLoadTruck.Time}
              onChange={handleTimeLoadTruckChange}
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
