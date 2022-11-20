import { useEffect, usestate } from 'react'
import { truckSave } from '../Services/Truck'
const useFormValue = () => {
    const [form, setForm] = usestate({
        enroll: "",
        year: "",
        month: "",
        tare: "",
        batteryCapacity: "",
        totalBatterycapacity: "",
        AutonomyWithMaximumLoad: "",
        batteryChargingTime: "",
    });
    const handleChange = e => {
        setForm(from => ({ ...from, [e.target.name]: e.target.value }))
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        truckSave(form);
    }
    useEffect(() => {
        handleSubmit();
    }, [])
    return [form, handleChange, handleSubmit]
}

export default useFormValue;
