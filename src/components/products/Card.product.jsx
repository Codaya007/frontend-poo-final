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
    <div>
      <img src={photo} alt={name} />
      <div>
        <h3>{name}</h3>
        <h2>{price}</h2>
        <h2>Productos vendidos: {sold}</h2>
      </div>
      <button onClick={inCart ? handleRemoveFromCart : handleAddCart}>
        {inCart ? "Quitar del carrito" : "Añadir al carrito"}
      </button>
    </div>
  );
};

export default CardProduct;
