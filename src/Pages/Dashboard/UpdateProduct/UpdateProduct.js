import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import { data } from "autoprefixer";

const UpdateProduct = () => {
  const { _id } = useParams();
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch(`https://herobike.onrender.com/products/${_id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    // console.log(data);
    fetch(`https://herobike.onrender.com/products/${_id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.acknowledged) {
          alert("Information updated successfully. ");
          reset();
        }
      });
  };

  return (
    <div>
      <h1>here you update id {_id}</h1>
      <div>
        <div className="container py-20">
          <div className="row">
            <div className="col-md-6"></div>
            <div className="col-md-6 mx-auto text-center">
              {" "}
              {/* <h5>Hello, {user?.displayName}</h5> */}
              {/* <h5> {user?.email}</h5> */}
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div>
                <img className="w-3/4 mx-auto" src={product.img} alt="" />
              </div>
              <div className="mt-4 px-4 mb-5">
                <div>
                  <h1 class="text-gray-900 text-3xl title-font font-bold mb-1">
                    {product.name}
                  </h1>
                </div>{" "}
                <div class="flex mb-">
                  <span class="flex items-center text-yellow-500">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <span class="text-gray-600 ml-3">4 Reviews</span>
                  </span>
                  <span class="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                    <a class="text-gray-500">
                      <i class="fab fa-facebook-square mx-1"></i>
                    </a>
                    <a class="text-gray-500">
                      <i class="fab fa-twitter mx-1"></i>
                    </a>
                    <a class="text-gray-500">
                      <i class="fab fa-telegram mx-1"></i>
                    </a>
                  </span>
                </div>
                <div class="flex mb-3">
                  <span class="title-font font-medium text-2xl text-gray-900">
                    <span class=" ml-auto border-0 py-3 focus:outline-none hover:bg-indigo-600 rounded">
                      Price:
                    </span>{" "}
                    $ {product.price}
                  </span>
                </div>
                <p class="leading-relaxed">{product.description}</p>
                <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                  <div class="flex">
                    <span class="mr-3">Color</span>
                    <button class="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                    <button class="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                    <button class="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>
                  </div>
                  <div class="flex ml-6 items-center">
                    <span class="mr-3">Size</span>
                    <div class="relative">
                      <select class="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                        <option>SM</option>
                        <option>M</option>
                        <option>L</option>
                        <option>XL</option>
                      </select>
                      <span class="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center mr-8">
                        <i class="fas fa-chevron-down"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 add-service px-3 bg-gray-50">
              <h2 className="text-center text-dark m-4 fw-bold">
                {" "}
                Update This Product
              </h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  {...register("name")}
                  placeholder="Product Name"
                  className="border border-dark rounded-3 p-1"
                />

                <input
                  type="number"
                  {...register("price")}
                  placeholder="Product Price"
                  className="border border-dark rounded-3 p-1"
                />

                <input
                  {...register("img")}
                  placeholder="Photo URL"
                  className="border border-dark rounded-3 p-1"
                />

                <textarea
                  {...register("details")}
                  placeholder="Detail In 1 Line"
                  className="border border-dark rounded-3 p-1"
                />

                <textarea
                  {...register("description")}
                  placeholder="Description"
                  className="border border-dark rounded-3 p-1"
                />

                <input
                  className="bg-danger text-white fw-bold rounded-pill py-2 fs-5"
                  type="submit"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProduct;
