import { usestate } from 'react'
import { SubmitAddTruck } from '../Hook/truck'
const useFormValue = () => {
    const [form, setForm] = usestate({});
    const handleChange = e => {
        setForm(from => ({ ...from, [e.target.name]: e.target.value }))
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        SubmitAddTruck();
    }
    return [form, handleChange, handleSubmit]
}

export default useFormValue;
