import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import useAuth from '../../Hooks/useAuth'
import { Card } from 'react-bootstrap'
const PlaceOrder = () => {
    const [service, setService] = useState([])
    const { id } = useParams()
    const { user } = useAuth()

    useEffect(() => {
        fetch(`https://serene-island-93451.herokuapp.com/services/${id}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        data.service = service[0];
        fetch('https://serene-island-93451.herokuapp.com/orders', {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Congratulation, Your orders has successfuly done.')
                    reset()
                }
            })
    };

    return (
        <div className="container my-5">

            <div className="row g-4">
                <div className="col-md-8 col-12 ">
                    <h4> Place your Orders</h4>
                    <p>Once your orders has done then Choose any Shop to buy products</p>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input className="form-control border-0 border-success border-bottom rounded-0 mb-3" defaultValue={user.displayName} placeholder="Your name" {...register("name", { required: true })} />
                        <input className="form-control border-0 border-success border-bottom rounded-0 mb-3" defaultValue={user.email} type="email" placeholder="Your email" {...register("email", { required: true })} />
                        <input className="form-control border-0 border-success border-bottom rounded-0 mb-3" placeholder="Your address" {...register("address", { required: true })} />
                        {errors.address && (<small>Address is required</small>)}
                        <input className="form-control border-0 border-success border-bottom rounded-0 mb-3" placeholder="Your mobile number" type="number" {...register("mobile", { required: true })} />
                        {errors.mobile && (<small>Number is required</small>)}
                        <input className="form-control border-0 border-success border-bottom rounded-0 mb-3" placeholder="Select the date" type="date" {...register("date", { required: true })} />
                        {errors.date && (<small>date is required</small>)}
                        <input className="btn rounded col-12 text-white" type="submit" value="Submit your Order" style={{ background: "#FF5A00" }} />
                    </form>
                </div>

                <div className="col-md-4     col-12 ">

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={service[0]?.img} />
                        <Card.Body>
                            <Card.Title>{service[0]?.name}</Card.Title>
                            <Card.Text>
                                {service[0]?.desc}
                            </Card.Text>
                            <h6> {service[0]?.charge}</h6>
                        </Card.Body>
                    </Card>

                </div>
            </div>
        </div>
    );
};

export default PlaceOrder;