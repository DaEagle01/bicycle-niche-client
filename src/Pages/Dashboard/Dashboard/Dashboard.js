import React from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import AdminRoute from "../../Authentication/AdminRoute/AdminRoute";
import AddProduct from "../AddProduct/AddProduct";
import AllOrders from "../AllOrders/AllOrders";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import ManageProduct from "../ManageProduct/ManageProduct";
import MyOrder from "../MyOrder/MyOrder";
import Payment from "../Pay/Payment";
import Review from "../Review/Review";
import UpdateProduct from "../UpdateProduct/UpdateProduct";

const Dashboard = () => {
  const { user, admin, isLoading, logOut } = useAuth();
  let { path, url } = useRouteMatch();
  return (
    <div className="md:container mx-auto">
      <div class="flex flex-wrap bg-gray-100 w-full pb-10">
        <div class="w-3/12 bg-white rounded p-3 shadow-lg">
          <div class="md:flex items-center space-x-4 p-2 mb-5">
            <img
              class="h-12 rounded-full "
              src={user?.photoURL}
              alt={user?.displayName}
            />
            <div className="md:ml-6">
              <h4 class="font-semibold lg:text-lg md:text-lg text-sm text-gray-700 capitalize font-poppins tracking-wide md:ml-6 md:-ml-6 -ml-10  mt-4">
                {user?.displayName}
              </h4>
              <span class="text-sm tracking-wide flex items-center space-x-1 -ml-6 md:ml-6">
                <svg
                  class="h-4 text-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
                <span class="text-gray-600 ">Verified</span>
              </span>
            </div>
          </div>
          <ul class="space-y-2 -ml-14 md:m-0 text-sm">
            {!admin && (
              <>
                <li>
                  <Link
                    to={`${url}/myorders`}
                    class="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
                  >
                    <span class="text-gray-600">
                      <svg
                        class="h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                        ></path>
                      </svg>
                    </span>
                    <span>My Orders</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to={`${url}/review`}
                    class="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
                  >
                    <span class="text-gray-600">
                      <svg
                        class="h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                        ></path>
                      </svg>
                    </span>
                    <span>Review</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to={`${url}/pay`}
                    class="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
                  >
                    <span class="text-gray-600">
                      <svg
                        class="h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </span>
                    <span>Payment</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to={`${url}/logout`}
                    onClick={logOut}
                    class="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
                  >
                    <span class="text-gray-600">
                      <svg
                        class="h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                        />
                      </svg>
                    </span>
                    <span>Logout</span>
                  </Link>
                </li>
              </>
            )}

            {admin && (
              <>
                {" "}
                <li>
                  <Link
                    to={`${url}/manageorders`}
                    class="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
                  >
                    <span class=" text-gray-600">
                      <svg
                        class="h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                    </span>
                    <span>Manage Order</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to={`${url}/manageproducts`}
                    class="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
                  >
                    <span class=" text-gray-600">
                      <svg
                        class="h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                    </span>
                    <span>Manage Product</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to={`${url}/addproduct`}
                    class="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
                  >
                    <span class="text-gray-600">
                      <svg
                        class="h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                        ></path>
                      </svg>
                    </span>
                    <span>Add Product</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to={`${url}/makeadmin`}
                    class="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
                  >
                    <span class="text-gray-600">
                      <svg
                        class="h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        />
                      </svg>
                    </span>
                    <span>Make Admin </span>
                  </Link>
                </li>
                <li>
                  <Link
                    to={`${url}/adminlogout`}
                    onClick={logOut}
                    class="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
                  >
                    <span class="text-gray-600">
                      <svg
                        class="h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                        />
                      </svg>
                    </span>
                    <span>Admin Logout</span>
                  </Link>
                </li>{" "}
              </>
            )}
          </ul>
        </div>

        <div class="w-9/12">
          <div class="p-4 text-gray-500">
            <Switch>
              <Route exact path={path}>
                {/* <MyBookings></MyBookings> */}
              </Route>
              <Route exact path={`${path}/myorders`}>
                <MyOrder></MyOrder>
              </Route>
              <Route exact path={`${path}/review`}>
                <Review></Review>
              </Route>
              <Route exact path={`${path}/pay`}>
                <Payment></Payment>
              </Route>
              <AdminRoute exact path={`${path}/makeAdmin`}>
                <MakeAdmin></MakeAdmin>
              </AdminRoute>
              <AdminRoute exact path={`${path}/manageorders`}>
                <AllOrders></AllOrders>
              </AdminRoute>
              <AdminRoute exact path={`${path}/manageproducts`}>
                <ManageProduct></ManageProduct>
              </AdminRoute>
              <AdminRoute exact path={`${path}/manageproducts/:_id`}>
                <UpdateProduct></UpdateProduct>
              </AdminRoute>
              <AdminRoute exact path={`${path}/addproduct`}>
                <AddProduct></AddProduct>
              </AdminRoute>
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
