import React from "react";
import { useDispatch } from "react-redux";
import { loadOrderDetail } from "../../data/actions";
import { useNavigate } from "react-router-dom";

const OrderItem = ({ order }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { createdAt, products, status, totalAmount } = order;

  const handleClickDetail = () => {
    dispatch(loadOrderDetail(order));
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
