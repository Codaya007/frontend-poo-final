import React, { useState } from 'react';
import ProductForm from './ProductForm';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const Dashboard = () => {
    const productos = useSelector(state => state.products.products);
    const [products, setProducts] = useState(productos);
    const [edit, setEdit] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    useEffect(() => {
        setProducts(productos);
    }, [productos])

    return (
        < div className='dashboard-Admin'>
            <div className='content-Dashboard'>
                <div className='container-fluid'>
                    {/* EDITOR FORM */}
                    <ProductForm product={selectedItem} edit={edit} products={products} setProducts={setProducts} setEdit={setEdit} />
                    <div className='row'>
                        {products.length ?
                            products.map((product, index) => <div className='col-md-4' key={index}>
                                <div className='card mt-4'>
                                    <div className='card-header'>
                                        <h3>{product.name}</h3>
                                        <span className="badge rounded-pill bg-danger">
                                            {product.price}
                                        </span>
                                    </div>
                                    <div className='card-body'>
                                        <p><mark>{product.category}</mark></p>
                                        <img className='img-fluid imagen' src={product.photo} alt="" />
                                        <p>{product.description}</p>
                                    </div>
                                    <div className='card-footer'>
                                        <button className='btn btn-danger me-2' onClick={() => { setProducts([...products.filter(e => e.id !== index)]) }}>
                                            Eliminar
                                        </button>
                                        <button className='btn btn-danger ms-2' onClick={() => {
                                            setSelectedItem(products[index]);
                                            setEdit(true);
                                        }} href="#Productos">
                                            Editar
                                        </button>
                                    </div>
                                </div>
                            </div>)
                            : <div>No hay productos</div>
                        }
                    </div>
                </div>
            </div>
        </div >)
}

export default Dashboard;

