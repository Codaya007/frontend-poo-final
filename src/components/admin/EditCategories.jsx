import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createProduct, updateProduct } from "../../data/actions";

const initialForm = {
    category: "",
};

export const EditCategories = () => {

    const categories = useSelector((state) => state.products.categories);
    const categoryToEdit = useSelector((state) => state.products.categoryToEdit);
    const [form, setForm] = useState(categoryToEdit || initialForm);
    const dispatch = useDispatch();
    const [edit, setEdit] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, category: e.target.value });
    };

    const changeEdit = (e) => {
        setEdit(e);
    }

    const handleEdit = (e) => {
        e.preventDefault();

        dispatch(updateProduct(form));
        setForm(initialForm);
    };

    const handleCreate = (e) => {
        e.preventDefault();

        dispatch(createProduct(form));
        setForm(initialForm);
    };

    const handleCleanFields = (e) => {
        e.preventDefault();
        setForm(initialForm);
    };

    useEffect(() => {
        categoryToEdit && setForm(categoryToEdit);
    }, [categoryToEdit]);

    return (
        <div className="accordion accordion-flush" id="accordionFlushExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingOne">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                        Edit Categories
                    </button>
                </h2>
                <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                        <table className='table table-bordered'>
                            <tbody>
                                <tr>
                                    <td>
                                        <form action="">
                                            <input type="text" value={form.category} onChange={handleChange} name="category" />
                                            {(!edit) ? (
                                                <div className="d-inline-block">
                                                    <input type="button" value="Guardar" className='btn btn-primary ms-4' />
                                                    <input type="button" value="Cancelar" className='btn btn-danger ms-4' onClick={handleCleanFields /*,changeEdit(false)*/} />
                                                </div>) :
                                                <input type="button" value="Crear" className='btn btn-success ms-4' />}
                                        </form>
                                    </td>
                                    <td>
                                        <select
                                            className="form-select"
                                            name="category"
                                            onChange={handleChange/*, changeEdit(true)*/}
                                        >
                                            {categories.map((e) => (
                                                <option key={e._id} value={e.name}>
                                                    {e.name}
                                                </option>
                                            ))}
                                        </select>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
