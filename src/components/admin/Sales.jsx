import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllSales } from "../../data/actions";
import Loader from "../loader/Loader";

export const Sales = () => {
  const sales = useSelector((state) => state.admin.sales);
  const users = useSelector((state) => state.admin.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllSales());
  }, [dispatch]);

  // console.log(sales);

  const handleChange = (e) => {
    // const { name, value } = e.target;
    /*Codigo Peticion*/
  };

  return (
    <div className="container-fluid">
      <div className="bg-light mt-5 pt-2 rounded">
        <span className="h4 fst-italic">Ventas</span>
        {sales ? (
          <table className="table table-striped table-bordered mb-5">
            <thead className="table-light">
              <tr>
                <th>#</th>
                <th>Informacion</th>
                <th>Usuario</th>
                <th>Direccion</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              {sales.map((sale) => {
                return (
                  <tr key={sale._id}>
                    <td>{sale._id}</td>
                    <td>
                      <div
                        className="accordion accordion-flush"
                        _id="accordionFlushExample"
                      >
                        <div className="accordion-item">
                          <h2 className="accordion-header" _id="flush-heading">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target={"#flush-collapse-" + sale._id}
                              aria-expanded="false"
                              aria-controls={"flush-collapse-" + sale._id}
                            >
                              Informacion de la venta
                            </button>
                          </h2>
                          <div
                            id={"flush-collapse-" + sale._id}
                            className="accordion-collapse collapse"
                            aria-labelledby="flush-heading"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="accordion-body">
                              <table className="table table-striped table-hover table-bordered mb-5 align-middle">
                                <thead>
                                  <tr className="table-light">
                                    <th>#</th>
                                    <th>Nombre Producto</th>
                                    <th>Precio</th>
                                    <th>Cantidad</th>
                                    <th>Precio final</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {sale.products.length ? (
                                    sale.products.map((p) => {
                                      return (
                                        <tr key={p._id}>
                                          <td className="text-truncate td-width">
                                            {p._id}
                                          </td>
                                          <td>{p.name}</td>
                                          <td>{p.price}</td>
                                          <td>{p.quantity}</td>
                                          <td>{p.price * p.quantity}</td>
                                        </tr>
                                      );
                                    })
                                  ) : (
                                    <tr>
                                      <td colSpan={"5"}>No hay productos</td>
                                    </tr>
                                  )}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>{sale.user.name + " " + sale.user.lastname}</td>
                    {/* <td>{sale.userId}</td> */}
                    <td>
                      {sale.city}, {sale.country}
                      <br />
                      {sale.address}
                      <br />
                      {sale.reference}
                    </td>
                    <td>
                      <select
                        name="stateProduct"
                        className="form-select"
                        onChange={handleChange}
                        value={sale.status}
                      >
                        <option value="PENDING">Pendiente</option>
                        <option value="COMPLETED">Entregado</option>
                      </select>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};
