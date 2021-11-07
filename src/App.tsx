import React from "react";
import { useSelector } from "react-redux";
import { State } from "./state";
import About from "./components/about/About";
import Contact from "./components/contact/Contact.js";
import Intro from "./components/intro/Intro";
import ProductList from "./components/productList/ProductList";
import CSS from 'csstype';
import Toggle from "./components/toggle/Toggle";
const App = () => {
const state = useSelector((state: State) => state);
const styles: CSS.Properties= {
  backgroundColor: state.toggle.data ? "#222" : "white",
  color: state.toggle.data ? "white" : "",
  transition: "all 0.5s ease"
};
  return (
    <div
      className="app"
      style={styles}
    >
      <Toggle />
      <Intro />
      <About />
      <ProductList />
      <Contact />
    </div>
  );
};

export default App;
