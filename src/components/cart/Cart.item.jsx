const CartItem = ({ data, delOneFromCart, delAllFromCart }) => {
  let { id, name, price, quantity } = data;

  return (
    <div>
      <h4>{name}</h4>
      <h5>
        ${price} {quantity} = ${price * quantity}
      </h5>
      <button onClick={() => delOneFromCart(id)}>Eliminar Uno</button>
      <br />
      <button onClick={() => delAllFromCart(id, true)}>Eliminar Todos</button>
      <br />
      <br />
    </div>
  );
};

export default CartItem;
