import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../images/A.png"



function Navbar() {

  return (
    <div className="mb-5">
   <nav className="navbar navbar-expand-lg  navbar-dark fixed-top" id = "nav">
    <div className="container-fluid">
    <Link class="navbar-brand" to="/">
      <img src={logo} alt="" width="50" height="50" className="d-inline-block align-text-bottom mx-1"/>
     Mukesh Aircons
    </Link>
      <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-li">
            <Link class="nav-a"  to="/">Home</Link>
          </li>
          <li className="nav-li">
            <Link class="nav-a" to="/services">Services</Link>
          </li>
          <li className="nav-li">
            <Link class="nav-a"to="/about">About</Link>
          </li>
          <li className="nav-li">
            <Link class="nav-a" to="/contact" >contact</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    </div>
  );
}

export default Navbar;
