import React from "react";
import { useNavigate } from "react-router-dom";

const OrderItem = ({ order }) => {
  const navigate = useNavigate();
  const { createdAt, products, status, totalAmount } = order;

  const handleClickDetail = () => {
    navigate(`/order/${order._id}`);
  };

  return (
    <tr>
      <td>{createdAt.split("T")[0]}</td>
      <td>{products.length} artículos</td>
      <td>US${totalAmount}</td>
      <td>{status}</td>
      <td onClick={handleClickDetail}>Detalle del pedido</td>
    </tr>
  );
};

export default OrderItem;
