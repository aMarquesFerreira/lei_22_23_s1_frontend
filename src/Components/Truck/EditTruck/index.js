import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SuccessCompoment from '../../Alerts/Success';
import AlertDismissible from '../../Alerts/danger';
import { Form, Button, Col, Row } from 'react-bootstrap';
import { truckGetById } from '../../../Services/Truck';

const TruckDetails = () => {
  const { idTruck } = useParams();
  const [formState, setFormState] = useState({});
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormState((from) => ({ ...from, [e.target.name]: e.target.value }));
  };
  useEffect(() => {
    truckGetById(idTruck);
  }, [idTruck]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section>
      {status.type === 'redErro' ? <SuccessCompoment /> : <AlertDismissible />}
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label htmlFor="enroll">Enroll</Form.Label>
            <Form.Control
              name="enroll"
              value={formState.enroll}
              onChange={handleChange}
              type="text"
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label htmlFor="year">Year</Form.Label>
            <Form.Control
              name="year"
              value={formState.year}
              onChange={handleChange}
              type="number"
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label htmlFor="month">Month</Form.Label>
            <Form.Control
              name="month"
              value={formState.month}
              onChange={handleChange}
              type="number"
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label htmlFor="tare">Tare</Form.Label>
            <Form.Control
              name="tare"
              value={formState.tare}
              onChange={handleChange}
              type="number"
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label htmlFor="batteryCapacity">Battery capacity</Form.Label>
            <Form.Control
              name="batteryCapacity"
              value={formState.batteryCapacity}
              onChange={handleChange}
              type="number"
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label htmlFor="totalBatterycapacity">Total battery capacity</Form.Label>
            <Form.Control
              name="totalBatterycapacity"
              value={formState.totalBatteryCapacity}
              onChange={handleChange}
              type="number"
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label htmlFor="AutonomyWithMaximumLoad">Autonomy with maximum load</Form.Label>
            <Form.Control
              name="AutonomyWithMaximumLoad"
              value={formState.AutonomyWithMaximumLoad}
              onChange={handleChange}
              type="number"
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label htmlFor="batteryChargingTime">Battery charging time</Form.Label>
            <Form.Control
              name="batteryChargingTime"
              value={formState.batteryChargingTime}
              onChange={handleChange}
              type="number"
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

export default TruckDetails;
