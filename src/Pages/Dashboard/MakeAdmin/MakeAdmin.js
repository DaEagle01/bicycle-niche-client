import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import useAuth from "../../../Hooks/useAuth";

const MakeAdmin = () => {
  const [data, setData] = useState({});
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const { user, registerUser, isLoading } = useAuth();

  const makeAdminInfo = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newdata = { ...data };
    newdata[field] = value;
    setData(newdata);
  };
  const handleMakeAdmin = (e) => {
    e.preventDefault();
    if (data.email !== data.email2) {
      setError("Email didn't match. Type Correctly");
      return;
    }
    const user = data?.email;
    const userEmail = { user };
    fetch("https://peaceful-peak-38584.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userEmail),
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
      <div class="w-full md:my-16 font-sans bg-cover bg-landscape">
        <div class="container flex items-center justify-center flex-1 h-full mx-auto">
          <div class="w-full max-w-lg">
            <div class="leading-loose">
              <form
                class="max-w-sm p-10 m-auto bg-white bg-opacity-25 rounded shadow-xl"
                onSubmit={handleMakeAdmin}
              >
                <p class="mb-8 text-2xl font-bold text-center text-gray-700">
                  Make Admin
                </p>
                <div class="mb-2">
                  <div class=" relative ">
                    <input
                      type="email"
                      name="email"
                      onBlur={makeAdminInfo}
                      id="login-with-bg-email"
                      class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="Enter Email"
                    />
                  </div>
                </div>
                <div class="mb-2">
                  <div class=" relative ">
                    <input
                      type="email"
                      name="email2"
                      onBlur={makeAdminInfo}
                      id="login-with-bg-password"
                      class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="Confirm Email"
                    />
                  </div>
                </div>
                {success && (
                  <Alert severity="success">Made Admin successfully!</Alert>
                )}
                {error && (
                  <p severity="success" className="text-red-600">
                    Email didn't match.Please, type correctly!
                  </p>
                )}
                <div class="flex items-center justify-between mt-4">
                  <button
                    type="submit"
                    class="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                  >
                    Make Admin
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakeAdmin;
