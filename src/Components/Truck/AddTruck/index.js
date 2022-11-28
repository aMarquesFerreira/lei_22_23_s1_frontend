import { useState } from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';
import './style.css';
import { truckSave } from './../../../Services/Truck';
import SuccessCompoment from './../../Alerts/Success';
import AlertDismissible  from './../../Alerts/danger';
const AddTruck = () => {
  const [status, setStatus] = useState({
    type: '',
    messagem: ''
  });
  const initTruck = {
    enroll: '',
    year: '',
    month: '',
    tare: '',
    batteryCapacity: '',
    totalBatterycapacity: '',
    AutonomyWithMaximumLoad: '',
    batteryChargingTime: ''
  };
  const [truck, setTruck] = useState(initTruck);

  const handleChange = (e) => {
    setTruck((truck) => ({ ...truck, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const headers = {
      'Content-Type': 'application/json'
    };
    truckSave(truck, headers)
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
          messagem: 'Erro: Tente mais tarde!'
        });
      });
  };

  return (
    <section>
      {status.type === 'redErro' ? <SuccessCompoment /> : <AlertDismissible/>}
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label htmlFor="enroll">Enroll</Form.Label>
            <Form.Control
              name="enroll"
              onChange={handleChange}
              type="text"
              placeholder="Enter enroll"
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label htmlFor="year">Year</Form.Label>
            <Form.Control
              name="year"
              onChange={handleChange}
              type="number"
              placeholder="Enter year"
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label htmlFor="month">Month</Form.Label>
            <Form.Control
              name="month"
              onChange={handleChange}
              type="number"
              placeholder="Enter month"
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label htmlFor="tare">Tare</Form.Label>
            <Form.Control
              name="tare"
              onChange={handleChange}
              type="number"
              placeholder="Enter tare"
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label htmlFor="batteryCapacity">Battery capacity</Form.Label>
            <Form.Control
              name="batteryCapacity"
              onChange={handleChange}
              type="number"
              placeholder="Enter year"
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label htmlFor="totalBatterycapacity">Total battery capacity</Form.Label>
            <Form.Control
              name="totalBatterycapacity"
              onChange={handleChange}
              type="number"
              placeholder="Enter total battery capacity"
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label htmlFor="AutonomyWithMaximumLoad">Autonomy with maximum load</Form.Label>
            <Form.Control
              onChange={handleChange}
              name="AutonomyWithMaximumLoad"
              type="number"
              placeholder="Enter autonomy with maximum load"
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label htmlFor="batteryChargingTime">Battery charging time</Form.Label>
            <Form.Control
              name="batteryChargingTime"
              onChange={handleChange}
              type="number"
              placeholder="Enter year"
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

export default AddTruck;
