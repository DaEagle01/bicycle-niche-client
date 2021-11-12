import "./About.css";
import React from "react";

const About = () => {
  return (
    <div className="mb-5">
      <div className="about text-center text-white py-28">
        <h1 className="font-bold">About Us</h1>
        <h3 className="font-bold">
          Home &#62; <span className="text-warning"> About Us</span>{" "}
        </h3>
      </div>
      <div className="row container mt-5">
        <div className="col-md-5">
          {" "}
          <img
            src="https://image.freepik.com/free-vector/cute-pink-bicycle-isolated_1284-43044.jpg"
            alt="about"
          />
        </div>
        <div className="col-md-7 px-5">
          <h1 className="text-4xl font-bold my-4 text-warning">Travlio</h1>
          <p>
            {" "}
            Since 1975, Travlio has been focused on bringing our customers the
            best in esteem and quality travel game plans. We are enthusiastic
            about movement and sharing the world’s marvels on the relaxation
            travel side, and giving corporate explorers hello there contact
            administrations to encourage their business travel needs.
          </p>
          <p>
            We’re a worker-claimed travel organization secured by our qualities,
            trustworthiness, and commitment to client benefit.
          </p>
          <p>
            Our honor-winning organization reliably positions as a standout
            amongst other offices in the nation (Travel Weekly, Business Travel
            Weekly), and is the best individual from the renowned Signature
            Travel Network, an overall association enabling us to give our
            clients unmatched advantages.
          </p>
          <p>
            Fulfilled workers lead to fulfilled clients. We know the development
            and accomplishment of our organization relies on satisfying our
            customer’s needs each day. That is additionally our guarantee.
          </p>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-4">
          <div class="shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-900 w-64 m-auto relative">
            <div class="w-full h-full text-center">
              <div class="flex h-full flex-col justify-between">
                <i class="fas fa-envelope-square text-7xl"></i>

                <p class="text-gray-900 dark:text-white text-lg mt-4">Email</p>
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
                  3 Edgar Buildings, <br /> England BA1 2FJ.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
