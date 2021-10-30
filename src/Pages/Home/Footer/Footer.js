import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div className="container-fluid py-3 text-white bg-dark">
            <div className="container">
                <div className="row pt-2">
                    <div className="d-flex justify-content-evenly border-bottom border-primary pb-3">
                        <h6>Feedback</h6>
                        <h6>Careers</h6>
                        <h6>Terms</h6>
                        <h6>FAQ</h6>
                        <h6>Privacy</h6>
                        <h6>Contact Us</h6>
                        <h6>Site Map</h6>

                    </div>
                </div>

                <div className="row text-start py-4 border-bottom border-primary">
                    <div className="col-9">
                        <div className="row">
                            <div className="col-md-4 col-12 border-start border-primary">
                                <h5 className="text-center">Restaurants</h5>
                                <p>Mohammadia hotel</p>
                                <p>Madina cafe</p>
                                <p>Samiha Hotel</p>
                                <p>Razmohal restaurant</p>
                                <p>One minite cafe</p>
                                <p>Jumur hotel</p>
                            </div>

                            <div className="col-md-4 col-12 border-start border-primary">
                                <h5 className="text-center">Popular Cuisines</h5>
                                <p>Breakfast</p>
                                <p>Burgers</p>
                                <p>Cafe</p>
                                <p>Perfume</p>
                                <p>American</p>
                                <p>hooks</p>
                            </div>
                            <div className="col-md-4 col-12 border-start border-primary">
                                <h5 className="text-center">Popular Areas</h5>
                                <p>Chak Bazar</p>
                                <p>Jumur</p>
                                <p>Samad</p>
                                <p>Puorosoba Market</p>
                                <p>Uttor temuhoni</p>
                                <p>Shisu Park</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-3 border-start border-primary">
                        <h5 className=" text-center">Follow us on</h5>
                        <div className="buttons">
                            <button className="button"><i className="fab fa-youtube" style={{ color: "rgb(248, 0, 0)" }}></i></button>
                            <button className="button"> <i className="fab fa-facebook" style={{ color: "rgb(3, 38, 155)" }}></i></button>
                            <button className="button"><i className="fab fa-instagram" style={{ color: "red" }}></i></button>
                            <button className="button"><i className="fab fa-twitter" style={{ color: "rgb(32, 95, 121)" }}></i></button>
                            <button className="button"><i className="fab fa-facebook-messenger" style={{ color: "purple" }}></i></button>
                            <button className="button"><i className="fab fa-whatsapp" style={{ color: "darkgreen" }}></i></button>
                        </div>
                    </div>
                </div>

                <div className="py-3">
                    <h6>&copy;Chorabali Delivery Services. All rights reserved.By:- Meheraj Muhammad</h6>
                </div>
            </div>
        </div>
    );
};

export default Footer;