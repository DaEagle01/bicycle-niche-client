import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import useAuth from "../../../Hooks/useAuth";

const Review = () => {
  const [data, setData] = useState({});
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const { user, isLoading } = useAuth();

  const reviewInfo = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newdata = { ...data };
    newdata[field] = value;
    setData(newdata);
  };
  const handleReview = (e) => {
    e.preventDefault();
    data.userImg = user?.photoURL;
    console.log(data);
    fetch("https://peaceful-peak-38584.herokuapp.com/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          console.log(data);
          setSuccess(true);
        }
      });
  };
  return (
    <div>
      <div>
        <div class=" text-black py-2">
          <div class="container mx-auto flex flex-col md:flex-row my-6 md:my-2">
            <div class="flex flex-col w-full lg:w-1/3 p-8">
              <p class="ml-6 text-yellow-500 text-4xl font-bold uppercase tracking-loose">
                REVIEW
              </p>
              <p class="text-3xl font-bold md:text-5xl my-4 leading-relaxed md:leading-snug">
                Leave us a feedback!
              </p>
              <p class="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                Please provide your valuable feedback and something something
                ...
              </p>
            </div>
            <div class="flex flex-col w-full lg:w-2/3 justify-center">
              <div class="container w-full px-">
                <div class="flex flex-wrap justify-center">
                  <div class="w-full lg:w-9/12 px-">
                    <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white">
                      <div class="flex-auto p- lg:p-10">
                        <h4 class="text-2xl mb-4 text-black font-semibold">
                          Have a suggestion?
                        </h4>
                        <form
                          class="flex w-full max-w-sm space-x-3"
                          onSubmit={handleReview}
                        >
                          <div class="w-full max-w-2xl px- py-10 m-auto mt-10 bg-white rounded-lg  dark:bg-gray-800">
                            <div class="grid max-w-xl grid-cols-2 gap-4 m-auto">
                              <div class="col-span-2 lg:col-span-1">
                                <div class=" relative ">
                                  <input
                                    type="text"
                                    id="name"
                                    onBlur={reviewInfo}
                                    class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                    name="name"
                                    placeholder="Name"
                                  />
                                </div>
                              </div>
                              <div class="col-span-2 lg:col-span-1">
                                <div class=" relative ">
                                  <input
                                    type="email"
                                    id="email"
                                    onBlur={reviewInfo}
                                    class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                    name="email"
                                    placeholder="email"
                                  />
                                </div>
                              </div>
                              <div class="col-span-2 lg:col-span-1">
                                <div class=" relative ">
                                  <input
                                    type="text"
                                    id="place"
                                    onBlur={reviewInfo}
                                    class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                    placeholder="Place"
                                    name="place"
                                  />
                                </div>
                              </div>
                              <div class="col-span-2 lg:col-span-1">
                                <div class=" relative ">
                                  <input
                                    type="number"
                                    onBlur={reviewInfo}
                                    id="star"
                                    class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                    name="star"
                                    placeholder="Star (0 - 5)"
                                  />
                                </div>
                              </div>
                              <div class="col-span-2">
                                <label class="text-gray-700" for="name">
                                  <textarea
                                    class="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                    id="review"
                                    placeholder="Enter your review"
                                    name="review"
                                    onBlur={reviewInfo}
                                    rows="5"
                                    name="description"
                                    cols="40"
                                  ></textarea>
                                </label>
                              </div>
                              <div class="col-span-2 text-right">
                                <button
                                  type="submit"
                                  class="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                                >
                                  Submit
                                </button>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
