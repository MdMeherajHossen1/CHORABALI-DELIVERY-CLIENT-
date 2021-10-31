import React from 'react';

const Order = ({ service, handleCencelBtn }) => {
    const { name, desc, img, } = service?.service;
    return (
        <div>
            <div className="card mx-auto mb-3" style={{ width: '19rem' }}>
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body ">
                    <h4 className="card-title"> <strong> {name}</strong></h4>
                    <p className="card-text text-start  "> {desc}</p>
                </div>
                <div className="card-footer border-0 px-0 pb-0  ">
                    <button onClick={() => handleCencelBtn(service?._id)} className="btn rounded col-12  text-white" style={{ background: "#FF5A00" }}>Cencel Orders</button>
                </div>
            </div>
        </div>
    );
};

export default Order;