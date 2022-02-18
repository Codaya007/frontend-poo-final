import React from "react";
import { useSelector } from "react-redux";
import CardProduct from "../components/products/Card.product";

const Home = () => {
  const products = useSelector((state) => state.products.products);

  // console.log(products);
  return (
    <div>
      <h1>Home</h1>
      {products.length ? (
        <div className="row">
          {products.map((product) => (
            <CardProduct key={product._id} product={product} />
          ))}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Home;
