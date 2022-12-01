import { useEffect, useParams } from 'react-router-dom';
import { Form, Button, Col, Row } from 'react-bootstrap';
import './style.css';
import { useState } from 'react';

const PlaneamentoCompoment = ({ idTruck }) => {
  const { idTRuck } = useParams();
  const [truck, setTruck] = useState({});

  function handleChange(e) {
    return setTruck((truck) => ({ ...truck, [e.target.name]: e.target.value }));
  }
  function handleSubmit(e) {
    e.preventDefault();
  }
  /* 
        "departureDate":"2022-01-22",
        "arrivalDate": "2022-01-24",
        "departureTime": "12h",
        "arrivalTime": "18h",
        "departureLocation": "124",
        "arrivalLocation": "124",
        "status": "completed",
        "truck": "0c6c8263-5653-42dd-acc8-896a15f68d7e"
 */

  const city = [
    {
      value: 'Algarve'
    },
    {
      value: 'Viana'
    },
    {
      value: 'Espinho'
    },
    {
      value: 'Porto'
    }
  ];
  const options = [
    {
      enroll: '12-32-23'
    },
    {
      enroll: 'da-ad-ad'
    },
    {
      enroll: 'DA-AS-AS'
    },
    {
      enroll: 'LA-BV-UH'
    }
  ];
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label htmlFor="departureDate">Departure date</Form.Label>
            <Form.Control name="departureDate" onChange={handleChange} type="date" />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label htmlFor="enroll">Arrival date</Form.Label>
            <Form.Control name="arrivalDate" onChange={handleChange} type="date" />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label htmlFor="arrivalLocation">Arrival location</Form.Label>
            <Form.Control
              as="select"
              name="arrivalLocation"
              onChange={handleChange}
              type="text"
              placeholder="Enter arrivalLocation">
              {options.map((option) => (
                <option key={option.toString()} value={option.value}>
                  {option.enroll}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label htmlFor="arrivalLocation">Arrival location</Form.Label>
            <Form.Control
              as="select"
              name="arrivalLocation"
              onChange={handleChange}
              type="text"
              placeholder="Enter arrivalLocation">
              {options.map((option) => (
                <option key={option.toString()} value={option.value}>
                  {option.enroll}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label htmlFor="truck">Truck</Form.Label>
            <Form.Control
              as="select"
              name="truck"
              onChange={handleChange}
              type="text"
              placeholder="Enter arrivalLocation">
              {options.map((option) => (
                <option key={option.toString()} value={option.value}>
                  {option.enroll}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
        </Row>

        <Button variant="dark" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};
export default PlaneamentoCompoment;
