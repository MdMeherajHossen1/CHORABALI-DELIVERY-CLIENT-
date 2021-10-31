import React from 'react';
import { Col } from 'react-bootstrap';
import { useHistory } from 'react-router'
const Service = ({ service }) => {
    const history = useHistory()
    const { name, img, desc, charge, _id } = service;
    const handleService = id => {
        history.push(`/placeorder/${id}`)
    }
    return (
        <div>
            <Col className="border rounded border-start-0 mb-3">
                <div className="row "  >

                    <div className="col-5 col-md-5 ">
                        <img src={img} style={{ width: "100%", height: "100%" }} className="rounded-start" alt="" />
                    </div>
                    <div className="col-7 col-md-7 text-start p-2">
                        <h3> <strong>{name}</strong> </h3>
                        <p> {desc}</p>
                        <p><small>Delivery Charge: {charge} BDT</small></p>

                        <button onClick={() => handleService(_id)} className="btn rounded col-11 mx-auto text-white" style={{ background: "#FF5A00" }}> <i className="fas fa-shopping-cart me-2 "></i>Make a delivery</button>

                    </div>

                </div>
            </Col>
        </div>
    );
};

export default Service;