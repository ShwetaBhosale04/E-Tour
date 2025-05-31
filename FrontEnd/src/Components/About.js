import React from "react";
import { NavLink } from "react-router-dom";
// import web from "../Images/Shubham.jpg"
// import web1 from "../Images/PP.jpg"
// import web2 from "../Images/SY.jpg"
// import web3 from "../Images/SK.jpg"
// import web4 from "../Images/SB.jpg"
// import web5 from "../Images/SR.jpg"

function About() {
    return (
        <div>
            {/* { <div class="container"> } */}
            <div >
                <div class="row">

                    <div class="col">

                        <table class="table table-borderless">
                            <thead>
                                <tr>
                                    <th scope="col">&nbsp;</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">
                                        <div class="card">
                                            {/* { <img class="card-img-top" src={web} alt="Card image cap" /> } */}
                                            <div class="card-body" text-align="center">
                                                {/* { <><h5 class="text-center">Mr. Shubham Yewale</h5><h5 class="text-center"><b>CEO</b></h5></> } */}
                                            </div>
                                        </div>
                                    </th>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <div class="card">
                                            {/* <img class="card-img-top" src={web1} alt="Card image cap" /> */}
                                            <div class="card-body" text-align="center">
                                                {/* <h5 class="text-center">Mr. Prashant Patil</h5>
                                                <h5 class="text-center"><b>Director</b></h5> */}
                                            </div>
                                        </div>
                                    </th>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <div class="card">
                                            {/* <img class="card-img-top" src={web2} alt="Card image cap" /> */}
                                            <div class="card-body" text-align="center">
                                                {/* <h5 class="text-center">Mr. Sanket Yewale</h5>
                                                <h5 class="text-center"><b>Website Head</b></h5> */}
                                            </div>
                                        </div>
                                    </th>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="col-7">
                        <table class="table table-striped">
                            <thead>
                                <tr align="center">
                                    <th scope="col">About Us</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">
                                        <p align="justify">
                                            We are a leading online travel company in India and committed to our mission of creating happy
                                            travelers.Through our website, www.IndiaTours&Travels.com, our mobile applications and
                                            our other associated platforms, leisure and business travelers can explore, research, compare prices and
                                            book a wide range of services catering to their travel needs.
                                            Since our inception in 2006, more than 4 million customers have used one or more of our comprehensive
                                            travel-related services, which include domestic and international
                                            air ticketing, hotel bookings, homestays, holiday packages, bus ticketing, rail ticketing, activities
                                            and ancillary services. With over 61,000 hotels contracted in
                                            over 1,100 cities across India, we are Indias largest platform for domestic hotels.
                                        </p>
                                    </th>
                                </tr>

                                <tr>
                                    <th scope="row">
                                        <p align="justify">
                                            A strong and "trusted" travel brand of India, our strengths include a large and loyal customer base, a
                                            multi-channel platform for leisure and business travelers, a robust mobile
                                            eco-system for a spectrum of travelers and suppliers, a strong technology platform designed to deliver a
                                            high level of scalability and innovation and a seasoned senior management
                                            team comprising of industry executives with deep roots in the travel industry in India and abroad.
                                        </p>
                                    </th>
                                </tr>

                                <tr>
                                    <th scope="row">
                                        <p align="justify">
                                            India Tours & Travels, which means Journey in Hindi, is one of Indias most
                                            well-recognized and awarded brands. Among others, we have won multiple awards from the Ministry of
                                            Tourism,
                                            Government of India, including the National Tourism Award for Outstanding Performance as a Domestic
                                            Tour Operator in Category I (Rest of India) for the assessment year 2014-15;
                                            three awards at the India Tourism Awards for Outstanding performance as a Domestic Tour Operator
                                            (Rest of India),Outstanding performance as a Domestic Tour Operator in Jammu
                                            and Kashmir and Outstanding performance as an Inbound Tour Operator-Cat C in 2013 & the 'Best
                                            Domestic Tour Operator' award in 2010. Some other industry awards are:
                                            ET (Economic Times) Brand Equity Most Trusted Online Travel Brand of 2015;
                                            Travel & Hospitality named us the Most Outstanding Online Company: business to consumer or B2C; and in
                                            2014, India Tours & Travels.com won the CNBC Awaaz Travel Award.
                                            In 2013, we were recognized by Matrixlab as the Most Popular Brand in Travel & Leisure Category and in
                                            2012, India Tours & Travels.com won the award for Best Travel Websitein
                                            IAMAI Annual India Digital Awards.
                                        </p>
                                    </th>
                                </tr>

                                <tr>
                                    <th scope="row">
                                        <p align="justify">
                                            The acquisition of companies, intellectual property and talented individuals has been central to our
                                            growth strategy. In 2010, we acquired TSI and its subsidiaries in order to
                                            expand our B2B business, particularly our international air ticketing for small and medium scale
                                            enterprises. In 2012, we acquired Travelguru B2B and B2C entities from Travelocity,
                                            which remain well-established hotel aggregators in India. Through this acquisition, we expanded our
                                            hotel business by establishing more direct hotel relationships in India and
                                            improved our inventory of affordable travel options. We have also leveraged our leading position in the
                                            Indian travel ecosystem to make several acqui-hires, including the teams
                                            from mGaadi and dudegenie, in order to grow our business.
                                        </p>
                                    </th>
                                </tr>

                                <tr>
                                    <th scope="row">
                                        <p align="justify">
                                            We are dedicated to ensuring a superior user experience on our platform and a critical component of that
                                            is customer service. We provide customer support at all stages of our
                                            customer journey before, during and after. Our customer touch-points include our website,
                                            mobile platforms, retail stores, call centres, a network of over 14,000 agents
                                            across India addressing the needs of a large fragmented market of travel agents and a portfolio of B2E
                                            clients across India employing over 1.4 million people.
                                        </p>
                                    </th>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="col">

                        <table class="table table-borderless">
                            <thead>
                                <tr>
                                    <th scope="col">&nbsp;</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">
                                        <div class="card">
                                            {/* <img class="card-img-top" src={web3} alt="Card image cap" /> */}
                                            <div class="card-body" text-align="center">
                                                {/* <h5 class="text-center">Mr. Suraj Kadam</h5>
                                                <h5 class="text-center"><b>Graphic Designer</b></h5> */}
                                            </div>
                                        </div>
                                    </th>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <div class="card">
                                            {/* <img class="card-img-top" src={web4} alt="Card image cap" /> */}
                                            <div class="card-body" text-align="center">
                                                {/* <h5 class="text-center">Mr. Shubham Bhor</h5>
                                                <h5 class="text-center"><b>Sourcing Manager</b></h5> */}
                                            </div>
                                        </div>
                                    </th>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <div class="card">
                                            {/* <img class="card-img-top" src={web5} alt="Card image cap" /> */}
                                            <div class="card-body" text-align="center">
                                                {/* <h5 class="text-center">Mr. Santosh Rathod</h5>
                                                <h5 class="text-center"><b>Marketing Executive</b></h5> */}
                                            </div>
                                        </div>
                                    </th>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default About;