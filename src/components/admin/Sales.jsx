import React, { useEffect, useState } from 'react';
import salesDB from '../salesDB.json';
import logo from '../logo.svg';
import '../App.css';


export const Sales = () => {
    const [sales, setSales] = useState(salesDB);

    const handleChange = (e) => {
        const { name, value } = e.target;
        /*Codigo Peticio*/
    }

    return (
        <div className='container-fluid'>
            <img src={logo} className="App-logo" alt="logo" />
            <div className='bg-light mt-5 pt-2 rounded'>
                <span className='h4'>Ventas</span>
                <table className="table table-striped table-bordered mb-5">
                    <thead className='table-light'>
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
                                <tr key={sale.id}>
                                    <td>{sale.id}</td>
                                    <td>
                                        <div className="accordion accordion-flush" id="accordionFlushExample">
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="flush-heading">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#flush-collapse-" + sale.id} aria-expanded="false" aria-controls={"flush-collapse-" + sale.id} >
                                                        Informacion de la venta
                                                    </button>
                                                </h2>
                                                <div id={"flush-collapse-" + sale.id} className="accordion-collapse collapse" aria-labelledby="flush-heading" data-bs-parent="#accordionFlushExample">
                                                    <div className="accordion-body">
                                                        <table className="table table-striped table-hover table-bordered mb-5">
                                                            <thead>
                                                                <tr className='table-light'>
                                                                    <th>#</th>
                                                                    <th>Nombre Producto</th>
                                                                    <th>Precio</th>
                                                                    <th>Cantidad</th>
                                                                    <th>Precio final</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {sale.products.map((p) => {
                                                                    return (
                                                                        <tr key={p.id}>
                                                                            <td>{p.id}</td>
                                                                            <td>{p.name}</td>
                                                                            <td>{p.price}</td>
                                                                            <td>{p.quantity}</td>
                                                                            <td>{(p.price * p.quantity)}</td>
                                                                        </tr>
                                                                    )
                                                                })}
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{sale.user.name + " " + sale.user.lastname}</td>
                                    <td>{sale.user.direction}</td>
                                    <td>
                                        <select name="stateProduct" className='form-select' onChange={handleChange} value={sales.filter((s) => s.id === sale.id)[0].stateSale}>
                                            <option value="PENDING">Pendiente</option>
                                            <option value="COMPLETED">Entregado</option>
                                        </select>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div >
    )
}
