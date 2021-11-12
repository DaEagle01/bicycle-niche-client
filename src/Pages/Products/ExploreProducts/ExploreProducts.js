import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ExploreProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <div>
        <p>FEATURED BICYCLES</p>
        <p>Find Your Next Bike</p>
        <p>
          Find the best bike for you from this awesome high quality bike
          collection
        </p>
      </div>
      <div class="min-h-screen bg-gradient-to-tr from-red-300 to-yellow-200 flex justify-center items-center py-20">
        <div class="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0">
          {products.map((product) => (
            <div class="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
              <h3 class="mb-3 text-xl font-bold text-indigo-600">
                Beginner Friendly
              </h3>
              <div class="relative">
                <img
                  class="w-full rounded-xl"
                  src={product.img}
                  alt="Colors"
                />
                <p class="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">
                  FREE
                </p>
              </div>
              <h1 class="mt-4 text-gray-800 text-3xl font-bold cursor-pointer">
                {product.name}
              </h1>
              <div class="my-4">
                <div class="flex space-x-1 items-center">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6 text-indigo-600 mb-1.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>
                  <p>Rating</p>
                </div>
                <div class="flex space-x-1 items-center">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6 text-indigo-600 mb-1.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </span>
                  <p> $ {product.price}</p>
                </div>
                <div class="flex space-x-1 items-center">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6 text-indigo-600 mb-1.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </span>
                  <p>{product.details}</p>
                </div>
                <Link to={`purchase/${product._id}`}>
                  <button class="mt-4 text-xl w-full text-white bg-indigo-600 py-1.5 rounded-xl shadow-lg">
                    Buy Now
                  </button>
                </Link>
              </div>
            </div>
          ))}

          
        </div>
      </div>
    </div>
  );
};

export default ExploreProducts;
