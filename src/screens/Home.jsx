import React from "react";
import { useSelector } from "react-redux";
import CardProduct from "../components/products/Card.product";
import { FaShoppingCart } from "react-icons/fa";

const Home = () => {
  const products = useSelector((state) => state.products.products);
  const cart = useSelector((state) => state.products.cart);

  // console.log(products);
  return (
    <div className="container containerToReduce">
      <div className="fixed-bottom text-end">
        <button className="btn btn-primary position-relative me-4 mb-4">
          <FaShoppingCart />
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {cart.length}+
          </span>
        </button>
      </div>
      <h1 className="text-light fw-bold fst-italic">Home</h1>
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
