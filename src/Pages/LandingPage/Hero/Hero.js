import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div>
      <section class="w-full bg-white container">
        <div class=" relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl lg:py-24">
          <div class="flex w-full mx-auto text-left">
            <div class="relative inline-flex items-center mx-auto align-middle">
              <div class="text-center">
                <h1 class="max-w-5xl text-3xl font-bold leading-none tracking-tighter text-neutral-600 text-white md:text-5xl lg:text-6xl lg:max-w-7xl">
                  {" "}
                  Long headline to turn <br class="hidden lg:block" /> your
                  visitors into users{" "}
                </h1>
                <p class="max-w-xl mx-auto mt-8 text-lg font-semibold leading-relaxed text-gray-300">
                  {" "}
                  Free and Premium themes, UI Kit's, templates and landing pages
                  built with Tailwind CSS, HTML &amp; Next.js.{" "}
                </p>
                <div class="flex justify-center w-full max-w-2xl gap-2 mx-auto mt-6">
                  <div class="mt-3 rounded-lg sm:mt-0">
                    <button class="items-center block md:px-5 px-3 py-4 md:py-4 text-lg font-semibold text-center text-white transition duration-500 ease-in-out transform bg-yellow-400 lg:px-10 rounded-xl hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-700">
                      {" "}
                      Get bundle{" "}
                    </button>
                  </div>
                  <div class="mt-3 rounded-lg sm:mt-0">
                    <button class="items-center block md:px-5 px-3 py-4 md:py-4 text-lg font-semibold text-center text-white transition duration-500 ease-in-out transform bg-yellow-400 lg:px-10 rounded-xl hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-700">
                      {" "}
                      Get bundle{" "}
                    </button>
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
