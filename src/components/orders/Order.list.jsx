import React from "react";
import { useSelector } from "react-redux";
import OrderItem from "./Order.item";

const OrderList = () => {
  const orders = useSelector((state) => state.orders.miOrders);

  return (
    <table>
      <thead>
        <tr>
          <td>Fecha</td>
          <td>Productos</td>
          <td>Precio</td>
          <td>Estado</td>
          <td>Acción</td>
        </tr>
      </thead>
      <tbody>
        {orders.map((order) => (
          <OrderItem key={order._id} order={order} />
        ))}
      </tbody>
    </table>
  );
};

export default OrderList;
