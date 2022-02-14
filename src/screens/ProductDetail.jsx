import React from "react";

const Productdetail = ({ product }) => {
  const {
    name = "Bicicleta",
    description = "Muy bonita xd",
    price = 250,
    category = "Nose",
    quantity = 0,
    photo,
  } = product;
  return (
    <div>
      <h2>{name}</h2>
      <img src={photo} alt={name} />
      <div>
        <h3>Descripción</h3>
        <p>{description}</p>
      </div>
      <div>
        <h3>Precio</h3>
        <p>{price}</p>
      </div>
      <div>
        <h3>Categoría</h3>
        <p>{category}</p>
      </div>
      <div>
        <h3>Cantidad</h3>
        <p>{quantity}</p>
      </div>
      {quantity > 0 && <button>Añadir al carrito</button>}
    </div>
  );
};

export default Productdetail;
