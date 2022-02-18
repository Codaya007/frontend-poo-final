import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart, setOrder } from "../../data/actions";
import CartItem from "./Cart.item";
const Cart = () => {
  const cart = useSelector((state) => state.products.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="d-flex flex-column justify-content-center">
      <h2 className="text-light fst-italic">Carrito de Compras</h2>
      {cart.length ? (
        <div className="bg-light rounded-15 pt-2 pb-2 pe-3 ps-3">
          <table className="table stable striped align-middle">
            <thead>
              <tr>
                <td colSpan={"2"}>Producto</td>
                <td>Precio Unitario</td>
                <td>Cantidad</td>
                <td>Subtotal</td>
                <td>Acciones</td>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <CartItem key={index} data={item} />
              ))}
            </tbody>
          </table>
          <nav className="d-grid justify-content-center d-md-flex gap-3">
            <button className="btn btn-secondary" onClick={() => dispatch(clearCart())}>
              Vaciar Carrito
            </button>
            <button className="btn btn-primary"
              onClick={() => {
                navigate(`/order/envio`);
              }}
            >
              Comprar
            </button>
          </nav>
          <div className="mt-3 mb-3">
            <span className="fw-bold h5">Precio Total: $  </span>
            {Math.round(
              cart.reduce((prev, e) => prev + e.price * e.quantity, 0) * 100
            ) / 100}
          </div>
        </div>
      ) : (
        <div>
          <span className="text-light h3 mt-6 fst-italic">Aún no ha guardado productos en el carrito</span>
          <span></span>
        </div>
      )}
    </div>
  );
};

export default Cart;
