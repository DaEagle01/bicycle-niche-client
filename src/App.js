import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./Pages/LandingPage/Home/Home";
import Error from "./Pages/ErrorPage/Error";
import Header from "./Pages/LandingPage/Header/Header";
import Footer from "./Pages/LandingPage/Footer/Footer";
import Register from "./Pages/Authentication/Register/Register";
import Login from "./Pages/Authentication/Login/Login";
import Products from "./Pages/LandingPage/Products/Products";
import ExploreProducts from "./Pages/Products/ExploreProducts/ExploreProducts";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Purchase from "./Pages/Products/Purchase/Purchase";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/explore">
            <ExploreProducts></ExploreProducts>
          </Route>
          <Route path="/purchase/:id">
            <Purchase></Purchase>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="*">
            <Error></Error>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
