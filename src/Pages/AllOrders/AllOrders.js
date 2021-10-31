import React, { useState, useEffect } from 'react';
import { Row } from 'react-bootstrap';
import { PuffLoader } from 'react-spinners';
import useAuth from '../../Hooks/useAuth';
import SingleService from './SingleService/SingleService'

const AllOrders = () => {
    const [allServices, setAllServices] = useState([])
    const [loading, setLoading] = useState(true)
    const [deleted, setDeleted] = useState(null)
    const { user } = useAuth()
    useEffect(() => {
        fetch('https://serene-island-93451.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => {
                setAllServices(data)
                setLoading(false)
            })
    }, [deleted])
    const handleCencelBtn = id => {
        if (user?.email === 'joycomputers36@gmail.com') {
            const confirmMessage = window.confirm("Are you sure ? You want to delete?")
            if (confirmMessage) {
                fetch(`https://serene-island-93451.herokuapp.com/orders/${id}`, { method: "DELETE" })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            alert('Successfuly Cancel Your Order')
                            const remaining = allServices.filter(sr => sr._id !== id)
                            setAllServices(remaining)
                            setDeleted(true)

                        }
                        else {
                            setDeleted(false)
                        }
                    })
            }
        }
        else {
            alert('Only Admin MEHERAJ MUHAMMAD can delete User Services information. Sorry P-Hero....')
        }

    }
    return (
        <div className="container my-5">
            {allServices.length ? < h2>All of ours Users Services information is here </h2> : < h2>We dont have any  Users Services information yet </h2>}
            <div className="row justify-content-center">
                <div className=" col-md-2 col-3"> <img src={'https://i.ibb.co/8YpYR8L/applestore.png'} className=" img-fluid rounded " alt="" /></div>
                <div className="col-md-2 col-3"> <img src={'https://i.ibb.co/fxSVWsR/googleplay.png'} className=" img-fluid rounded " alt="" /></div>
                <div className="col-md-2 col-3"><img src={'https://i.ibb.co/MD11wKg/huawei.png'} className=" img-fluid rounded " alt="" /></div>
            </div>

            {loading ? (
                <div className="p-5 mb-5">
                    <PuffLoader color="#FF5A00" size={200} />
                </div>
            ) : (<Row xs={1} md={2} lg={3} className="g-4 mt-5">
                {allServices?.map(service => <SingleService
                    key={service._id}
                    service={service}
                    handleCencelBtn={handleCencelBtn}
                ></SingleService>)}
            </Row>)}

        </div>
    );
};

export default AllOrders;