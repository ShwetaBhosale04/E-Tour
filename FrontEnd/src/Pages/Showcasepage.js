import React from "react";
import { NavLink } from "react-router-dom";
import "../Css/showcase.css";

import {
  FaFacebookF,
  FaTwitter,
  FaPinterest,
  FaInstagram,
  FaInstagramSquare,
} from "react-icons/fa";


const Showcase = () => {
  const [state] = React.useState({
    title: "India Tours & Travels",
    text:
      "Dare to Live the Life...You have always wanted​... A journey of thousand miles begins with a single step. So take a Step forward and Book the tour",
  });
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="header__content">
              <div className="header__section">

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

                <h1>{state.title}</h1>
                <p>{state.text}</p>

                <div className="header__buttons">
                  <NavLink to={`/homepage`} className="btn btn-outline-info btn-lg">Explore</NavLink>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Showcase;