import { useState, useEffect, useLayoutEffect } from 'react';
import { useParams } from 'react-router-dom';
import SuccessCompoment from '../../Alerts/Success';
import AlertDismissible from '../../Alerts/danger';
import { Form, Button, Col, Row } from 'react-bootstrap';
import { deliveryGetById, deliveryUpdate } from '../../../Services/Delivery';

const DeliveryDetails = () => {
    const { id } = useParams();
    const initDelivery = {
        DeliveryIdentifier: {
            identifier: ''
        },
        DeliveryDate: {
            deliveryDate: ''
        },
        DeliveryWeight: {
            deliveryWeight: ''
        },
        DeliveryWarehouse: {
            deliveryWarehouse: ''
        },
        TimeLoadTruck: {
            timeLoadTruck: ''
        },
        TimeUnloadTruck: {
            timeUnloadTruck: ''
        }
    };
    let [delivery, setDelivery] = useState(initDelivery);



    useLayoutEffect(() => {
        deliveryGetById(id)
            .then((data) => setDelivery(data))
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

    function handleDeliveryIdentifierChange(e) {
        delivery.DeliveryIdentifier.identifier = e.target.value;
    }

    function handleDeliveryDateChange(e) {
        delivery.DeliveryDate.deliveryDate = e.target.value;
    }
    function handleDeliveryWeightChange(e) {
        delivery.DeliveryWeight.deliveryWeight = e.target.value;
    }
    
    function handleDeliveryWarehouseChange(e) {
        delivery.DeliveryWarehouse.deliveryWarehouse = e.target.value;
    }
    function handleTimeLoadTruckChange(e) {
       delivery.TimeLoadTruck.timeLoadTruck = e.target.value;
    }
    
    function handleTimeUnloadTruckChange(e) {
        delivery.TimeUnloadTruck.timeUnloadTruck = e.target.value;
    }



    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(delivery);
        const headers = {
            'Content-Type': 'application/json'
        };

        deliveryUpdate(delivery.DeliveryIdentifier.identifier, delivery, headers)
            .then((response) => {
                console.log(delivery);
                console.log(response.data.delivery);
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
                            name={delivery.DeliveryIdentifier.identifier}
                            onChange={handleDeliveryIdentifierChange}
                            type="text"
                            placeholder={delivery.DeliveryIdentifier.identifier}
                        />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label htmlFor="deliveryDate">Date</Form.Label>
                        <Form.Control
                            name={delivery.DeliveryDate.deliveryDate}
                            onChange={handleDeliveryDateChange}
                            type="date"
                            placeholder={delivery.DeliveryDate.deliveryDate}
                        />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label htmlFor="weight">Weight</Form.Label>
                        <Form.Control
                            name={delivery.DeliveryWeight.deliveryWeight}
                            onChange={handleDeliveryWeightChange}
                            type="number"
                            placeholder={delivery.DeliveryWeight.deliveryWeight}
                        />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Label htmlFor="warehouse">Warehouser</Form.Label>
                        <Form.Control
                            name={delivery.DeliveryWarehouse.deliveryWarehouse}
                            onChange={handleDeliveryWarehouseChange}
                            type="number"
                            placeholder={delivery.DeliveryWarehouse.deliveryWarehouse}
                        />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label htmlFor="timeLoadTruck">TimeLoad</Form.Label>
                        <Form.Control
                            name={delivery.TimeLoadTruck.timeLoadTruck}
                            onChange={handleTimeLoadTruckChange}
                            type="number"
                            placeholder={delivery.TimeLoadTruck.timeLoadTruck}
                        />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label htmlFor="timeUnloadTruck">TimeUnload</Form.Label>
                        <Form.Control
                            name={delivery.TimeUnloadTruck.timeUnloadTruck}
                            onChange={handleTimeUnloadTruckChange}
                            type="number"
                            placeholder={delivery.TimeUnloadTruck.timeUnloadTruck}
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

export default DeliveryDetails;
