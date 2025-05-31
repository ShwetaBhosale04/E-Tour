import React from "react";
import { NavLink } from "react-router-dom";

function Crawling() {
  return (
    <div>
    <marquee width="100%" direction="left">
            <NavLink to="/homepage" className="btn btn-light" role="button">Get 20% off on very first 50 bookings on
                International Tours</NavLink>  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;

            <NavLink to="/homepage" className="btn btn-light" role="button">Every Rider's Dream place Leh-Ladakh at very
                low price</NavLink>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;

            <NavLink to="/homepage" className="btn btn-light" role="button">Ski-Dive,Water Sports & Camel Safari just
                @Rs.4999</NavLink>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            
            <NavLink to="/homepage" className="btn btn-light" role="button">Watch India Vs Australia Test match within our
                amazing tour</NavLink> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            
            <NavLink to="/homepage" className="btn btn-light" role="button">Visit Corporate Meetings as well as Explore the
                neighbouring destinations inclusive our tour cost</NavLink>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            
            <NavLink to="/homepage" className="btn btn-light" role="button">Tired for a week..lets go on a weekend trip with
                us</NavLink>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            
            <NavLink to="/homepage" className="btn btn-light" role="button">Amazing offers on the Pilgrim packages of
                Shirdi,Tirupati Balaji,Vaishno Devi & many more</NavLink>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        </marquee>
    </div>
  );
}

export default Crawling;