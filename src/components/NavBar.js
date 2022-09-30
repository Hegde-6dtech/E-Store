import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function NavBar() {
  const state = useSelector((state) => state.handleCart);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3">
        <div className="container">
          <Link className="navbar-brand fw-bold fs-4" to="/">
            E-Store
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto  mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/products">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/about">
                  About
                </Link>
              </li>
            </ul>
            <div className="buttons">
              <Link to="/cart" className="btn btn-outline-primary ms-2">
                <i className="fa fa-shopping-cart me-1"></i>
                Cart {state.length}
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
