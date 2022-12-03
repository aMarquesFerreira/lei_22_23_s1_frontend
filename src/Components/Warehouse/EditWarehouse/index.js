import { useState, useEffect, useLayoutEffect } from 'react';
import { useParams } from 'react-router-dom';
import SuccessCompoment from '../../Alerts/Success';
import AlertDismissible from '../../Alerts/danger';
import { Form, Button, Col, Row } from 'react-bootstrap';
import { warehouseGetById, warehouseUpdate } from '../../../Services/Warehouse';

const WarehouseDetails = () => {
  const { id } = useParams();
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
  //const [warehouse, setWarehouse] = useState({ initWarehouse });
  const [warehouse, setWarehouse] = useState(initWarehouse);
  
  
  
  useLayoutEffect(() => {
    warehouseGetById(id)
      .then((data) => setWarehouse(data))
      .catch((err) => console.log(err));
    return () => {
      window.scrollTo(0, 0);
    };
  }, [id]);
  const [success, setSuccess] = useState(false);
  const [status, setStatus] = useState({
    type: '',
    messagem: ''
  });

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



  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(warehouse);
    const headers = {
      'Content-Type': 'application/json'
    };
    
    warehouseUpdate(warehouse.WarehouseIdentifier.identifier, warehouse, headers)
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

 /*const handleSubmit = (e) => {
    e.preventDefault();
    const headers = {
      'Content-Type': 'application/json'
    };
    const formData = new FormData();
    formData.append('enroll', truck.enroll);
    formData.append('year', truck.year);
    formData.append('month', truck.month);
    formData.append('tare', truck.tare);
    formData.append('batteryCapacity', truck.batteryCapacity);
    formData.append('totalBatterycapacity', truck.totalBatterycapacity);
    formData.append('AutonomyWithMaximumLoad', truck.AutonomyWithMaximumLoad);
    formData.append('batteryChargingTime', truck.batteryChargingTime);
      
    console.log(truck.enroll + truck.AutonomyWithMaximumLoad);
    setSuccess(true);
    truckUpdate(id,  formData, headers
    )
      .then((response) => {
        console.log(truck);
        console.log(response.data.truck);
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
    setSuccess(false);
    window.scrollTo(0, 0);
  };*/

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
              placeholder={warehouse.WarehouseIdentifier.identifier}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label htmlFor="warehouseDesignation">Designation</Form.Label>
            <Form.Control
              name={warehouse.Designation.warehouseDesignation}
              onChange={handleDesignationChange}
              type="text"
              placeholder={warehouse.Designation.warehouseDesignation}
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
              placeholder={warehouse.Address.street}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label htmlFor="doorNumber">Door Number</Form.Label>
            <Form.Control
              name={warehouse.Address.doorNumber}
              onChange={handleAddressdoorNumberChange}
              type="number"
              placeholder={warehouse.Address.doorNumber}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label htmlFor="zipCode">Zip Code</Form.Label>
            <Form.Control
              name={warehouse.Address.zipCode}
              onChange={handleAddressZipCodeChange}
              type="text"
              placeholder={warehouse.Address.zipCode}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label htmlFor="city">City</Form.Label>
            <Form.Control
              name={warehouse.Address.city}
              onChange={handleAddressCityChange}
              type="text"
              placeholder={warehouse.Address.city}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label htmlFor="country">Country</Form.Label>
            <Form.Control
              onChange={handleAddressdoorCountryChange}
              name={warehouse.Address.country}
              type="text"
              placeholder={warehouse.Address.country}
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
              placeholder={warehouse.Coordinates.latitude}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label htmlFor="longitude">Longitude</Form.Label>
            <Form.Control
              name={warehouse.Coordinates.longitude}
              onChange={handleCoordinatesLongitudeChange}
              type="text"
              placeholder={warehouse.Coordinates.longitude}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label htmlFor="whAltitude">Altitude</Form.Label>
            <Form.Control
              name={warehouse.Altitude.whAltitude}
              onChange={handleAltitudeChange}
              type="number"
              placeholder={warehouse.Altitude.whAltitude}
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

export default WarehouseDetails;
