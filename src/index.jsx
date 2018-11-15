import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "components/Header";
import Footer from "components/Footer";
import Home from "pages/Home";
import Product from "pages/Product";
import './index.scss';
 
ReactDOM.render(
  <BrowserRouter>
    <div>
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/product" component={Product} />
      <Footer />
    </div>
  </BrowserRouter>, 
    document.getElementById("index")
);