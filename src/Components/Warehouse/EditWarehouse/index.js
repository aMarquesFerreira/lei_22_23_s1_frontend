import { useRef, useState } from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';
import { warehouseUpdate, warehouseGetById } from './../../../Services/Warehouse';
import SuccessCompoment from './../../Alerts/Success';
import AlertDismissible from './../../Alerts/danger';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import WarehouseInactive from'./formInative'
const WarehouseDetails = ({ match }) => {
  const { id } = useParams();
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
  const [WarehouseId, setWarehouseId] = useState({});
  const [warehouseDesignation, setWarehouseWarehouseDesignation] = useState({});
  const [Address, setAddress] = useState({});
  const [Coordinates, setCoordinates] = useState({});
  const [Altitude, setAltitude] = useState({});
  const afterFirstRender = useRef(false);
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    if (!afterFirstRender.current) {
      afterFirstRender.current = false;
      return;
    }
  }, [visible]);
  const handleToggle = () => {
    setVisible((current) => !current);
  };
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

  useEffect(() => {
    warehouseGetById(id)
      .then((data) => {
        setWarehouseId(data.data);
        setWarehouseWarehouseDesignation(data.data.designation.warehouseDesignation);
        setAddress(data.data.address);
        setCoordinates(data.data.coordinates);
        setAltitude(data.data.altitude);
      })
  }, [id])

  const handleSubmit = () => {
    const headers = {
      'Content-Type': 'application/json'
    };
    warehouseUpdate(id, warehouse, headers)
      .then((response) => {
        console.log(warehouse, " aa");
        console.log(response.data.warehouse, "kn");
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
  var convertToStringIsActive = new String(WarehouseId.active);
  return (
    <section>
      {status.type === 'erro' ? <AlertDismissible /> : <SuccessCompoment />}
      <h1>Active</h1>
      <WarehouseInactive style={{ marginTop: '30px' }} id={id} /> 
      <p>
        The status of the current vehicle, be careful if you have true you cannot travel with it:{' '}
        <b>{convertToStringIsActive}</b>
      </p>
      <br></br>
      {WarehouseId.active == true ?
        <Button style={{ marginBottom: '30px' }} variant="info" onClick={handleToggle}>
          Edit
        </Button> : false}
      <Form autoComplete='true' onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>Identifier</Form.Label>
            <Form.Control
              name={warehouse.WarehouseIdentifier.identifier}
              placeholder={id}
              onChange={handleWarehouseIdentifierChange}
              type="text"
              disabled={visible ? true : false}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label htmlFor="warehouseDesignation">Designation</Form.Label>
            <Form.Control
              name={warehouse.Designation.warehouseDesignation}
              placeholder={warehouseDesignation}
              onChange={handleDesignationChange}
              type="text"
              disabled={visible ? true : false}
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
              placeholder={Address.street}
              disabled={visible ? true : false}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label htmlFor="doorNumber">Door Number</Form.Label>
            <Form.Control
              name={warehouse.Address.doorNumber}
              onChange={handleAddressdoorNumberChange}
              type="number"
              placeholder={Address.doorNumber}
              disabled={visible ? true : false}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label htmlFor="zipCode">Zip Code</Form.Label>
            <Form.Control
              name={warehouse.Address.zipCode}
              onChange={handleAddressZipCodeChange}
              type="text"
              placeholder={Address.zipCode}
              disabled={visible ? true : false}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label htmlFor="city">City</Form.Label>
            <Form.Control
              name={warehouse.Address.city}
              onChange={handleAddressCityChange}
              type="text"
              disabled={visible ? true : false}
              placeholder={Address.city}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label htmlFor="country">Country</Form.Label>
            <Form.Control
              onChange={handleAddressdoorCountryChange}
              name={warehouse.Address.country}
              type="text"
              placeholder={Address.country}
              disabled={visible ? true : false}
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
              placeholder={Coordinates.latitude}
              disabled={visible ? true : false}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label htmlFor="longitude">Longitude</Form.Label>
            <Form.Control
              name={warehouse.Coordinates.longitude}
              onChange={handleCoordinatesLongitudeChange}
              type="text"
              disabled={visible ? true : false}
              placeholder={Coordinates.longitude}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label htmlFor="whAltitude">Altitude</Form.Label>
            <Form.Control
              name={warehouse.Altitude.whAltitude}
              onChange={handleAltitudeChange}
              disabled={visible ? true : false}
              type="number"
              placeholder={Altitude.whAltitude}
            />
          </Form.Group>
        </Row>
        {visible ? true : <Button variant="dark" type="submit">
          Submit
        </Button>
        }
      </Form>
    </section>
  );
};

export default WarehouseDetails;
