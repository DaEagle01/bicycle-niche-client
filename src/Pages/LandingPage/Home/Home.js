import React from "react";
import Blog from "../Blog/Blog";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import Offers from "../Offers/Offers";
import Products from "../Products/Products";
import Reviews from "../Reviews/Reviews";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Hero></Hero>
      <Products></Products>
      <Offers></Offers>
      <Reviews></Reviews>
      <Blog></Blog>
      <Footer></Footer>
    </div>
  );
};

export default Home;
