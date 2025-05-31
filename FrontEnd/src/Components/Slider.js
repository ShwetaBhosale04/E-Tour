import React from "react";

import web1 from "../Images/Slider1.JPG";
import web2 from "../Images/Slider2.JPG";
import web3 from "../Images/Slider3.JPG";

function Slider() {
    return (

        <div>

            <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="10000">
                        <img src={web2} class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Welcome to India Tours & Travels</h5>
                            <p>Your Dreams...Our Services</p>
                            {/* <button type="button" className="btn btn-outline-secondary mx-2 ">Explore the World</button>
                            <button type="button" className="btn btn-outline-success mx-2">Tours & Travellers</button>
                            <button type="button" className="btn btn-light mx-2">Nature and Pease</button> */}
                        </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                        <img src={web3} class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Gain Memories...Leave Footprints</h5>
                            <p>Your Dreams...Our Services</p>
                            {/* <button type="button" className="btn btn-success mx-2">Explore the World</button>
                            <button type="button" className="btn btn-danger mx-2">Tours & Travellers</button>
                            <button type="button" className="btn btn-warning mx-2">Nature and Pease</button> */}
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={web1} class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Explore the Unseen</h5>
                            <p>Your Dreams...Our Services</p>
                            {/* <button type="button" className="btn btn-success mx-2">Explore the World</button>
                            <button type="button" className="btn btn-danger mx-2">Tours & Travellers</button>
                            <button type="button" className="btn btn-warning mx-2">Nature and Pease</button> */}
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}

export default Slider;