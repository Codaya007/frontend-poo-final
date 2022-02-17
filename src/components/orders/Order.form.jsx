import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createOrder } from "../../data/actions";
import FormInput from "../inputs/input.component";
import Loader from "../loader/Loader";

const initialState = {
  country: "",
  city: "",
  address: "",
  reference: "",
};

const validateForm = (form) => {
  const { country, city, address, reference } = form;
  const errors = {};

  if (!country) {
    errors.country = "Campo requerido";
  }
  if (!city) {
    errors.city = "Campo requerido";
  }
  if (!address) {
    errors.address = "Campo requerido";
  }
  if (!reference) {
    errors.reference = "Campo requerido";
  }

  return errors;
};

const OrderForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const cart = useSelector((state) => state.products.cart);
  const loadingOrder = useSelector((state) => state.orders.loadingOrders);
  const createdOrder = useSelector((state) => state.orders.createdOrder);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newForm = { ...form, [name]: value };

    setForm(newForm);
    setErrors(validateForm(newForm));
  };

  const handleCancelar = (e) => {
    navigate("/");
    toast.info("Se ha cancelado la orden");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const currentErrors = validateForm(form);
    setErrors(currentErrors);

    if (Object.keys(currentErrors).length) {
      toast.warn("El formulario contiene errores");
    } else {
      const order = {
        ...form,
        products: cart.map((e) => ({
          productId: e._id,
          quantity: e.quantity,
        })),
      };
      dispatch(createOrder(order));
    }
  };

  useEffect(() => {
    if (createdOrder) {
      navigate(`/order/${createdOrder._id}`);
    }
  }, [loadingOrder, createdOrder, navigate]);

  return (
    <div>
      <h2>Dirección de envío</h2>
      <form onSubmit={handleSubmit}>
        <FormInput
          type={"text"}
          title={"País"}
          name={"country"}
          placeholder="Ecuador"
          value={form.country}
          handleChange={handleChange}
        />
        {errors.country && <span>{errors.country}</span>}
        <FormInput
          type={"text"}
          title={"Ciudad"}
          name={"city"}
          placeholder="Loja"
          value={form.city}
          handleChange={handleChange}
        />
        {errors.city && <span>{errors.city}</span>}
        <FormInput
          type={"text"}
          title={"Dirección"}
          name={"address"}
          placeholder="Av. Occidental y Luis Crespo"
          value={form.address}
          handleChange={handleChange}
        />
        {errors.address && <span>{errors.address}</span>}
        <FormInput
          type={"text"}
          title={"Referencia"}
          name={"reference"}
          placeholder="Junto a la tienda Camila..."
          value={form.reference}
          handleChange={handleChange}
        />
        {errors.reference && <span>{errors.reference}</span>}
        <button onClick={handleSubmit}>Guardar datos</button>
        <button onClick={handleCancelar}>Cancelar</button>
      </form>
      <h2>Productos a comprar</h2>
      <table>
        <thead>
          <tr>
            <td>ID</td>
            <td>Detalle</td>
            <td>Cantidad</td>
            <td>Precio Unitario</td>
            <td>Subtotal</td>
          </tr>
        </thead>
        <tbody>
          {cart.length &&
            cart.map((e) => {
              return (
                <tr key={e._id}>
                  <td>{e._id}</td>
                  <td>{e.name}</td>
                  <td>{e.quantity}</td>
                  <td>{e.price}</td>
                  <td>{e.price * e.quantity}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
      {loadingOrder && <Loader />}
    </div>
  );
};

export default OrderForm;
