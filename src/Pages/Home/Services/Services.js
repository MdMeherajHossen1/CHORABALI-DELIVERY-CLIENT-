
import React, { useState, useEffect } from 'react';
import { Row } from 'react-bootstrap';
import { PuffLoader } from "react-spinners";
import Service from '../Service/Service';
const Services = () => {
    const [lodding, setLodding] = useState(true)
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://serene-island-93451.herokuapp.com/services').then(res => res.json())
            .then(data => {
                console.log(data)
                setServices(data)
                setLodding(false)
            })
    }, [])
    return (


        <div>
            {lodding ? (
                <div className="p-5 ">
                    <PuffLoader color="#4aa96c" size={100} />
                </div>
            ) : (<section className="container my-5">
                <h1>Your everyday, right away</h1>

                <p>Order food and grocery delivery online from hundreds of restaurants and shops nearby</p>
                <div>
                    <img src={'https://i.ibb.co/8YpYR8L/applestore.png'} className="rounded me-3" alt="" />
                    <img src={'https://i.ibb.co/fxSVWsR/googleplay.png'} className="rounded me-3" alt="" />
                    <img src={'https://i.ibb.co/MD11wKg/huawei.png'} className="rounded" alt="" />
                </div>
                <Row xs={1} md={2} lg={2} className="g-4 mt-5">
                    {services?.map(event => <Service
                        key={event._id}
                        event={event}
                    ></Service>)}
                </Row>
            </section>)}

        </div>
    );
};

export default Services;