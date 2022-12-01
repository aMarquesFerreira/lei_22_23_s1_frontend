import { useState, useEffect, useLayoutEffect } from 'react';
import { useParams } from 'react-router-dom';
import SuccessCompoment from '../../Alerts/Success';
import AlertDismissible from '../../Alerts/danger';
import { Form, Button, Col, Row } from 'react-bootstrap';
import { truckGetById, truckUpdate } from '../../../Services/Truck';

const TruckDetails = () => {
  const { id } = useParams();
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
  const [truck, setTruck] = useState({ initTruck });
  const [enroll, setEnroll] = useState("");
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [tare, setTare] = useState("");
  const [batteryCapacity, setBatteryCapacity] = useState("");
  const [totalBatterycapacity, setTotalBatterycapacity] = useState("");
  const [autonomyWithMaximumLoad, setAutonomyWithMaximumLoad] = useState("");
  const [batteryChargingTime, setBatteryChargingTime] = useState("");
  
  
  useLayoutEffect(() => {
    truckGetById(id)
      .then((data) => setTruck(data))
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

  const handleChange = (e) => {
    setTruck((truck) => ({ ...truck, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
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
  };

  return (
    <section>
      {status.type === 'erro' ? <AlertDismissible /> : <SuccessCompoment />}
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label htmlFor="enroll">Enroll</Form.Label>
            <Form.Control
              name="enroll"
              placeholder={truck.enroll}
              onChange={handleChange}
              type="text"
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label htmlFor="year">Year</Form.Label>
            <Form.Control
              name="year"
              placeholder={truck.year}
              onChange={handleChange}
              type="number"
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label htmlFor="month">Month</Form.Label>
            <Form.Control
              name="month"
              placeholder={truck.month}
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
              placeholder={truck.tare}
              onChange={handleChange}
              type="number"
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label htmlFor="batteryCapacity">Battery capacity</Form.Label>
            <Form.Control
              name="batteryCapacity"
              placeholder={truck.batteryCapacity}
              onChange={handleChange}
              type="number"
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label htmlFor="totalBatterycapacity">Total battery capacity</Form.Label>
            <Form.Control
              name="totalBatterycapacity"
              placeholder={truck.totalBatteryCapacity}
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
              placeholder={truck.AutonomyWithMaximumLoad}
              onChange={handleChange}
              type="number"
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label htmlFor="batteryChargingTime">Battery charging time</Form.Label>
            <Form.Control
              name="batteryChargingTime"
              placeholder={truck.batteryChargingTime}
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
