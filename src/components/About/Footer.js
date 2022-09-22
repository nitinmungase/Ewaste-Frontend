import React from "react";
import companyLogo from "../../images/Show.png";

function Footer() {
  return (
    <footer>
      <div>
        <footer className="bg-success" >
          <div className="container p-1">
            <div className="row my-4" style={{height: "150px"}}>
              <div className="col-lg-3 col-md-2 mb-2 mb-md-0">
                <div
                  className="rounded-circle bg-white shadow-1-strong d-flex align-items-center justify-content-center mb-2 mx-auto"
                  style={{width: "110px",height: "110px"}}
                >
                  <img
                    src={companyLogo}
                    height="110"
                    alt="logo"
                    loading="lazy"
                  />
                </div>

                <p className="text-center">
                Trash is not the right place, Understand your E-Waste
                </p>

                <ul className="list-unstyled d-flex flex-row justify-content-center">
                  <li>
                    <a className="text-white px-2" href="#!">
                      <i className="inline-icon material-icons"> &#xf234;</i>
                    </a>
                  </li>
                  <li>
                    <a className="text-white px-2" href="#!">
                      <i className="inline-icon material-icons">whatshot</i>
                    </a>
                  </li>
                  <li>
                    <a className="text-white ps-2" href="#!">
                      <i className="inline-icon material-icons">&#xe8fa;</i>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-2 mb-2 mb-md-0" >
                <h5 className="text-uppercase mb-2">About Ewaste</h5>

                <ul className="list-unstyled">
                  <li className="mb-2">
                    <a href="#!" className="text-white">
                      <i className="medium inline-icon material-icons">&#xeb8b;</i>What is Ewaste
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#!" className="text-white">
                      <i className="inline-icon material-icons">priority_high</i>Why Ewaste
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#!" className="text-white">
                      <i className="inline-icon material-icons">developer_board</i>Data Destruction
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="/blog" className="text-white">
                      <i className="inline-icon material-icons">event</i>Events & Blog
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-2 mb-2 mb-md-0">
                <h5 className="text-uppercase mb-2">What We do</h5>

                <ul className="list-unstyled">
                  <li className="mb-2">
                    <a href="#!" className="text-white">
                      <i className="inline-icon material-icons">&#xe878;</i>Process
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#!" className="text-white">
                      <i className="inline-icon material-icons">work</i>Management
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#!" className="text-white">
                      <i className="inline-icon material-icons">&#xea23;</i>Certificate
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="/team" className="text-white">
                      <i className="inline-icon material-icons">people</i>Meet Us
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-2 mb-2 mb-md-0">
                <h5 className="text-uppercase mb-2">Contact Us</h5>

                <ul className="list-unstyled">
                  <li>
                    <p>
                      <i className="inline-icon material-icons">account_balance</i> CDAC - HYD
                    </p>
                  </li>
                  <li>
                    <p>
                    <i className="inline-icon material-icons">contact_phone</i> + 91 123 456 78
                    </p>
                  </li>
                  <li>
                    <p>
                    <i className="large inline-icon material-icons">contact_mail</i> contact@ewaste.com
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className="bg-secondary text-center p-3"
          >
           © No Copyright 2033 . Save Earth Save Soil.
          </div>
        </footer>
      </div>
    </footer>
  );
}
export default Footer;
