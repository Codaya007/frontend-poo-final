import { useDispatch } from "react-redux";
import { addToCart, delFromCart } from "../../data/actions";

const CartItem = ({ data }) => {
  let { _id, name, price, quantity } = data;
  const dispatch = useDispatch();

  return (
    <tr>
      <td>{name}</td>
      <td>${price}</td>
      <td>
        <button onClick={() => dispatch(delFromCart(_id, false))}>-</button>
        {quantity}
        <button onClick={() => dispatch(addToCart(_id))}>+</button>
      </td>
      <td>
        <button onClick={() => dispatch(delFromCart(_id, true))}>Quitar</button>
      </td>
    </tr>
  );
};

export default CartItem;
