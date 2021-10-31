import React, { useState, useEffect } from 'react';
import useAuth from '../../Hooks/useAuth'
import { Row } from 'react-bootstrap';
import { PuffLoader } from "react-spinners";
import Order from './Order/Order';
const Myorders = () => {
    const { user } = useAuth()
    const [services, setServices] = useState([])
    const [loading, setLoading] = useState(true)
    const [deleted, setDeleted] = useState(null)
    useEffect(() => {
        fetch(`https://serene-island-93451.herokuapp.com/orders/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setServices(data)
                setLoading(false)
            })

    }, [deleted])
    const handleCencelBtn = id => {
        const confirmMessage = window.confirm("Are you sure ? You want to delete?")
        if (confirmMessage) {
            fetch(`https://serene-island-93451.herokuapp.com/orders/${id}`, { method: "DELETE" })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Successfuly Cancel Your Order')
                        const remaining = services.filter(sr => sr._id !== id)
                        setServices(remaining)
                        setDeleted(true)
                    }
                    else {
                        setDeleted(false)
                    }
                })
        }
    }
    return (
        <div className="container py-5">
            {loading ? (
                <div className="p-5 ">
                    <PuffLoader color="#FF5A00" size={200} />
                </div>
            ) : (<section className="container my-5">
                {services.length ? <h1>You have seleted this Services</h1> : <h1>You have not select any of our Services</h1>}

                <h5> </h5>

                <Row xs={1} md={2} lg={3} className="g-0 mt-5">
                    {services?.map(service => <Order
                        key={service._id}
                        service={service}
                        handleCencelBtn={handleCencelBtn}
                    ></Order>)}
                </Row>
            </section>)}
        </div>
    );
};

export default Myorders;