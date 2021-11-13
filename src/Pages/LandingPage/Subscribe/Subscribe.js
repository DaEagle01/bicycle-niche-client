import React from "react";

const Subscribe = () => {
  return (
    <div>
      <div className="container mt-12 -mb-12 ">
        <div
          class="flex justify-center px-4 text-black bg-yellow-500 sticky py-3"
          style={{ borderRadius: "5px" }}
        >
          <div class="container py-6">
            <h1 class="text-center text-lg font-bold lg:text-2xl">
              Join 31,000+ other and never miss <br /> out on new tips, offers,
              and more.
            </h1>

            <div class="flex justify-center mt-6">
              <div class="bg-white rounded-lg">
                <div class="flex flex-wrap justify-between md:flex-row">
                  <input
                    type="email"
                    class="m-1 p-2 appearance-none text-gray-700 text-sm focus:outline-none"
                    placeholder="Enter your email"
                  />
                  <button class="w-full m-1 p-2 text-sm bg-yellow-500 rounded-lg font-semibold uppercase lg:w-auto">
                    subscribe
                  </button>
                </div>
              </div>
            </div>

            {/* <hr class="h-px mt-6 bg-gray-700 border-none" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
