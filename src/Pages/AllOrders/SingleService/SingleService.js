import React from 'react';


const SingleService = ({ service, handleCencelBtn }) => {
    const { name, img, desc, charge } = service.service;
    return (
        <div>
            <div className="card mx-auto mb-3 text-start" style={{ width: '19rem' }}>
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body ">
                    <h4 className="card-title"> <strong> {name}</strong></h4>
                    <p className="card-text"> {desc}</p>
                    <h6> D-charge: {charge || '60 BDT'}</h6>
                    <h6 >Customer Name: {service?.name}</h6>
                    <p> Adress: {service?.adrress || 'Lakshmipur'}</p>
                    <p>Number: {service?.number || '017222333'}</p>
                    <p> Order-Date: {service?.date}</p>
                </div>
                <div className="card-footer border-0 px-0 pb-0  ">
                    <button onClick={() => handleCencelBtn(service?._id)} className="btn rounded col-12  text-white" style={{ background: "#FF5A00" }}>Cencel Orders</button>
                </div>
            </div>
        </div>
    );
};

export default SingleService;

