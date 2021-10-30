import React from 'react';

const JoinUS = () => {
    return (
        <div className="container my-5">
            <h1>Join us</h1>
            <p>Be a part of the Chorabali story</p>
            <div className="row row-cols-1 row-cols-md-2 text-start">
                <div className="col">
                    <div class="card mb-3 " >

                        <div class="row g-0">
                            <div class="col-md-4 col-5">
                                <img src={'https://i.ibb.co/hZk5SRW/employer.png'} class="img-fluid rounded-start" alt="..." />
                            </div>
                            <div class="col-md-8 col-5">
                                <div class="card-body">
                                    <h4 class="card-title">Become a partner</h4>
                                    <p class="card-text">Reach more customers and achieve growth with us</p>
                                    <button className="btn rounded text-white" style={{ background: "#FF5A00" }}>Find out more</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div class="card mb-3" >
                        <div class="row g-0">
                            <div class="col-md-4 col-5">
                                <img src={'https://i.ibb.co/NYtw2KN/job.png'} class="img-fluid rounded-start" alt="..." />
                            </div>
                            <div class="col-md-8 col-5">
                                <div class="card-body">
                                    <h4 class="card-title">Build your career</h4>
                                    <p class="card-text">Join the dynamic team that makes it all happen</p>
                                    <button className="btn rounded text-white" style={{ background: "#FF5A00" }}>Find out more</button>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default JoinUS;