import "./Contact.css";
import React from "react";
import { Form } from "react-bootstrap";

const Contact = () => {
  return (
    <div>
      <div className="mb-5">
        <div className=" contact text-center text-white py-28">
          <h1 className="font-bold">Contact Us</h1>
          <h3 className="font-bold">
            Home &#62; <span className="text-warning"> Contact Us</span>{" "}
          </h3>
        </div>
        <div className="row mt-5">
          <div className="col-md-4">
            <div class="shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-900 w-64 m-auto relative">
              <div class="w-full h-full text-center">
                <div class="flex h-full flex-col justify-between">
                  <i class="fas fa-envelope-square text-7xl"></i>

                  <p class="text-gray-900 dark:text-white text-lg mt-4">
                    Email
                  </p>
                  <p class="dark:text-gray-50 text-gray-700 text-xl font-bold py-2 px-6">
                    +8801629450417
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div class="shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-900 w-64 m-auto relative">
              <div class="w-full h-full text-center">
                <div class="flex h-full flex-col justify-between">
                  <i class="fas fa-phone-alt text-7xl"></i>

                  <p class="text-gray-900 dark:text-white text-lg mt-4">
                    Phone
                  </p>
                  <p class="dark:text-gray-50 text-gray-700 text-xl font-bold  py-2 px-6">
                    +8801629450417
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div class="shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-900 w-64 m-auto relative">
              <div class="w-full h-full text-center">
                <div class="flex h-full flex-col justify-between">
                  <i class="fas fa-map-marker-alt text-7xl"></i>

                  <p class="text-gray-900 dark:text-white text-lg mt-4">
                    Address{" "}
                  </p>
                  <p class="dark:text-gray-50 text-gray-700 text-xl font-bold  py-2">
                    3 Edgar Buildings, <br /> England BA1 2FJ.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row my-5 container mx-auto text-center">
        <div className="col-md-6 mt-5 col-12 mx-auto text-center">
          <img
            src="https://image.freepik.com/free-vector/happy-corporate-man-done-his-job-as-vison-mission-celebrating-leadership-success-career-progress-concept-flat-illustration_1150-37384.jpg"
            alt=""
            className="img-fluid text-center mx-auto"
          />
        </div>
        <div className="col-md-6 col-12">
          <div className="container-fluid">
            <h2 className=" fw-bold text-warning mb-lg-3 my-5"> Travlio </h2>
            <Form className="container">
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  className="mb-3 input-footer"
                  type="email"
                  placeholder="Your name"
                />
                <Form.Control
                  className="mb-3 input-footer"
                  type="email"
                  placeholder="Email"
                />
                <Form.Control
                  className="mb-3 input-footer"
                  type="password"
                  placeholder="Phone number"
                />
                <Form.Control
                  className="mb-3 input-footer"
                  type="password"
                  placeholder="Your address"
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Control
                  as="textarea"
                  className="input-footer"
                  placeholder="Your message..."
                  rows={3}
                />
              </Form.Group>
              <input
                type="submit"
                className="btn btn-secondary fw-bold text-light mb-4"
                value="Submit"
                style={{ backgroundColor: "#304f47" }}
              />
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
