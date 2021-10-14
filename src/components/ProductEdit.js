import axios from "axios";
import { useEffect, useContext, useState } from "react";

import { CategoryContext } from "../contexts/CategoryContext";
import headers from "../utils/headers";

function EditProductForm(props) {
    const id = props.match.params.id;
    const { history } = props;
    const [category, setCategory] = useState("");
    const [name, setName] = useState("");
    const [measureType, setMeasureType] = useState("");
    const [tax, setTax] = useState("");
    const { allCategories, setAllCategories } = useContext(CategoryContext);

    useEffect(() => {
        // Fetching all categories
        async function fetchCategories() {
            const url = "https://newdemostock.gopos.pl/ajax/219/product_categories/search_select";
            try {
                const res = await fetch(url, {
                    method: "GET",
                    headers
                });
                const data = await res.json();

                if (res.status === 200) {
                    await setAllCategories(data.data);
                } else {
                    console.log(res.status);
                };

            } catch (err) {
                console.log(err);
            };
        };
        // Fetching an individual product
        async function fetchProduct() {
            const url = `https://newdemostock.gopos.pl/ajax/219/products/${id}`;
            try {
                const res = await fetch(url, {
                    method: "GET",
                    headers
                });
                const data = await res.json();

                if (res.status === 200) {
                    await setCategory(data.data.category_id);
                    await setName(data.data.name);
                    await setMeasureType(data.data.measure_type);
                    await setTax(data.data.tax_id);
                } else {
                    console.log(res.status);
                };

            } catch (err) {
                console.log(err);
            };
        };

        fetchCategories();
        fetchProduct();
    }, [setAllCategories]);

    // Editing a individual product
    const handleEdit = async (evt) => {
        evt.preventDefault();

        const url = `https://newdemostock.gopos.pl/ajax/219/products/${id}`
        const body = {
            name,
            category_id: category,
            type: "BASIC",
            measure_type: measureType,
            tax_id: tax
        };

        try {
            await axios.put(url, body, { headers });
            history.push("/products");

        } catch (err) {
            console.log(err);
        };
    };

    // Changing name and category state
    const handleChangeName = (evt) => {
        setName(evt.target.value);
    };
    const handleChangeCategory = (evt) => {
        setCategory(evt.target.value);
    };

    return (
        <section className="container">
            <h1 className="d-flex justify-content-center mb-5 mt-5 display-4">Edit product</h1>
            <div className="row">
                <div className="card col-lg-4 offset-lg-4 col-md-6 offset-md-3 col-sm-6 offset-sm-3">
                    <div className="card-body">
                        <form>
                            <div>
                                <input
                                    type="text"
                                    className="form-control inputs mb-3 inputs"
                                    value={name}
                                    onChange={handleChangeName}
                                    required
                                />
                            </div>
                            <div>
                                <select className="form-select mb-3 inputs" aria-label="select_category" onChange={handleChangeCategory} required>
                                    <option defaultValue="">{category}</option>
                                    {allCategories.map(category => (
                                        <option value={category.id} key={category.id}>{category.label}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="buttons mt-3">
                                <button type="submit" className="btn btn-info text-white" onClick={handleEdit}>Edit Product</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default EditProductForm;