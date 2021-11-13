import React, { useEffect, useState } from "react";
import useAuth from "../../../Hooks/useAuth";

const MyOrder = () => {
  const [allProduct, setAllProduct] = useState([]);
  const [status, setStatus] = useState(null);
  const { user, logOut } = useAuth();
  const email = user?.email;

  useEffect(() => {
    fetch(`https://peaceful-peak-38584.herokuapp.com/orders/${email}`)
      .then((res) => res.json())
      .then((data) => setAllProduct(data));
  }, [status]);

  const handleDelete = (_id) => {
    if (window.confirm("Are you sure you want to delete it?")) {
      fetch(`https://peaceful-peak-38584.herokuapp.com/orders/${_id}`, {
        method: "DELETE",
        headers: { "content-type": "application/json" },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data?.acknowledged) {
            setStatus(true);
            console.log("order deleted ");
          }
        });
    }
  };

  return (
    <div>
      <h1>this is my orders</h1>
      <div>
        <div class="flex flex-row mb-1 sm:mb-0 justify-between w-full">
          <h2 class="text-2xl leading-tight">
            All Orders {allProduct.length}{" "}
          </h2>
          <div class="text-end">
            <form class="flex flex-col md:flex-row w-3/4 md:w-full max-w-sm md:space-x-3 space-y-3 md:space-y-0 justify-center">
              <div class=" relative ">
                <input
                  type="text"
                  id='"form-subscribe-Filter'
                  class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-3 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="name"
                />
              </div>
              <button
                class="flex-shrink-0 px-4 py-3 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
                type="submit"
              >
                Filter
              </button>
            </form>
          </div>
        </div>

        <div class="container mx-auto md:px-4 sm:px-8 max-w-3xl">
          <div class="py-8">
            <div class="-mx-4 sm:-mx-8 md:px-4 sm:px-8 py-4 overflow-x-auto">
              <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
                <table class="min-w-full leading-normal">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        class="px-2 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                      >
                        User
                      </th>
                      <th
                        scope="col"
                        class="px-2 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                      >
                        Product
                      </th>
                      <th
                        scope="col"
                        class="px-2 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                      >
                        Email
                      </th>
                      <th
                        scope="col"
                        class="px-2 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                      >
                        Date
                      </th>
                      <th
                        scope="col"
                        class="px-2 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                      >
                        Cancel
                      </th>
                      <th
                        scope="col"
                        class="px-2 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                      ></th>
                    </tr>
                  </thead>
                  {allProduct.map((singleProduct) => (
                    <tbody>
                      <tr>
                        <td class="px-2 py-3 border-b border-gray-200 bg-white text-sm">
                          <div class="flex items-center">
                            <div class="flex-shrink-0">
                              <a href="#nothing" class="block relative">
                                <img
                                  alt="prod-pic"
                                  src={singleProduct?.img}
                                  class="mx-auto object-cover rounded-full h-10 w-10 "
                                />
                              </a>
                            </div>
                            <div class="ml-3">
                              <p class="text-gray-900 whitespace-no-wrap">
                                {singleProduct.name}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td class="px-2 py-3 border-b border-gray-200 bg-white text-sm">
                          <p class="text-gray-900 whitespace-no-wrap">
                            {singleProduct.bikeName}
                          </p>
                        </td>
                        <td class="px-2 py-3 border-b border-gray-200 bg-white text-sm">
                          <p class="text-gray-900 whitespace-no-wrap">
                            {singleProduct.email}
                          </p>
                        </td>
                        <td class="px-2 py-3 border-b border-gray-200 bg-white text-sm">
                          <p class="text-gray-900 whitespace-no-wrap">
                            {singleProduct.date}
                          </p>
                        </td>

                        <td class="px-2 py-3 border-b border-gray-200 bg-white text-sm">
                          <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                            <span
                              aria-hidden="true"
                              class="absolute inset-0 bg-danger bg-green-200 opacity-100 rounded-full"
                            ></span>
                            <button
                              onClick={() => handleDelete(singleProduct._id)}
                              class="relative btn btn-danger rounded-pill"
                            >
                              Cancel
                            </button>
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  ))}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyOrder;
