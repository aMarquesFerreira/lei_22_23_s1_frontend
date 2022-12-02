import { useParams } from 'react-router-dom';
import { Form, Button, Col, Row } from 'react-bootstrap';
import './style.css';
import { useRef, useState, useEffect } from 'react';
import { truckGetAll } from '../../Services/Truck';
import { warehouseGetAll } from '../../Services/Warehouse';
import { travelSave } from '../../Services/Travel';
import SuccessCompoment from './../../Components/Alerts/Success';
import AlertDismissible from './../../Components/Alerts/danger';
import ListWarehouseOptions from './../../Components/Planeamento/optionsDate.planiamento';
const PlaneamentoCompoment = () => {
  const initTravel = {
    departureDate: '',
    arrivalDate: '',
    departureTime: '',
    arrivalTime: '',
    departureLocation: '',
    arrivalLocation: '',
    status: 'cancelled',
    truck: ''
  };
  const [travel, setTravel] = useState(initTravel);
  const [truck, setTruck] = useState([{}]);
  const [warehouse, setWarehouse] = useState([]);
  const current = useRef();
  const [status, setStatus] = useState({
    type: '',
    messagem: ''
  });

  function handleChange(e) {
    return setTravel((travel) => ({ ...travel, [e.target.name]: e.target.value }));
  }
  function handleSubmit() {
    travelSave(travel)
      .then((response) => {
        window.location.reload();
        if (response.status === 200 && response.status === 201) {
          setStatus({
            type: 'success',
            messagem: response.data.messagem
          });
        } else {
          setStatus({
            type: 'erro',
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
  const TruckAndStoreData = () => {
    truckGetAll()
      .then((truck) => {
        setTruck(truck);
      })
      .catch((error) => console.log(error));
  };

  const WarehouseAndStoreData = () => {
    warehouseGetAll()
      .then((warehouse) => {
        setWarehouse(warehouse);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    TruckAndStoreData();
    WarehouseAndStoreData();
  }, []);

  return (
    <>
      {status.type === 'erro' ? <AlertDismissible /> : <SuccessCompoment />}
      <Form onSubmit={handleSubmit}>
        <Row>
          <Form.Group as={Col}>
            <Form.Label htmlFor="departureDate">Departure date</Form.Label>
            <Form.Control name="departureDate" onChange={handleChange} type="date" />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label htmlFor="arrivalDate">Arrival date</Form.Label>
            <Form.Control name="arrivalDate" onChange={handleChange} type="date" />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label htmlFor="departureTime">Open from 9:00 to 18:00 :Departure</Form.Label>
            <Form.Control
              name="departureTime"
              min="09:00"
              max="18:00"
              onChange={handleChange}
              type="time"
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label htmlFor="arrivalTime">Open from 9:00 to 18:00 :Arrival</Form.Label>
            <Form.Control
              name="arrivalTime"
              onChange={handleChange}
              min="09:00"
              max="18:00"
              type="time"
            />
          </Form.Group>
        </Row>
        <Row></Row>
        <Row>
          <Form.Group as={Col}>
            <Form.Label htmlFor="departureLocation">Departure location</Form.Label>
            <Form.Control
              as="select"
              name="departureLocation"
              onChange={handleChange}
              type="text"
              placeholder="Enter arrivalLocation">
              <ListWarehouseOptions warehouse={warehouse} />
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
              <ListWarehouseOptions warehouse={warehouse} />
            </Form.Control>
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label htmlFor="status">Status</Form.Label>
            <Form.Control
              name="status"
              onChange={handleChange}
              type="text"
              placeholder="Enter status"></Form.Control>
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label htmlFor="truck">Truck</Form.Label>
            <Form.Control
              as="select"
              name="truck"
              onChange={handleChange}
              type="text"
              placeholder="Enter arrivalLocation">
              {truck.map((option, i) => (
                <option key={i} value={option.idTruck}>
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
