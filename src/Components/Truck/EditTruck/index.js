import { useState, useEffect, useLayoutEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import SuccessCompoment from '../../Alerts/Success';
import AlertDismissible from '../../Alerts/danger';
import { Form, Button, Col, Row } from 'react-bootstrap';
import { truckGetById, truckUpdate } from '../../../Services/Truck';
import { isDisabled } from '@testing-library/user-event/dist/utils';

const TruckDetails = ({match}) => {
  const { id } = useParams();
  const initTruck = {
    enroll: '',
    year: '',
    month: '',
    tare: '',
    batteryCapacity: '',
    totalBatterycapacity: '',
    AutonomyWithMaximumLoad: '',
    batteryChargingTime: '',
    isActive: Boolean()
  };
  const [truck, setTruck] = useState({ initTruck });
  const [editTruck, setEditTruck] = useState({});
  const [enroll, setEnroll] = useState('');
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [tare, setTare] = useState('');
  const [batteryCapacity, setBatteryCapacity] = useState('');
  const [totalBatterycapacity, setTotalBatterycapacity] = useState('');
  const [autonomyWithMaximumLoad, setAutonomyWithMaximumLoad] = useState('');
  const [batteryChargingTime, setBatteryChargingTime] = useState('');
  const [isActive, setIsActive] = useState(false);
  var convertToStringIsActive = new String(truck.isActive);
  const afterFirstRender = useRef(false);
  const [visible, setVisible] = useState(true);

  useLayoutEffect(() => {
    truckGetById(id)
      .then((data) => setTruck(data))
      .catch((err) => console.log(err));
  }, [id]);
  const [success, setSuccess] = useState(false);
  const [status, setStatus] = useState({
    type: '',
    messagem: ''
  });
  useEffect(() => {
    console.log(afterFirstRender.current);
    if (!afterFirstRender.current) {
      afterFirstRender.current = false;
      return;
    }
  }, [visible]);

  const handleChange = (e) => {
    setEditTruck((editTruck) => ({ ...editTruck, [e.target.name]: e.target.value }));
  };

  const handleToggle = () => {
    setVisible((current) => !current);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const headers = {
      'Content-Type': 'application/json'
    };
    setSuccess(true);
    if (visible === false) {
      truckUpdate(id, editTruck, headers)
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
    }
    setSuccess(false);
    window.scrollTo(0, 0);
  };

  return (
    <section>
      {status.type === 'erro' ? <AlertDismissible /> : <SuccessCompoment />}
      <h1>Active</h1>
      <p>
        The status of the current vehicle, be careful if you have true you cannot travel with it:{' '}
        <b>{convertToStringIsActive}</b>
      </p>
      <Button style={{ marginBottom: '30px' }} variant="info" onClick={handleToggle}>
        Edit
      </Button>
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label htmlFor="enroll">Enroll</Form.Label>
            <Form.Control
              name="enroll"
              disabled={visible ? true : false}
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
              disabled={visible ? true : false}
              type="number"
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label htmlFor="month">Month</Form.Label>
            <Form.Control
              name="month"
              placeholder={truck.month}
              disabled={visible ? true : false}
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
              disabled={visible ? true : false}
              type="number"
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label htmlFor="batteryCapacity">Battery capacity</Form.Label>
            <Form.Control
              name="batteryCapacity"
              placeholder={truck.batteryCapacity}
              disabled={visible ? true : false}
              onChange={handleChange}
              type="number"
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label htmlFor="totalBatterycapacity">Total battery capacity</Form.Label>
            <Form.Control
              name="totalBatterycapacity"
              placeholder={truck.totalBatterycapacity}
              disabled={visible ? true : false}
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
              disabled={visible ? true : false}
              onChange={handleChange}
              type="number"
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label htmlFor="batteryChargingTime">Battery charging time</Form.Label>
            <Form.Control
              name="batteryChargingTime"
              placeholder={truck.batteryChargingTime}
              disabled={visible ? true : false}
              onChange={handleChange}
              type="number"
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label htmlFor="isActive">Active</Form.Label>
            <Form.Control
              as="select"
              name="isActive"
              onChange={handleChange}
              disabled={visible ? true : false}
              aria-label="Default select example">
              <option>Open this select menu</option>
              <option defaultValue value="false">
                False
              </option>
              <option value="true">True</option>
            </Form.Control>
          </Form.Group>
        </Row>
        {visible ? true : <Button variant="dark" type="submit">
          Submit
        </Button>}
      </Form>
    </section>
  );
};

export default TruckDetails;
