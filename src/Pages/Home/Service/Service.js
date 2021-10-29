import React from 'react';
import { Col } from 'react-bootstrap';

const Service = ({ event }) => {

    const { name, img, desc, charge } = event;
    return (
        <div>
            <Col className="border rounded border-start-0 ">
                <div className="row " style={{ height: "14rem" }} >

                    <div className="col-5">
                        <img src={img} style={{ width: "100%", height: "100%" }} className="rounded-start" alt="" />
                    </div>
                    <div className="col-7 text-start  pt-2 position-relative">
                        <h3> {name}</h3>
                        <p> {desc}</p>
                        <p><small>Delivery Charge: {charge} BDT</small></p>
                        <div className="position-absulate bottom-0">
                            <button className="btn rounded col-11 mx-auto text-white" style={{ background: "#FF5A00" }}>Choose your service</button>
                        </div>
                    </div>

                </div>
            </Col>
        </div>
    );
};

export default Service;