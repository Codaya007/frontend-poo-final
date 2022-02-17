import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart, setOrder } from "../../data/actions";
import CartItem from "./Cart.item";

const Cart = () => {
  const cart = useSelector((state) => state.products.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div>
      <h2>Carrito de Compras</h2>
      {cart.length ? (
        <>
          <table className="box">
            <thead>
              <tr>
                <td>Producto</td>
                <td>Precio Unitario</td>
                <td>Cantidad</td>
                <td>Acciones</td>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <CartItem key={index} data={item} />
              ))}
            </tbody>
          </table>
          <nav>
            <button onClick={() => dispatch(clearCart())}>
              Vaciar Carrito
            </button>
            <button
              onClick={() => {
                navigate(`/order/envio`);
              }}
            >
              Comprar
            </button>
          </nav>
        </>
      ) : (
        <div>Aún no ha guardado productos en el carrito</div>
      )}
    </div>
  );
};

export default Cart;
