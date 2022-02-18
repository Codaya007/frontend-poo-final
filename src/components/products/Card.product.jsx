import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, delFromCart } from "../../data/actions";

const CardProduct = ({ product }) => {
  const { name, photo, price, sold, _id } = product;
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.products.cart);
  const [inCart, setInCart] = useState(cart.find((e) => e._id === _id));

  const handleAddCart = (e) => {
    dispatch(addToCart(_id));
    setInCart(true);
  };

  const handleRemoveFromCart = (e) => {
    dispatch(delFromCart(_id, true));
    setInCart(false);
  };

  return (
    <div className="col-md-3" key={product._id}>
      <div className="card mt-4 mb-4 ms-3 me-3 rounded-15">
        <div className="card-header">
          <h5>{product.name}</h5>
          <span className="badge rounded-15 bg-success">{product.price}</span>
        </div>
        <div className="card-body">
          <img className="img-fluid imagen" src={product.photo} alt="" />
          <div className="dropend b-grid">
            <button className="btn btn-info dropdown-toggle" type="button" id={"dropdownMenu" + product._id} data-bs-toggle="dropdown" aria-expanded="false">
              Descripcion
            </button>
            <ul className="dropdown-menu bg-secondary" aria-labelledby={"dropdownMenu" + product._id}>
              <p className="ps-2 pe-2 text-light text-justify">{product.description}</p>
            </ul>
          </div>
        </div>
        <div className="card-footer">
          <button className="btn btn-primary" onClick={inCart ? handleRemoveFromCart : handleAddCart}>
            {inCart ? "Quitar del carrito" : "Añadir al carrito"}
          </button>
        </div>
      </div>
    </div >
  );
};

export default CardProduct;
