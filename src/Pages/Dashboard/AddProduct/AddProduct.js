import "./AddProduct.css";
import React from "react";
import { useForm } from "react-hook-form";

const AddProduct = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    fetch("http://localhost:5000/products", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("Product Added Successfully!");
          reset();
        }
      });
  };

  return (
    <div>
      <h1 className="text-center"> Add A New Product</h1>
      <div className="add-service">
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

          <textarea
            {...register("facilities")}
            placeholder="Other Facilities"
            className="border border-dark rounded-3 p-1"
          />

          <input
            className="bg-danger text-white fw-bold rounded-pill py-2 fs-5"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
