import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./SideBar.scss";
import LogoH from "../../assets/images/Logo-H.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHome, faUser } from "@fortawesome/free-solid-svg-icons";

const SideBar = () => {
  return (
    <div className="nav-bar">
      <Link className="Logo" to="/">
        <img src={LogoH} alt="H"></img>
      </Link>
      <nav>
        <NavLink exact="true" activeClassName="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e"></FontAwesomeIcon>
        </NavLink>
        <NavLink
          exact="true"
          activeClassName="active"
          className="about-link"
          to="/about"
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e"></FontAwesomeIcon>
        </NavLink>
        <NavLink
          exact="true"
          activeClassName="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"></FontAwesomeIcon>
        </NavLink>
      </nav>
    </div>
  );
};

export default SideBar;
