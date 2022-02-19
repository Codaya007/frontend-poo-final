import React from "react";
import { useSelector } from "react-redux";
import CardProduct from "../components/products/Card.product";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const products = useSelector((state) => state.products.products);
  const cart = useSelector((state) => state.products.cart);
  const navigate = useNavigate();

  // console.log(products);
  return (
    <div className="container containerToReduce">
      <div className="text-end mt-2">
        <form className="d-flex ms-3">
          <input className="form-control me-2 text-login" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-success text-login" type="submit">Search</button>
        </form>
      </div>
      <div className="fixed-bottom text-end">
        <button
          onClick={() => navigate("/cart")}
          className="btn btn-primary position-relative me-4 mb-4"
        >
          <FaShoppingCart />
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
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
