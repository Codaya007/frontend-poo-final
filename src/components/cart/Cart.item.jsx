import { useDispatch } from "react-redux";
import { addToCart, delFromCart } from "../../data/actions";

const CartItem = ({ data }) => {
  let { _id, name, price, quantity, photo } = data;
  const dispatch = useDispatch();

  return (
    <tr>
      <td>
        <img style={{ width: "120px" }} src={photo} alt={name} />
      </td>
      <td>{name}</td>
      <td>${price}</td>
      <td>
        <button onClick={() => dispatch(delFromCart(_id, false))}>-</button>
        {quantity}
        <button onClick={() => dispatch(addToCart(_id))}>+</button>
      </td>
      <td>${Math.round(price * quantity * 100) / 100}</td>
      <td>
        <button onClick={() => dispatch(delFromCart(_id, true))}>Quitar</button>
      </td>
    </tr>
  );
};

export default CartItem;
