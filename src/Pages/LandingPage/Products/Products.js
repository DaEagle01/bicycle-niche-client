import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://peaceful-peak-38584.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <div
        class="bg-gradient-to-tr from-gray-50 to-gray-100
       mx-auto mt-5 pb-20"
      >
        <div className="container py-10 text-center">
          <h5 className="text-green-800">FEATURED BICYCLES</h5>
          <h1 className="md:text-5xl font-bold">Find Your Next Bike</h1>
          <p>
            Find the best bike for you from this awesome high quality bike
            collection <br /> Welcome To Our HeroBike
          </p>
        </div>
        <div class="md:px-1 md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 space-y-4 md:space-y-0 container">
          {products.slice(0, 6).map((product) => (
            <div class=" bg-white px-4 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
              <div class="relative">
                <img
                  class="w-full rounded-xl mx-auto"
                  style={{ width: "274px", height: "155px" }}
                  src={product.img}
                  alt="bicyle"
                />
                <p class="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-2 rounded-br-lg rounded-tl-lg">
                  10% <br /> off
                </p>
              </div>
              <h1 class="mt-4 text-gray-800 text-3xl font-bold cursor-pointer">
                {product.name}
              </h1>
              <div class="my-4">
                <div class="flex space-x-1 items-center">
                  <p>{product.details}</p>
                </div>
                <div class="">
                  <p>
                    <i class="fas fa-dollar-sign text-xl text-yellow-500"></i>{" "}
                    <span className="text-2xl font-medium">
                      {" "}
                      {product.price}
                    </span>
                  </p>
                </div>
                <div class="flex space-x-1 my- items-center">
                  <i class="fas fa-star text-xl text-yellow-400"></i>
                  <i class="fas fa-star text-xl text-yellow-400"></i>
                  <i class="fas fa-star text-xl text-yellow-400"></i>
                  <i class="fas fa-star text-xl text-yellow-400"></i>
                  <i class="fas fa-star-half  text-xl text-yellow-400"></i>{" "}
                  <span className="text-yellow-600 font-medium"> (23)</span>
                </div>
                <Link
                  to={`purchase/${product._id}`}
                  style={{ textDecoration: "none" }}
                >
                  <div class="mt-4 mx-auto text-center text-xl w-4/6 font-medium text-white bg-yellow-500 py-1.5 rounded-xl shadow-lg ">
                    Buy Now
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
