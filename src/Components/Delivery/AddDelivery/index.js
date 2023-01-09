import { useState } from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';
import './style.css';
import { deliverySave } from './../../../Services/Delivery';
import SuccessCompoment from './../../Alerts/Success';
import AlertDismissible from './../../Alerts/danger';
import {
  validatorDeliveryIdentifier,
  validatorDeliveryDate,
  validatorDeliveryWeight,
  validatorDeliveryWarehouse,
  validatorTimeLoadTruck,
  validatorTimeUnloadTruck
} from './../../../utils/delivery.validator'
import { warehousesActive } from '../../../Services/Warehouse';
import ListWarehouseOptions from '../../Planeamento/optionsDate.planeamento';
import { useEffect } from 'react';

const AddDelivery = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({
    type: '',
    messagem: ''
  });
  const initDelivery = {
    DeliveryIdentifier: {
      Identifier: ''
    },
    DeliveryDate: '',
    DeliveryWeight: {
      DeliveryWeight: ''
    },
    DeliveryWarehouse: '',
    TimeLoadTruck: {
      Time: ''
    },
    TimeUnloadTruck: {
      Time: ''
    }
  };
  const [delivery, setDelivery] = useState(initDelivery);
  const [warehouse, setWarehouse] = useState([]);
  const WarehouseAndStoreData = () => {
    warehousesActive()
      .then((data) => {
        console.log(data);
        setWarehouse(data.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    WarehouseAndStoreData();
  }, [])

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
    delivery.DeliveryWarehouse = e.target.value;

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

  const validadorInput = () => {
    return {
      
    }
   
  };

  console.log('valid', validadorInput());

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
              maxLength={3}
              placeholder="Enter identifier"
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label htmlFor="deliveryDate">Date</Form.Label>
            <Form.Control
              name={delivery.DeliveryDate}
              onChange={handleDeliveryDateChange}
              type="date"
              placeholder="Enter delivery date"
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label htmlFor="deliveryWeight">Weight</Form.Label>
            <Form.Control
              name={delivery.DeliveryWeight.DeliveryWeight}
              onChange={handleDeliveryWeightChange}
              type="number"
              maxLength={6}
              placeholder="Enter delivery weight"
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label htmlFor="arrivalLocation">Warehouse</Form.Label>
            <Form.Control
              as="select"
              name={delivery.DeliveryWarehouse}
              onChange={handleDeliveryWarehouseChange}
              type="text"
              placeholder="Enter arrivalLocation">
              <ListWarehouseOptions warehouse={warehouse} />
            </Form.Control>
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label htmlFor="timeLoadTruck">Time load truck</Form.Label>
            <Form.Control
              name={delivery.TimeUnloadTruck.Time}
              onChange={handleTimeUnloadTruckChange}
              type="number"
              placeholder="Enter time load truck"
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label htmlFor="timeUnloadTruck">Time unload truck</Form.Label>
            <Form.Control
              name={delivery.TimeLoadTruck.Time}
              onChange={handleTimeLoadTruckChange}
              type="number"
              placeholder="Enter time unload truck"
            />
          </Form.Group>
        </Row>
        <Button variant="dark" type="submit"
          disabled={loading === true || !validadorInput()} >
          Submit
        </Button>
      </Form>
    </section>
  );
};

export default AddDelivery;
