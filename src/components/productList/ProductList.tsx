import React from "react";
import Product from "../product/Product";
import "./ProductList.css";
import { products } from "src/data";
const ProductList: React.FC<{}> = () => {
  console.log(products);
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Create & inspire. It's Lama</h1>
        <p className="pl-desc">
          Lama is a creative portfolio that your work has been waiting for.
          Beautiful homes, stunning portfolio styles & a whole lot more awaits
          inside.
        </p>
      </div>
      <div className="pl-list">
        {products.map(product => (
          <Product key={product.id} img={product.img} link={product.link} />
        ))}
      </div>
    </div>
  );
};
export default ProductList;
