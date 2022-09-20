import React from "react";
import "../App.css";
import emailLogo from "../images/email.jpg";

function Footer() {
  return (
    <footer>
      <div className="bg-light pt-5 mt-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-3">
              <div className="widget-title">
                <h3 className="mb-4 fs-5 text-secondary text-uppercase">
                  About Ewaste
                </h3>
              </div>
              <ul>
                <li>
                  <a href="/">About</a>
                </li>
                <li>
                  <a href="/">Blog</a>
                </li>
                <li>
                  <a href="/">Meet Our Team</a>
                </li>
                <li>
                  <a href="/">E waste Laws</a>
                </li>
              </ul>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="widget-title">
                <h3 className="mb-4 fs-5 text-secondary text-uppercase">
                  What We do
                </h3>
              </div>
              <ul>
                <li>
                  <a href="/">Collection</a>
                </li>
                <li>
                  <a href="/">Sorting</a>
                </li>
                <li>
                  <a href="/">Send to E waste clinic</a>
                </li>
                <li>
                  <a href="/">Tracking</a>
                </li>
              </ul>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="widget-title">
                <h3 className="mb-4 fs-5 text-secondary text-uppercase">
                  Newsletter signup
                </h3>
              </div>
              <form className="row row-cols-lg-auto g-3 align-items-center">
                <div className="col-12">
                  <label className="visually-hidden">Email</label>
                  <div className="input-group">
                    <div className="input-group-text">
                      <img src={emailLogo} alt="" height={35} />{" "}
                      <i className="bi bi-envelope"></i>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Email Id"
                    />
                  </div>
                </div>
                <div className="col-12">
                  <button type="submit" className="btn btn-success w-100">
                    Submit
                  </button>
                </div>
              </form>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="widget-title">
                <h3 className="mb-4 fs-5 text-secondary text-uppercase">
                  Customer support
                </h3>
              </div>
              <h4 className="text-success">+91-12345-67890</h4>
            </div>
          </div>
        </div>
        <div className="col-12">
          <p className="text-center text-white py-1 mt-1 bg-secondary">
            © No Copyright 2033 . Save Earth Save Soil.
          </p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
