import { useEffect, useState, useParams } from 'react-router-dom';
import { Form, Button, Col, Row } from 'react-bootstrap';
import './style.css';
import { truckGetById } from './../../Services/Travel'

const Planeamento = ({ idTruck }) => {
    const { idTRuck } = useParams();
    const [truck, setTruck] = useState({
    });
    const [selectedDate, setSelectedDate] = useState(null);
    
    function handleOnchange(e) {
        return setTruck(truck => ({ ...truck, [e.target.name]: e.target.value }))
    }
    function handleSubmit(){
    }
    onChangeHandler = (e) =>{
        const index = e.target.selectedIndex;
        const el = e.target.chilNodes[index];
        const option = el.truckGetById('id');
    }

    useEffect(() => {
        truckGetById(id);
    }, [idTruck])

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Row className="">
                    <Form.Group as={Col}>
                        <Form.Label htmlFor="enroll">Select Truck: </Form.Label>
                            <Form.Control as={Select} />
                            <select onChange={onChangeHandler}>
                                {truck.map( trucks => <option id={trucks.id}>
                                    {trucks.enroll}
                                </option>
                                )}
                            </select>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label htmlFor="enroll">Select date: </Form.Label>
                        <Form.Control as={Select} />
                            <DatePicker 
                            selected={selectedDate}
                            onChange={date => setSelectedDate(date)}
                            placeholderText={'dd/mm/yyyy'}
                            showYearDropdown 
                            scrollableYearDropdown
                            />
                    </Form.Group>
                </Row>
                <Button variant="dark" type="submit">
                    Submit
                </Button>
            </Form>
        </>

    );
}
export default Planeamento;