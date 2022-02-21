import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterByCategory,
  orderProducts,
  setOptions,
} from "../../data/actions";
import { RESTART_PRODUCTS } from "../../data/actions/types";

const Filters = () => {
  const categories = useSelector((state) => state.products.categories);
  // options -> order, orderBy
  const options = useSelector((state) => state.products.options);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    //  console.log(name + " " + value);

    dispatch(setOptions({ [name]: value }));
    dispatch(orderProducts());
  };

  const handleChangeCategories = (e) => {
    const { value } = e.target;

    if (value === "all") {
      dispatch({ type: RESTART_PRODUCTS });
    } else {
      dispatch(filterByCategory(value));
    }
    dispatch(orderProducts());
  };

  return (
    <div>
      <label className="">Ordenar por</label>
      <select
        title="orderBy"
        className=""
        name={"orderBy"}
        id={"orderBy"}
        onChange={handleChange}
        value={options.orderBy}
      >
        <option value={"name"} key={"name"}>
          {"Nombre"}
        </option>
        <option value={"price"} key={"price"}>
          {"Precio"}
        </option>
      </select>
      <select
        title="order"
        name={"order"}
        id={"order"}
        onChange={handleChange}
        value={options.order}
      >
        <option value={"asc"} key={"asc"}>
          {"Ascendente"}
        </option>
        <option value={"desc"} key={"desc"}>
          {"Descendente"}
        </option>
      </select>
      <label>Categorías</label>
      <select
        className="form-select"
        name="name"
        onChange={handleChangeCategories}
      >
        <option value={"all"}>Todas</option>
        {categories.map((e) => (
          <option key={e._id} value={e._id}>
            {e.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filters;
