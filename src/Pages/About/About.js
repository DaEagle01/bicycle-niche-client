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
      <div>
        <div class="text-center mb-">
          <div className="container pt-10 text-left">
            <h1 class="sm:text-3xl text-3xl font-bold title-font text-gray-900 mb-2">
              <span className="text-yellow-500">Welcome To Herobike</span>
            </h1>
            <div className="flex  itmes-end">
              <hr className="w-20" />{" "}
              <img
                className="w-20"
                src="https://i.ibb.co/mzDyJBV/section-title-logo.png"
                alt=""
              />{" "}
              <hr className="w-20" />{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="row container mt-5">
        <div className="col-md-5 mt-5">
          {" "}
          <img src="https://i.ibb.co/bbTQH17/about-img-5.jpg" alt="about" />
        </div>
        <div className="col-md-7 px-5">
          <h1 className="text-4xl font-bold my-4 text-warning">HeroBike</h1>
          <p>
            {" "}
            Fast forward to the winter of 1975, two gentlemen met at a dimly lit
            bar in a classic Wisconsin supper club called The Pine Knoll. As far
            as Trek's founders, Dick Burke and Bevil Hogg, were concerned, they
            were simply performing a time-honored ritual of business in
            Wisconsin where friends and partners met over drinks to hash out the
            day’s events, plan the future, and debate ideas good and bad. Over a
            few beers, the men engaged in a deep debate over what to call their
            fledgling bicycle company. Hogg favored Kestrel, after the bird of
            prey. Burke preferred Trek because it called forth images of travel
            and adventure. He must have known there was something remarkable
            about the word, something that held the promise of longevity and
            freedom and exploration and quality.
          </p>
        </div>
      </div>
      <div className="row container mt-2">
        <div className="col-md-7 px-5">
          <p>
            The Bike Affair was opened in August 2009. Back then we were riders.
            Recreational cycling was something that hadn't yet become mainstream
            in Hyderabad, and there were no shop adressing biker's need . Yes,
            there were shops selling bikes, but with every visit to the local
            bike store, we realised how discouraging an interaction could be. In
            time, our frustration became the motivation to open a bike shop
            which will be honest to customer and their needs, give professional
            support and service and which will encourage people to try and take
            up bicycling as a way of life. Our focus was solving the problems
            that we our self have faced as customer.
          </p>
        </div>{" "}
        <div className="col-md-5">
          {" "}
          <img src="https://i.ibb.co/pyYhwHV/about-img-1.jpg" alt="about" />
        </div>
      </div>
      
    </div>
  );
};

export default About;
