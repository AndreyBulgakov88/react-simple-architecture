import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Product from "./pages/Product";
import styles from './styles.scss';
 
ReactDOM.render(
  <BrowserRouter>
    <div className={styles.container}>
      <Header />
      <Route exact path="/" component={Product} />
      <Route path="/product" component={Home} />
      <Footer />
    </div>
  </BrowserRouter>, 
    document.getElementById("index")
);