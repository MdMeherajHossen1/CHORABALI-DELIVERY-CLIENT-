import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import useAuth from '../../Hooks/useAuth'
const PlaceOrder = () => {
    const [service, setService] = useState([])
    const { id } = useParams()
    const { user } = useAuth()
    // const { name, img, desc, charge } = service[0]
    useEffect(() => {
        fetch(`https://serene-island-93451.herokuapp.com/services/${id}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        data.service = service[0];
        fetch('https://serene-island-93451.herokuapp.com/orders', {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    };

    return (
        <div className="container my-5">
            <h2>This is {id} placeOrder</h2>
            <div className="row">
                <div className="col-md-6 col-12">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input className="form-control mb-3" defaultValue={user.displayName} placeholder="Your name" {...register("name", { required: true })} />
                        <input className="form-control mb-3" defaultValue={user.email} type="email" placeholder="Your email" {...register("email", { required: true })} />
                        <input className="form-control mb-3" placeholder="Your address" {...register("address", { required: true })} />
                        {errors.address && (<small>Address is required</small>)}
                        <input className="form-control mb-3" placeholder="Your mobile number" type="number" {...register("mobile", { required: true })} />
                        {errors.mobile && (<small>Number is required</small>)}
                        <input className="form-control mb-3" placeholder="Select the date" type="date" {...register("date", { required: true })} />
                        {errors.date && (<small>date is required</small>)}
                        <input className="btn rounded col-12 text-white" type="submit" style={{ background: "#FF5A00" }} />
                    </form>
                </div>

                <div className="col-md-6 col-12">
                    <img src={service[0]?.img} alt="" />
                    <h1>{service[0]?.name}</h1>
                </div>
            </div>
        </div>
    );
};

export default PlaceOrder;