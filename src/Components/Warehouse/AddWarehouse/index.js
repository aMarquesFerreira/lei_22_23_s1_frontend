import { useState } from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';
import './style.css';
import { warehouseSave } from './../../../Services/Warehouse';
import SuccessCompoment from './../../Alerts/Success';
import AlertDismissible from './../../Alerts/danger';
const AddWarehouse = () => {
  const [status, setStatus] = useState({
    type: '',
    messagem: ''
  });
  const initWarehouse = {
    WarehouseIdentifier: {
      identifier: ''
    },
    Designation: {
      warehouseDesignation: ''
    },
    Address: {
      street: '',
      doorNumber: '',
      zipCode: '',
      city: '',
      country: ''
    },
    Coordinates: {
      latitude: '',
      longitude: ''
    },
    Altitude: {
      whAltitude: ''
    }
  };
  const [warehouse, setWarehouse] = useState(initWarehouse);

  function handleWarehouseIdentifierChange(e) {
    warehouse.WarehouseIdentifier.identifier = e.target.value;
  }

  function handleDesignationChange(e) {
    warehouse.Designation.warehouseDesignation = e.target.value;
  }
  function handleAddressChange(e) {
    warehouse.Address.street = e.target.value;
  }
  function handleAddressdoorNumberChange(e) {
    warehouse.Address.doorNumber = e.target.value;
  }
  function handleAddressZipCodeChange(e) {
    warehouse.Address.zipCode = e.target.value;
  }
  function handleAddressCityChange(e) {
    warehouse.Address.city = e.target.value;
  }
  function handleAddressdoorNumberChange(e) {
    warehouse.Address.doorNumber = e.target.value;
  }
  function handleAddressdoorCountryChange(e) {
    warehouse.Address.country = e.target.value;
  }
  function handleCoordinatesChange(e) {
    warehouse.Coordinates.latitude = e.target.value;
  }
  function handleCoordinatesLongitudeChange(e) {
    warehouse.Coordinates.longitude = e.target.value;
  }
  function handleAltitudeChange(e) {
    warehouse.Altitude.whAltitude = e.target.value;
  }

  console.log(warehouse);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(warehouse);
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
      <Form autoComplete='true' onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>Identifier</Form.Label>
            <Form.Control
              name={warehouse.WarehouseIdentifier.identifier}
              onChange={handleWarehouseIdentifierChange}
              type="text"
              placeholder="Enter identifier"
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label htmlFor="warehouseDesignation">Designation</Form.Label>
            <Form.Control
              name={warehouse.Designation.warehouseDesignation}
              onChange={handleDesignationChange}
              type="text"
              placeholder="Enter designation"
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label htmlFor="street">Street</Form.Label>
            <Form.Control
              name={warehouse.Address.street}
              onChange={handleAddressChange}
              type="text"
              placeholder="Enter street"
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label htmlFor="doorNumber">Door Number</Form.Label>
            <Form.Control
              name={warehouse.Address.doorNumber}
              onChange={handleAddressdoorNumberChange}
              type="number"
              placeholder="Enter doorNumber"
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label htmlFor="zipCode">Zip Code</Form.Label>
            <Form.Control
              name={warehouse.Address.zipCode}
              onChange={handleAddressZipCodeChange}
              type="text"
              placeholder="Enter zip code"
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label htmlFor="city">City</Form.Label>
            <Form.Control
              name={warehouse.Address.city}
              onChange={handleAddressCityChange}
              type="text"
              placeholder="Enter city"
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label htmlFor="country">Country</Form.Label>
            <Form.Control
              onChange={handleAddressdoorCountryChange}
              name={warehouse.Address.country}
              type="text"
              placeholder="Enter country"
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label htmlFor="latitude">Latitude</Form.Label>
            <Form.Control
              name={warehouse.Coordinates.latitude}
              onChange={handleCoordinatesChange}
              type="text"
              placeholder="Enter latitude"
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label htmlFor="longitude">Longitude</Form.Label>
            <Form.Control
              name={warehouse.Coordinates.longitude}
              onChange={handleCoordinatesLongitudeChange}
              type="text"
              placeholder="Enter longitude"
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label htmlFor="whAltitude">Altitude</Form.Label>
            <Form.Control
              name={warehouse.Altitude.whAltitude}
              onChange={handleAltitudeChange}
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
