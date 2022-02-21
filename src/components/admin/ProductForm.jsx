import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createProduct,
  setProductToEdit,
  updateProduct,
} from "../../data/actions";

const initialForm = {
  name: "",
  description: "",
  price: "",
  category: "",
  quantity: "",
  photo: "",
};

const ProductForm = () => {
  const categories = useSelector((state) => state.products.categories);
  const productToEdit = useSelector((state) => state.products.productToEdit);
  const [form, setForm] = useState(productToEdit || initialForm);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleEdit = (e, id) => {
    e.preventDefault();

    dispatch(updateProduct(form));
    setForm(initialForm);
    dispatch(setProductToEdit(null));
  };

  const handleCreate = (e) => {
    e.preventDefault();

    dispatch(createProduct(form));
    setForm(initialForm);
  };

  const handleCleanFields = (e) => {
    e.preventDefault();

    setForm(initialForm);
    dispatch(setProductToEdit(null));
  };

  useEffect(() => {
    productToEdit && setForm(productToEdit);
  }, [productToEdit]);

  return (
    <div className="card">
      <span className="h3 mt-90" id="Productos">
        Productos
      </span>
      <form className="card-body row">
        <div className="form-group col-sm-4 mb-3">
          <input
            className="form-control"
            type="text"
            name="name"
            placeholder="name"
            onChange={handleChange}
            value={form.name}
          ></input>
        </div>
        <div className="form-group col-sm-8 mb-3">
          <input
            className="form-control"
            type="text"
            name="description"
            placeholder="description"
            onChange={handleChange}
            value={form.description}
          ></input>
        </div>
        <div className="input-group col mb-3">
          <span className="input-group-text">$ </span>
          <input
            className="form-control"
            type="text"
            name="price"
            placeholder="price"
            onChange={handleChange}
            value={form.price}
          ></input>
        </div>
        <div className="input-group col mb-3">
          <input
            className="form-control"
            type="number"
            name="quantity"
            placeholder="quantity"
            onChange={handleChange}
            value={form.quantity}
          ></input>
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text">Url</span>
          <input
            className="form-control"
            type="text"
            name="photo"
            placeholder="photo"
            onChange={handleChange}
            value={form.photo}
          ></input>
          <select
            className="form-select"
            onChange={handleChange}
            name="category"
            value={form.category}
          >
            {categories.map((e) => (
              <option key={e._id} value={e._id}>
                {e.name}
              </option>
            ))}
          </select>
        </div>
        <div className="col-auto ms-4">
          <button
            onClick={
              productToEdit
                ? (e) => handleEdit(e, productToEdit.id)
                : handleCreate
            }
            className="btn btn-primary"
          >
            {productToEdit ? "Guardar" : "Añadir"}
          </button>
          &nbsp;&nbsp;&nbsp;
          <button onClick={handleCleanFields} className="btn btn-primary">
            Limpiar campos
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
