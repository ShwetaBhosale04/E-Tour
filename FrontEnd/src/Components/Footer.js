
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
    FaFacebookF,
    FaTwitter,
    FaPinterest,
    FaInstagram,
    FaInstagramSquare,
} from "react-icons/fa";
import { IoIosPin, IoIosContact, IoIosMail } from "react-icons/io";


function Footer() {
    let navigate = useNavigate();
    const onSubcribe = ()=>{
        alert("Thanks For Subscribing")
        navigate('/homepage');
    }
    return (
        <div class="container">
            <footer class="py-5">

                <div class="row">
                    <div class="col-3">
                        <h4> <IoIosPin /> Contact Us</h4>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Pune,Maharashatra</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;India</p>
                        <p><IoIosContact />&nbsp;&nbsp; 7378937289</p>
                        <p><IoIosMail />&nbsp;&nbsp; e_tour@gmail.com</p>
                    </div>

                    <div class="col-2">
                        <h4>&nbsp;&nbsp;&nbsp;Company</h4>
                        <ul class="nav flex-column">
                            <li className="nav-item">
                                <NavLink className="nav-link " to="/homepage"><button type="button" class="btn btn-outline-secondary btn-sm">Home</button></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link " to="/homepage"><button type="button" class="btn btn-outline-secondary btn-sm">Gallery</button></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link " to="/homepage"><button type="button" class="btn btn-outline-secondary btn-sm">Videos</button></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link " to="/homepage"><button type="button" class="btn btn-outline-secondary btn-sm">Offers</button></NavLink>
                            </li>
                        </ul>
                    </div>

                    <div class="col-2">
                        <h4>&nbsp;&nbsp;&nbsp;Support</h4>
                        <ul class="nav flex-column">
                            <li className="nav-item">
                                <NavLink className="nav-link " to={`/about`}><button type="button" class="btn btn-outline-secondary btn-sm">About</button></NavLink>
                            </li> <li className="nav-item">
                                <NavLink className="nav-link " to={`/faqs`}><button type="button" class="btn btn-outline-secondary btn-sm">FAQs</button></NavLink>
                            </li> <li className="nav-item">
                                <NavLink className="nav-link " to={`/feedback`}><button type="button" class="btn btn-outline-secondary  btn-sm">Feedback</button></NavLink>
                            </li> <li className="nav-item">
                                <NavLink className="nav-link " to={`/tc`}><button type="button" class="btn btn-outline-secondary btn-sm">T & C</button></NavLink>
                            </li>
                        </ul>
                    </div>



                    <div class="col-4 offset-1">
                        <form>
                            <h5>Subscribe to our Newsletter</h5>
                            <p>Get Latest Deals, Upcoming Offers and Travel Guides</p>
                            <div class="d-flex w-100 gap-2">
                                <label for="newsletter1" class="visually-hidden">Email address</label>
                                <input id="newsletter1" type="text" class="form-control" placeholder="Email address" required/>
                                <button onClick={onSubcribe} class="btn btn-info" type="button">Subscribe</button>
                            </div>
                            <p></p>
                        </form>
                    </div>
                </div>

                <hr></hr>
                <div class="row">
                    <div class="col-4">
                        <ul className="header__ul">
                            <li>
                                <FaFacebookF className="headerIcon" />
                            </li>
                            <li>
                                <FaTwitter className="headerIcon" />
                            </li>
                            <li>
                                <FaInstagramSquare className="headerIcon" />
                            </li>
                            <li>
                                <FaInstagram className="headerIcon" />
                            </li>
                        </ul>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &copy; All rights reserved.</p>
                    </div>

                    <div class="col-2"></div>
                    <div class="col-2"></div>

                    <div class="col-4">
                        <p>Group -- B-Tech June-2025.</p>
                        <p> Powered By  DYPU, Pune.</p>
                    </div>
                </div>

            </footer>
        </div >
    );
}
export default Footer;