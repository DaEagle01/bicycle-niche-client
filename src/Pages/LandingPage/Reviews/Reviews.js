import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Rating from "react-rating";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="container px-10">
      <div class="text-center mb-">
        <div className="container pt-10 text-center">
          <h1 class="sm:text-3xl text-3xl font-bold title-font text-gray-900 mb-2">
            <span className="text-yellow-500">Testimonials</span>
          </h1>
          <h1 className="md:text-5xl font-semibold	">
            Why Our Customer Love Herobike
          </h1>
          <p>
            Find the best bike for you from this awesome high quality bike
            collection <br /> Welcome To Our HeroBike
          </p>
        </div>
        <div class="flex mt-6 justify-center">
          <div class="w-16 h-1 rounded-full bg-pink-500 inline-flex"></div>
        </div>
      </div>
      <Swiper
        spaceBetween={10}
        slidesPerView={3}
        centeredSlides
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {reviews.map((review) => (
          <SwiperSlide>
            <div>
              <div class="relative items-center w-full px- py-12 mx-auto md:px-1 lg:px-2 max-w-7xl ">
                <div class="grid grid-cols-1 gap-6 lg:grid-cols-1">
                  <div class="flex flex-col w-full max-w-lg text-left lg:mx-auto">
                    <p class="mx-auto text-black leading-relaxed text-gray-900">
                      {" "}
                      {review.description}{" "}
                    </p>
                    <Rating
                      initialRating={review.rating}
                      emptySymbol="far fa-star icon-color text-yellow-500"
                      fullSymbol="fas fa-star icon-color text-yellow-500"
                      readonly
                    ></Rating>
                    <h2 class="mt-4 text-xs font-semibold tracking-widest text-blue-500 uppercase ">
                      {review.name}

                      <span
                        href="#"
                        class="font-semibold text-gray-900 lg:mb-0"
                      >
                        from {review.place}
                      </span>
                    </h2>
                    <img
                      alt="Customer"
                      class="inline-block object-cover object-center w-20 h-20 mt-8 rounded-full "
                      src={review.img}
                    />
                  </div>
                </div>
              </div>
            </div>

            <>
              {" "}
              {/* <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto">
              <div class="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="inline-block w-8 h-8 text-gray-400 mb-8"
                  viewBox="0 0 975.036 975.036"
                >
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                </svg>
                <p class="leading-relaxed text-lg">
                  Edison bulb retro cloud bread echo park, helvetica stumptown
                  taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee
                  ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
                </p>
                <span class="inline-block h-1 w-10 rounded bg-red-500 mt-8 mb-6"></span>
                <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">
                  HOLDEN CAULFIELD
                </h2>
                <p class="text-gray-500">Senior Product Designer</p>
              </div>
            </div>
          </section> */}
            </>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Reviews;
