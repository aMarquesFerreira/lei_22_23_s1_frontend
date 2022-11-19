import { Form, Button } from 'react-bootstrap';
import './style.css'
import useFormValue from "../../../Utils/form";

const AddTruck = () => {
    const register = () =>{
        console.log("This field is required")
    }
    const [value, handleChange, handleSubmit] = useFormValue()
    const onSubmit = data => console.log(data);
    return (
        <section>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label htmlFor="enroll">Email address</Form.Label>
                    <Form.Control 
                        className="input-format-select"
                        name="enroll"
                        Value={value.name || ''}
                        onChange={handleChange}
                        {...register("enrollRequired", { required: true })}
                        type="text"
                        placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="dark" type="submit">
                    Submit
                </Button>
            </Form>
        </section>
    );
}

export default AddTruck;