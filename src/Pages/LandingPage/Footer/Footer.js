import React from "react";
import "./Footer.css";
import { Form } from "react-bootstrap";
import logo from "../../../images/logo.png";

const Footer = () => {
  return (
    <div>
      <div
        className="footer pt-4 text-light"
        style={{ backgroundColor: "#1f2937" }}
      >
        <div className="container">
          <div className="row py-md-5">
            <div className="col-md-5 ">
              <div>
                <img src={logo} alt="" />
              </div>
              <div className="row col-12 mb-3">
                <div className="col-12 d-flex gap-5 justify-content-center align-items-center my-2">
                  <div>
                    This website is owned and published by Immediate Media
                    Company Limited. www.immediatemedia.co.uk
                  </div>
                </div>
                <div className="col-12 d-flex gap-5 justify-content-center align-items-center">
                  <div>
                    Bicycling participates in various affiliate marketing
                    programs, which means we may get paid commissions on
                    editorially chosen products purchased through our links to
                    retailer sites.
                  </div>
                </div>
                <div className="col-12 d-flex gap-5 justify-content-center align-items-center">
                  <div>© Immediate Media Company Ltd 2021.</div>
                </div>
              </div>
            </div>
            <div className="col-md-2 col-6">
              <h4 className=" fw-bold text-light mb-lg-3"> Quick Links</h4>
              <p>About us</p>
              <p>Blog</p>
              <p>My Account</p>
              <p>FAQ</p>
              <p>Terms & Conditions</p>
              <p>Contact us</p>
            </div>
            <div className="col-md-2 col-6">
              <h4 className=" fw-bold text-light mb-lg-3">
                {" "}
                Service Categories
              </h4>
              <p>Travel</p>
              <p>Lifestyle</p>
              <p>Fashion</p>
              <p>Destination</p>
              <p>Packages</p>
            </div>
            <div className="col-md-3 ">
              <h4 className="text-center fw-bold text-light mb-lg-3">
                Contact Us
              </h4>
              <div className="row col-12 mb-3">
                <div className="col-12 d-flex gap-5 justify-content-center align-items-center my-2">
                  <div>
                    <i class="fas fa-envelope fa-lg-3x fa-2x text-light mb-lg-3 my-2"></i>
                  </div>
                  <div>
                    <p>admin@herobike.com</p>
                  </div>
                </div>
                <div className="col-12 d-flex gap-5 justify-content-center align-items-center">
                  <div>
                    <i class="fas fa-headset fa-lg-3x fa-2x text-light mb-lg-3 my-2"></i>
                  </div>
                  <div>
                    <p>+8801629450417</p>
                  </div>
                </div>
                <div className="col-12 d-flex gap-5 justify-content-center align-items-center">
                  <div>
                    <i class="fas fa-map-marker-alt fa-lg-3x fa-2x text-light mb-lg-3"></i>
                  </div>
                  <div>
                    3 Edgar Buildings, <br /> England BA1 2FJ.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-dark">
          <p className="text-center p-lg- p-0 m-0">
            <small>
              Copyright &copy; 2021 All Rights Reserved, FahadCodes.
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
