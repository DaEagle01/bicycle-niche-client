import React from "react";
import Blog from "../Blog/Blog";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import Offers from "../Offers/Offers";
import Partner from "../Partner/Partner";
import Products from "../Products/Products";
import Reviews from "../Reviews/Reviews";
import Subscribe from "../Subscribe/Subscribe";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Products></Products>
      {/* <Offers></Offers> */}
      <Reviews></Reviews>
      <Partner></Partner>
      <Subscribe></Subscribe>
      {/* <Blog></Blog> */}
    </div>
  );
};

export default Home;
