import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { BASEURL } from "../assets/constants";
import Loader from "../components/loader/Loader";
import { addToCart } from "../data/actions";

const Productdetail = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const { name, description, price, category, quantity, photo } = product || {};
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const { data } = await axios.get(`${BASEURL}/product/${id}`);
        setProduct({ ...data });
      } catch (err) {
        toast.error("No se ha obtener la información del producto");
      } finally {
        setLoading(false);
      }
    };
    getProduct();
  }, [id]);

  return loading ? (
    <Loader />
  ) : product ? (
    <div>
      <h2>{name}</h2>
      <img src={photo} alt={name} />
      <div>
        <h3>Descripción</h3>
        <p>{description}</p>
      </div>
      <div>
        <h3>Precio</h3>
        <p>{price}</p>
      </div>
      <div>
        <h3>Categoría</h3>
        <p>{category}</p>
      </div>
      <div>
        <h3>Cantidad</h3>
        <p>{quantity}</p>
      </div>
      {quantity > 0 && (
        <button onClick={dispatch(addToCart(id))}>Añadir al carrito</button>
      )}
    </div>
  ) : (
    <div>
      <h3>404</h3>
      <div>Producto no encontrado</div>
    </div>
  );
};

export default Productdetail;
