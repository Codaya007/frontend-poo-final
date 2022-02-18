import React from "react";
import { useDispatch } from "react-redux";
import { deleteProduct, setProductToEdit } from "../../data/actions";

const CardProductAdmin = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="col-md-4" key={product._id}>
      <div className="card mt-4">
        <div className="card-header">
          <h4>{product.name}</h4>
          <span className="badge rounded-pill bg-success">{product.price}</span>
        </div>
        <div className="card-body">
          <p>
            <mark>{product.category}</mark>
          </p>
          <img className="img-fluid imagen" src={product.photo} alt="" />
          <p>{product.description}</p>
        </div>
        <div className="card-footer">
          <button
            className="btn btn-danger me-2"
            onClick={() => {
              dispatch(deleteProduct(product._id));
            }}
          >
            Eliminar
          </button>
          <button
            className="btn btn-primary ms-2"
            onClick={() => {
              dispatch(setProductToEdit(product));
              window.scrollTo(0, 0);
            }}
          >
            Editar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardProductAdmin;
