import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div>
      <section>
        <div class="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
          <div class="flex flex-wrap items-center mx-auto max-w-7xl">
            <div class="flex flex-col items-start mb-16 text-left lg:flex-grow lg:w-1/2 lg:pr-24 md:mb-0">
              <span class="mb-8 text-xs font-bold tracking-widest text-blue-400 uppercase">
                {" "}
                Your tagline{" "}
              </span>
              <h1 class="mb-8 text-4xl font-bold leading-none tracking-tighter text-neutral-600 md:text-7xl lg:text-5xl">
                {" "}
                Medium length display headline.{" "}
              </h1>
              <p class="mb-8 text-base leading-relaxed text-left text-gray-400">
                {" "}
                Free and Premium themes, UI Kit's, templates and landing pages
                built with Tailwind CSS, HTML &amp; Next.js.{" "}
              </p>
              <div class="mt-0 lg:mt-6 max-w-7xl sm:flex">
                <div class="mt-3 rounded-lg sm:mt-0">
                  <button class="items-center block px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-400 rounded-xl hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    {" "}
                    Get bundle{" "}
                  </button>
                </div>
                <div class="mt-3 rounded-lg sm:mt-0 sm:ml-3">
                  <button
                    class="
                    items-center
                    block
                    px-10
                    py-3.5
                    text-base
                    font-medium
                    text-center text-blue-400
                    transition
                    duration-500
                    ease-in-out
                    transform
                    border-2 border-white
                    shadow-md
                    rounded-xl
                    focus:outline-none
                    focus:ring-2
                    focus:ring-offset-2
                    focus:ring-gray-500
                  "
                  >
                    {" "}
                    See features{" "}
                  </button>
                </div>
              </div>
            </div>
            <div class="w-full mt-12 lg:w-5/6 lg:max-w-lg rounded-xl xl:mt-0">
              <div>
                <div class="relative w-full max-w-lg">
                  <div class="absolute top-0 rounded-full bg-violet-300 -left-4 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                  <div class="absolute rounded-full bg-fuchsia-300 -bottom-24 right-20 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                  <div class="relative">
                    {/* <img class="object-cover object-center mx-auto rounded-lg shadow-2xl" alt="hero" src="https://d33wubrfki0l68.cloudfront.net/374d3e75d4ab6cf2141b12e76a8de965299dff67/9e8fe/images/placeholders/square.svg"/> */}
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
