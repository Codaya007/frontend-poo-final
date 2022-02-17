import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';

const initialForm = {
    name: "",
    description: "",
    price: "",
    category: "",
    quantity: "",
    photo: "",
};


const ProductForm = ({ product, edit, products, setProducts, setEdit }) => {
    const category = useSelector(state => state.products.categories);
    const [form, setForm] = useState(product ? product : initialForm);
    const [categories, setCategories] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setForm({ ...form, [name]: value });
    };

    const handleEdit = (e, i) => {
        e.preventDefault();

        setProducts([...products.filter((e, i) => e.id !== i), form]);
        setEdit(false);
        setForm(initialForm);
    };

    const handleCreate = (e) => {
        e.preventDefault();

        setProducts([...products, { ...form, id: products.length }]);
        setEdit(false);
        setForm(initialForm);
    }

    useEffect(() => {
        product && setForm(product);
    }, [product])

    useEffect(() => {
        category && setCategories(category.map(e => ({ id: e._id, name: e.name })));
    }, [category])


    return <div className='card'>
        <span className='h3' id="Productos">Productos</span>
        <form className='card-body row'>
            <div className='form-group col-sm-4 mb-3'>
                <input
                    className='form-control'
                    type="text"
                    name='name'
                    placeholder='name'
                    onChange={handleChange}
                    value={form.name}
                ></input>
            </div>
            <div className='form-group col-sm-8 mb-3'>
                <input
                    className='form-control'
                    type="text"
                    name='description'
                    placeholder='description'
                    onChange={handleChange}
                    value={form.description}
                ></input>
            </div>
            <div className='input-group col mb-3'>
                <span className="input-group-text">$ </span>
                <input
                    className='form-control'
                    type="text"
                    name='price'
                    placeholder='price'
                    onChange={handleChange}
                    value={form.price}
                ></input>
            </div>
            <div className='input-group col mb-3'>
                <input
                    className='form-control'
                    type="number"
                    name='quantity'
                    placeholder='quantity'
                    onChange={handleChange}
                    value={form.quantity}
                ></input>
            </div>
            <div className='input-group mb-3'>
                <span className="input-group-text">Url</span>
                <input
                    className='form-control'
                    type="text"
                    name='photo'
                    placeholder='photo'
                    onChange={handleChange}
                    value={form.photo}
                ></input>
                <select className='form-select' onChange={handleChange} name="category">
                    {categories.map(e => <option key={e.id} value={e.id}>{e.name}</option>)}
                </select>
            </div>
            <div className='col-auto ms-4'>
                <button onClick={edit ? (e) => handleEdit(e, product.id) : handleCreate} className='btn btn-primary'>{edit ? "Guardar" : "Añadir"}</button>
            </div>
        </form>
    </div>
}

export default ProductForm;
