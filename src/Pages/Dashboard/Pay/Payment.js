import React from "react";
import "./Payment.css";

const Payment = () => {
  return (
    <div>
      <div class="bg-gray-100 flex items-center justify-center md:px-5 px- md:pb-10 md:pt-16 pt-8">
        <div
          class="w-full mx-auto rounded-lg bg-white shadow-lg p-3 text-gray-700"
          style={{ maxWidth: "600px" }}
        >
          <div class="w-full pt-1 pb-3 md:pb-5">
            <div class="bg-indigo-500 text-white overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg flex justify-center items-center">
              <i class="mdi mdi-credit-card-outline text-3xl"></i>
            </div>
          </div>
          <div class="mb-10">
            <h1 class="text-center font-bold md:text-xl text-lg uppercase">
              Secure payment info
            </h1>
            <h1 class="text-center font-bold md:text-xl text-base text-purple-600 uppercase">
              Payment system coming soon.
            </h1>
          </div>
          <div class="mb-3 flex md:flex-row flex-col -mx-2">
            <div class="px-2">
              <label for="type1" class="flex items-center cursor-pointer">
                <input
                  type="radio"
                  class="form-radio h-5 w-5 text-indigo-500"
                  name="type"
                  id="type1"
                  checked
                />
                <img
                  src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png"
                  class="h-8 ml-1 p-1"
                  alt=""
                />
              </label>
            </div>
            <div class="px-2">
              <label for="type2" class="flex items-center cursor-pointer">
                <input
                  type="radio"
                  class="form-radio h-5 w-5 text-indigo-500"
                  name="type"
                  id="type2"
                />
                <img
                  src="https://www.sketchappsources.com/resources/source-image/PayPalCard.png"
                  class="h-8 ml-3 "
                  alt=""
                />
              </label>
            </div>
          </div>
          <div class="mb-3">
            <label class="font-bold text-sm mb-2 ml-1">Name on card</label>
            <div>
              <input
                class="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                placeholder="John Smith"
                type="text"
              />
            </div>
          </div>
          <div class="mb-3">
            <label class="font-bold text-sm mb-2 ml-1">Card number</label>
            <div>
              <input
                class="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                placeholder="0000 0000 0000 0000"
                type="text"
              />
            </div>
          </div>
          <div class="mb-3 -mx-2 flex items-end">
            <div class="px-2 w-1/2">
              <label class="font-bold text-sm mb-2 ml-1">Expiration date</label>
              <div>
                <select class="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
                  <option value="01">01 - January</option>
                  <option value="02">02 - February</option>
                  <option value="03">03 - March</option>
                  <option value="04">04 - April</option>
                  <option value="05">05 - May</option>
                  <option value="06">06 - June</option>
                  <option value="07">07 - July</option>
                  <option value="08">08 - August</option>
                  <option value="09">09 - September</option>
                  <option value="10">10 - October</option>
                  <option value="11">11 - November</option>
                  <option value="12">12 - December</option>
                </select>
              </div>
            </div>
            <div class="px-2 w-1/2">
              <select class="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
                <option value="2027">2027</option>
                <option value="2028">2028</option>
                <option value="2029">2029</option>
              </select>
            </div>
          </div>
          <div class="mb-10">
            <label class="font-bold text-sm mb-2 ml-1">Security code</label>
            <div>
              <input
                class="w-32 px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                placeholder="000"
                type="text"
              />
            </div>
          </div>
          <div>
            <button class="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">
              <i class="mdi mdi-lock-outline mr-1"></i> PAY NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
