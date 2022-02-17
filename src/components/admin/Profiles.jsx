import React, { useState } from 'react';

export const Profiles = () => {


    return (
        <div className='container dashboard-Admin'>
            <div className='bg-light mt-5 pt-2 rounded'>
                <span className='h4'>Admin</span>
                <table className="table table-striped table-hover table-bordered mb-5">
                    <thead>
                        <tr className='table-light'>
                            <th>#</th>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {accounts.map((account) => {
                            if (account.category === "admin") {
                                return (
                                    <tr key={account._id}>
                                        <td>{account._id}</td>
                                        <td>{account.name}</td>
                                        <td>{account.lastname}</td>
                                        <td>{account.email}</td>
                                    </tr>
                                )
                            }
                        })}
                    </tbody>
                </table>
                <div className='border-top border-3 border-dark mb-2'></div>
                <span className='h4'>Usuarios</span>
                <table className="table table-striped table-bordered ">
                    <thead>
                        <tr className='table-light'>
                            <th>#</th>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Email</th>
                            <th></th>
                        </tr>

                    </thead>
                    <tbody>
                        {accounts.map((account, index) => {
                            if (account.category === "user") {
                                return (
                                    <tr key={account._id}>
                                        <td>{account._id}</td>
                                        <td>{account.name}</td>
                                        <td>{account.lastname}</td>
                                        <td>{account.email}</td>
                                        <td>
                                            <button className='btn bg-danger me-2' onClick={() => {
                                                if (window.confirm("Deseas eliminar al usuario: " + account.name + " " + account.lastname + "?")) {
                                                    setAccounts([...accounts.filter(e => e._id !== index)])
                                                }
                                            }}>
                                                Eliminar
                                            </button>
                                        </td>
                                    </tr>
                                )
                            }
                        })}

                    </tbody>
                </table>
            </div>

        </div>
    )
}
