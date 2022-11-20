import { Form, Button, Col, Row } from 'react-bootstrap';
import './style.css'
/* import useFormValue from "../../../Utils/form"; */

const AddTruck = () => {
    /*     const [value, handleChange, handleSubmit] = useFormValue()
        const onSubmit = data => console.log(data); */
    return (
        <section>
            <Form>
                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Label htmlFor="enroll">Enroll</Form.Label>
                        <Form.Control
                            name="enroll"
                            type="text"
                            placeholder="Enter enroll" />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label htmlFor='year'>Year</Form.Label>
                        <Form.Control
                            name="year"
                            type="number"
                            placeholder="Enter year"
                        />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label htmlFor='month'>Month</Form.Label>
                        <Form.Control

                            name="month"
                            type="number"
                            placeholder="Enter month"
                        />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Label htmlFor='tare'>Tare</Form.Label>
                        <Form.Control
                            name="tare"
                            type="number"
                            placeholder="Enter tare"
                        />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label htmlFor='batteryCapacity'>Battery capacity</Form.Label>
                        <Form.Control

                            name="batteryCapacity"

                            type="number"
                            placeholder="Enter year"
                        />
                    </Form.Group>
                    <Form.Group as={Col} >
                        <Form.Label htmlFor='totalBatterycapacity'>Total battery capacity</Form.Label>
                        <Form.Control
                            name="totalBatterycapacity"
                            type="number"
                            placeholder="Enter total battery capacity"
                        />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Label htmlFor='AutonomyWithMaximumLoad'>Autonomy with maximum load</Form.Label>
                        <Form.Control
                            name="AutonomyWithMaximumLoad"
                            type="number"
                            placeholder="Enter autonomy with maximum load"
                        />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label htmlFor='batteryChargingTime'>Battery charging time</Form.Label>
                        <Form.Control
                            name="batteryChargingTime"
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
}

export default AddTruck;