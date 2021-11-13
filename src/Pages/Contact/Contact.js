import "./Contact.css";
import React from "react";
import { Form } from "react-bootstrap";

const Contact = () => {
  return (
    <div>
      <div className="row mt-5 container mx-auto">
        <div className="col-md-4">
          <div class="shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-900 w-64 m-auto relative">
            <div class="w-full h-full text-center">
              <div class="flex h-full flex-col justify-between">
                <i class="fas fa-envelope-square text-7xl"></i>

                <p class="text-gray-900 dark:text-white text-lg mt-4">Email</p>
                <p class="dark:text-gray-50 text-gray-700 text-xl font-bold py-2 px-6">
                  help@herobike.com
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

                <p class="text-gray-900 dark:text-white text-lg mt-4">Phone</p>
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
                  Newhall, California
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row my-5 bg-gray-100 py-20 mx-auto text-center">
        <div className="col-md-6  col-12 mx-auto text-center">
          <img
            src="https://i.ibb.co/RSnJfwk/upcoming-bike-2.jpg"
            alt=""
            className="img-fluid text-center mx-auto"
          />
        </div>
        <div className="col-md-6 col-12 bg-gray-100">
          <div className="container-fluid">
            <Form className="container text-left">
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
                className="py-3 px-4  bg-yellow-600 hover:bg-yellow-700 focus:ring-yellow-500 focus:ring-offset-yellow-200 text-white  transition ease-in duration-200 text-left text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-xl"
                value="Submit"
              />
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
