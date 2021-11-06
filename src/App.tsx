import React from "react";
import About from "./components/about/About";
import Intro from "./components/intro/Intro";
import ProductList from "./components/productList/ProductList";
const App = () => {
  return (
    <div className="app">
      <Intro />
      <About />
      <ProductList />
    </div>
  );
};

export default App;
