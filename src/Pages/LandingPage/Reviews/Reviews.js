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
    fetch("https://herobike.onrender.com/reviews")
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
            Why Our Customers Love Herobike
          </h1>
        </div>
        <div class="flex mt-6 justify-center">
          <div class="w-16 h-1 rounded-full bg-yellow-600 inline-flex"></div>
        </div>
      </div>
      <Swiper
        spaceBetween={15}
        slidesPerView={3}
        centeredSlides
        onSlideChange={() => { }}
        onSwiper={(swiper) => { }}
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
                    <div className="flex justify-center items-center md:gap-3 gap-1">
                      <img
                        alt="Customer"
                        class="inline-block object-cover object-center md:w-16 md:h-16 w-10  mt-8 rounded-full "
                        src={review.img}
                      />{" "}
                      <h2 class="mt-4 text-xs font-semibold tracking-widest text-blue-500  mr-4">
                        {review.name}
                        &nbsp;
                        <span
                          href="#"
                          class="font-semibold text-gray-900 lg:mb-0"
                        >
                          from {review.place}
                        </span>
                      </h2>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Reviews;
