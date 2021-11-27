import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  return (
    <div>
      <section class="w-full bg-white container">
        <div class=" relative items- w-full px-5 py-12  md:px-12 lg:px-16 max-w-7xl lg:py-24">
          <div class="flex w-full justify-start text-left">
            <div class="relative inline-flex items- mx- align-m">
              <div class="text">
                <h1 class="max-w-5xl text-3xl font-bold leading-none tracking-tighter text-neutral-600 text-white md:text-5xl lg:text-6xl lg:max-w-7xl">
                  {" "}
                  <span className="md:text-8xl text-yellow-200">
                    {" "}
                    Ride
                  </span>{" "}
                  <br class="hidden lg:block" /> It's Cheper Than Therapy{" "}
                </h1>
                <p class="max-w-xl mt-8 text-lg font-semibold leading-relaxed text-gray-100">
                  {" "}
                  Riding a good bike improves strength, balance, coordination,
                  prevents falls and fractures. &amp; So on...{" "}
                </p>
                <div class="flex justify-start md:text-left lg:text-left w-full max-w-2xl gap-2 mx-auto mt-6">
                  <div class="mt-3 rounded-lg sm:mt-0">
                    <Link
                      to="/explore"
                      style={{
                        textDecoration: "none",
                        color: "black",
                      }}
                    >
                      {" "}
                      <button class="items-center block md:px-5 px-3 py-4 md:py-4 text-lg font-bold text-center text- transition duration-500 ease-in-out transform bg-yellow-400 lg:px-10 rounded-xl hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-700">
                        {" "}
                        Get A Bicycle{" "}
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
