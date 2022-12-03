import { useState } from 'react';
import { useParams } from 'react-router-dom';
import SuccessCompoment from '../../Alerts/Success';
import AlertDismissible from '../../Alerts/danger';
import { Form, Button, Col, Row } from 'react-bootstrap';
import { deliveryUpdate } from '../../../Services/Delivery';

const DeliveryDetails = () => {
  const { id } = useParams();
  const [status, setStatus] = useState({
    type: '',
    messagem: ''
  });
  const initDelivery = {
    DeliveryIdentifier: {
      identifier: id
    },
    DeliveryDate: '',
    DeliveryWeight: {
      deliveryWeight: ''
    },
    DeliveryWarehouse: '',
    TimeLoadTruck: {
      timeLoadTruck: ''
    },
    TimeUnloadTruck: {
      timeUnloadTruck: ''
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
    delivery.DeliveryWeight.deliveryWeight = e.target.value;
  }

  function handleDeliveryWarehouseChange(e) {
    delivery.DeliveryWarehouse = e.target.value;
  }
  function handleTimeLoadTruckChange(e) {
    delivery.TimeLoadTruck.timeLoadTruck = e.target.value;
  }

  function handleTimeUnloadTruckChange(e) {
    delivery.TimeUnloadTruck.timeUnloadTruck = e.target.value;
  }

  console.log(delivery);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(delivery);
    const headers = {
      'Content-Type': 'application/json'
    };
  
    deliveryUpdate(id, delivery, headers)
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
      <Form autoComplete="true" onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label htmlFor="deliveryDate">Date</Form.Label>
            <Form.Control
              name={delivery.DeliveryDate}
              onChange={handleDeliveryDateChange}
              type="date"
              placeholder={'Select date'}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label htmlFor="weight">Weight</Form.Label>
            <Form.Control
              name={delivery.DeliveryWeight.deliveryWeight}
              onChange={handleDeliveryWeightChange}
              type="number"
              placeholder={'Select weight'}
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label htmlFor="warehouse">Warehouser</Form.Label>
            <Form.Control
              name={delivery.DeliveryWarehouse}
              onChange={handleDeliveryWarehouseChange}
              type="number"
              placeholder={'Select Warehouse'}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label htmlFor="timeLoadTruck">TimeLoad</Form.Label>
            <Form.Control
              name={delivery.TimeLoadTruck.timeLoadTruck}
              onChange={handleTimeLoadTruckChange}
              type="number"
              placeholder={'Select time to load truck'}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label htmlFor="timeUnloadTruck">TimeUnload</Form.Label>
            <Form.Control
              name={delivery.TimeUnloadTruck.timeUnloadTruck}
              onChange={handleTimeUnloadTruckChange}
              type="number"
              placeholder={'Select Time to unload Truck'}
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

export default DeliveryDetails;
