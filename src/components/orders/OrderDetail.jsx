import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { BASEURL } from "../../assets/constants";
import getHeaderToken from "../../helpers/getHeaderToken";
import Loader from "../loader/Loader";

const OrderDetail = () => {
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const {
    address,
    city,
    country,
    createdAt,
    paid,
    products,
    reference,
    status,
    totalAmount,
    _id,
  } = order || {};

  useEffect(() => {
    const getOrder = async () => {
      try {
        const { data } = await axios.get(
          `${BASEURL}/order/${id}`,
          getHeaderToken()
        );
        setOrder({ ...data });
      } catch (err) {
        toast.error("No se ha podido cargar la orden");
      } finally {
        setLoading(false);
      }
    };
    getOrder();
  }, [id]);

  return loading ? (
    <Loader />
  ) : order ? (
    <div>
      <h2>Detalles del pedido</h2>
      <div>
        <div>
          <h4>ID del pedido</h4>
          <p>{_id}</p>
        </div>
        <div>
          <h4>Fecha</h4>
          <p>{createdAt.split("T")[0]}</p>
        </div>
        <div>
          <h4>Estado</h4>
          <p>{paid ? "Pagado" : "No pagado"}</p>
        </div>
        {paid && (
          <div>
            <h4>Entrega</h4>
            <p>{status}</p>
          </div>
        )}
      </div>
      <div>
        <h3>Dirección de envío:</h3>
        <div>
          <h4>País</h4>
          <p>{country}</p>
        </div>
        <div>
          <h4>Ciudad</h4>
          <p>{city}</p>
        </div>
        <div>
          <h4>Dirección</h4>
          <p>{address}</p>
        </div>
        <div>
          <h4>Referencia</h4>
          <p>{reference}</p>
        </div>
      </div>
      <h3>Productos comprados</h3>
      <table>
        <thead>
          <tr>
            <td>ID</td>
            <td>Producto</td>
            <td>Precio Unitario</td>
            <td>Cantidad</td>
            <td>Subtotal</td>
          </tr>
        </thead>
        <tbody>
          {products.map((prod) => {
            return (
              <tr key={prod._id}>
                <td>{prod._id}</td>
                <td>{prod.name}</td>
                <td>{prod.price}</td>
                <td>{prod.quantity}</td>
                <td>{prod.quantity * prod.price}</td>
              </tr>
            );
          })}
          <tr>
            <td colSpan={"4"}>Total</td>
            <td>${totalAmount}</td>
          </tr>
        </tbody>
      </table>
    </div>
  ) : (
    <div>No hay datos</div>
  );
};

export default OrderDetail;
