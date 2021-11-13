import React from "react";

const Partner = () => {
  return (
    <div>
      <div>
        <div class="container bg-gray-100 px-5 pt-16 pb-20 mx-auto lg:px-16">
          <div class="flex flex-col w-full mb-8 ">
            <h1 class="mb-4 text-4xl font-semibold text-center tracking-wide text-gray-900 ">
              {" "}
              Our <span className="font-bold">Partners</span>
            </h1>
            <div className="flex justify-center itmes-end">
              <hr className="w-20" />{" "}
              <img
                className="w-20"
                src="https://i.ibb.co/mzDyJBV/section-title-logo.png"
                alt=""
              />{" "}
              <hr className="w-20" />{" "}
            </div>
          </div>
          <div class="mx-auto text-center">
            <div class="grid grid-cols-4 gap-1 mx-auto lg:grid-cols-7">
              <div>
                <img
                  class="h-12 mx-auto lg:h-28"
                  src="https://i.ibb.co/Htd7227/partner1.png"
                  alt="Figma"
                />
              </div>
              <div>
                <img
                  class="h-12 mx-auto lg:h-28"
                  src="https://i.ibb.co/D7QjJ38/partner2.png"
                  alt="Framer"
                />
              </div>
              <div>
                <img
                  class="h-12 mx-auto lg:h-28"
                  src="https://i.ibb.co/DbzcJQH/partner3-1.png"
                  alt="Sketch "
                />
              </div>
              <div>
                <img
                  class="h-12 mx-auto lg:h-28"
                  src="https://i.ibb.co/P6JJD0D/partner4-1.png"
                  alt="Sketch "
                />
              </div>
              <div>
                <img
                  class="h-12 mx-auto lg:h-28"
                  src="https://i.ibb.co/SsjTrV0/partner5.png"
                  alt="Invision"
                />
              </div>
              <div>
                <img
                  class="h-12 mx-auto lg:h-28"
                  src="https://i.ibb.co/tJBFt5v/partner6.png"
                  alt="Invision"
                />
              </div>
              <div>
                <img
                  class="h-12 mx-auto lg:h-28"
                  src="https://i.ibb.co/kh2Xhpc/partner7.png"
                  alt="Invision"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partner;
