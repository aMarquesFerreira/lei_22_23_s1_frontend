import * as React from "react";
import './style.css'
import { useForm } from "react-hook-form";


const AddTruck = (props) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <section>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="group-form">
                    <label forHtml="enroll">Enroll</label>
                    <input className="input-format-select"
                        name="enroll"
                        placeholder="12-HT-LA"
                        defaultValue={props.enroll}
                        {...register("enrollRequired", { required: true })}
                    />
                    {errors.enrollRequired && <span>This field is required</span>}
                </div>
                <div className="">
                    <input className="btnSubmit" type="submit" />
                </div>
            </form>
        </section>
    );
}

export default AddTruck;