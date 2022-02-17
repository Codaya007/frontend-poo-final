import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart, delFromCart, loadOrder } from "../../data/actions";
import CartItem from "./Cart.item";

const Cart = () => {
  const cart = useSelector((state) => state.products.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div>
      <h2>Carrito de Compras</h2>
      <article className="box">
        {cart.map((item, index) => (
          <CartItem
            key={index}
            data={item}
            delOneFromCart={() => dispatch(delFromCart(item.id))}
            delAllFromCart={() => dispatch(delFromCart(item.id, true))}
          />
        ))}
        <button onClick={() => dispatch(clearCart())}>Vaciar Carrito</button>
        <button
          onClick={() => {
            dispatch(loadOrder({ products: cart }));
            navigate(`/order/envio`);
          }}
        >
          Comprar
        </button>
      </article>
    </div>
  );
};

export default Cart;
