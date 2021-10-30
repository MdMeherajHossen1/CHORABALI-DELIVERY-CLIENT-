import React, { useState, useEffect } from 'react';
import { Row } from 'react-bootstrap';
import { PuffLoader } from "react-spinners";
import Restaurant from '../Restaurant/Restaurant';


const Grocery = () => {
    const [grocery, setGrocery] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch('https://serene-island-93451.herokuapp.com/grocery').then(res => res.json())
            .then(data => {
                console.log(data)
                setGrocery(data)
                setLoading(false)
            })
    }, [])
    return (
        <div>
            {loading ? (
                <div className="p-5 ">
                    <PuffLoader color="#4aa96c" size={100} />
                </div>
            ) : (<section className="container my-5">
                <h1> We have 70+ Grocery shops</h1>

                <h5>Take your pick from our featured Grocery Shops in LAKSHMIPUR. Delivered faster to your door..</h5>

                <Row xs={1} md={2} lg={3} className="g-0 mt-5  ">
                    {grocery?.map(restaurant => <Restaurant
                        key={restaurant._id}
                        restaurant={restaurant}
                    ></Restaurant>)}
                </Row>
            </section>)}

        </div>
    );
};

export default Grocery;