import React from 'react';

const Restaurant = ({ restaurant }) => {
    const { name, img, desc } = restaurant;
    return (
        <div>
            <div className="card mx-auto mb-3" style={{ width: '20rem', height: '26rem' }}>
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body ">
                    <h4 className="card-title"> <strong> {name}</strong></h4>
                    <p className="card-text text-start  "> {desc}</p>
                </div>
                <div className="card-footer border-0 px-0 pb-0  ">
                    <button className="btn rounded col-12  text-white" style={{ background: "#FF5A00" }}>Check out Here</button>
                </div>
            </div>
        </div>
    );
};

export default Restaurant;