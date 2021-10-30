
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const CreateaNewService = () => {
    const [congrats, setCongrats] = useState('')
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch('https://serene-island-93451.herokuapp.com/services', {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    setCongrats(result.insertedId)
                    alert('Successfully add to the Database')
                    reset()
                }
            })
    };

    return (
        <div className="container py-5">

            <div className="row">
                <div className="col-md-6 col-12">
                    <h3 > <strong>Add a Service to Database</strong></h3>
                    <h5 className="mb-5">This is add new section of our delivery services</h5>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <input className="form-control mb-3" placeholder="Write new service name" {...register("name", { required: true })} />

                        <input className="form-control mb-3" type="number" placeholder="give the price of service" {...register("charge", { required: true })} />
                        <textarea className="form-control mb-3" style={{ height: "100px" }} placeholder="Write description of the service" {...register("desc", { required: true })} />
                        <input className="form-control mb-3" placeholder="Please give an img URL" {...register("img", { required: true })} />

                        <input className="btn rounded col-12 text-white" type="submit" style={{ background: "#FF5A00" }} />
                    </form>
                </div>
                <div className="col-md-6 col-12">
                    {congrats && <img src={'https://i.ibb.co/JxQCgMK/congrats.webp'} alt="" />}
                </div>
            </div>
        </div>
    );
};

export default CreateaNewService;