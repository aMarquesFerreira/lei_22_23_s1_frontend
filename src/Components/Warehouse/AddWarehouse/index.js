import { useState } from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';
import './style.css';
import { warehouseSave } from './../../../Services/Warehouse';
import SuccessCompoment from './../../Alerts/Success';
import AlertDismissible  from './../../Alerts/danger';
const AddWarehouse = () => {
  const [status, setStatus] = useState({
    type: '',
    messagem: ''
  });
  const initWarehouse = {
    identifier: '',
    warehouseDesignation: '',
    street: '',
    doorNumber: '',
    zipCode: '',
    city: '',
    country: '',
    cityNumber: '',
    latitude: '',
    longitude: '',
    whAltitude: ''
  };
  const [warehouse, setWarehouse] = useState(initWarehouse);

  const handleChange = (e) => {
    setWarehouse((warehouse) => ({ ...warehouse, [e.target.name]: e.target.value }));
  };

  const handleSubmit = () => {
    const headers = {
      'Content-Type': 'application/json'
    };
    warehouseSave(warehouse, headers)
      .then((response) => {
        console.log(warehouse);
        console.log(response.data.warehouse);
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
            <Form.Label htmlFor="designation">Designation</Form.Label>
            <Form.Control
              name="designation"
              onChange={handleChange}
              type="text"
              placeholder="Enter designation"
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label htmlFor="month">Street</Form.Label>
            <Form.Control
              name="street"
              onChange={handleChange}
              type="text"
              placeholder="Enter street"
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label htmlFor="doorNumber">Door Number</Form.Label>
            <Form.Control
              name="doorNumber"
              onChange={handleChange}
              type="number"
              placeholder="Enter doorNumber"
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label htmlFor="zipCode">Zip Code</Form.Label>
            <Form.Control
              name="zipCode"
              onChange={handleChange}
              type="text"
              placeholder="Enter zip code"
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label htmlFor="city">City</Form.Label>
            <Form.Control
              name="city"
              onChange={handleChange}
              type="text"
              placeholder="Enter city"
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label htmlFor="country">Country</Form.Label>
            <Form.Control
              onChange={handleChange}
              name="country"
              type="text"
              placeholder="Enter country"
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label htmlFor="cityNumber">City Number</Form.Label>
            <Form.Control
              name="cityNumber"
              onChange={handleChange}
              type="number"
              placeholder="Enter city number"
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label htmlFor="latitude">Latitude</Form.Label>
            <Form.Control
              name="latitude"
              onChange={handleChange}
              type="text"
              placeholder="Enter latitude"
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label htmlFor="longitude">Longitude</Form.Label>
            <Form.Control
              name="longitude"
              onChange={handleChange}
              type="text"
              placeholder="Enter longitude"
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label htmlFor="whAltitude">whAltitude</Form.Label>
            <Form.Control
              name="whAltitude"
              onChange={handleChange}
              type="number"
              placeholder="Enter whAltitude"
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

export default AddWarehouse;
