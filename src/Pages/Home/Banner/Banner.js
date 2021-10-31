
import React from 'react';
import './Banner.css'
import { FormControl, InputGroup, Button } from 'react-bootstrap';

const Banner = () => {
    return (
        <div className="banner-bg ">
            <div className=" container  h-100 d-flex flex-column justify-content-center align-items-center">
                <h1>Order online food in Lakshmipur</h1>
                <div className="row">
                    <div className="col-md-12 col-12  ">
                        <InputGroup className=" ">
                            <FormControl
                                placeholder="Search for Food, grocery, flower Pharmacy etc"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                                className="p-3"
                            />
                            <Button className="border-0 " style={{ background: "#FF5A00" }} id="button-addon2">
                                Search
                            </Button>

                        </InputGroup>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;