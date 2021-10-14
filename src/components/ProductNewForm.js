import axios from "axios";
import { useContext, useEffect } from "react";

import useInputState from "../hooks/useInputState";
import { CategoryContext } from "../contexts/CategoryContext";
import headers from "../utils/headers";

import "../styles/ProductNewForm.css"

function NewProduct({ history }) {
    const [newName, setNewName] = useInputState("");
    const [newCategory, setNewCategory] = useInputState("");
    const [oneTax, setOneTax] = useInputState("");

    const { allTaxes, setAllTaxes, allCategories, setAllCategories } = useContext(CategoryContext);

    useEffect(() => {
        // Fetching all categories from the server
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
        fetchCategories();

        // Fetching all taxes
        async function fetchTaxes() {
            const url = "https://newdemostock.gopos.pl/ajax/219/taxes"
            try {
                const res = await axios.get(url, {
                    headers
                });

                if (res.status === 200) {
                    await setAllTaxes(res.data.data);
                } else {
                    console.log(res.status);
                };

            } catch (err) {
                console.log(err);
            };
        };
        fetchTaxes();
    }, [setAllCategories]);

    // Create a new Product
    const handleSubmit = async (evt) => {
        evt.preventDefault();

        try {
            const url = "https://newdemostock.gopos.pl/ajax/219/products";
            const body = {
                category_id: newCategory,
                name: newName,
                measure_type: "LITER",
                type: "BASIC",
                tax_id: oneTax
            };

            await axios.post(url, body, { headers, });

        } catch (err) {
            console.log(err);
        };

        history.push("/products");
    };

    return (
        <div className="container">
            <h1 className="d-flex justify-content-center mb-5 mt-5 display-4">New Product</h1>
            <div className="row">
                <div className="col-lg4 offset-lg4 col-md-6 offset-md-3 col-sm-6 offset-sm-3">
                    <form>
                        <div className="mb-3">
                            <input
                                type="text"
                                name="name"
                                id="name"
                                value={newName}
                                onChange={setNewName}
                                className="form-control inputs"
                                placeholder="Enter product name"
                                autoFocus
                            />
                        </div>
                        <div>
                            <select className="form-select mb-3 inputs" aria-label="select_category" onChange={setNewCategory}>
                                <option defaultValue="">Select category</option>
                                {allCategories.map(category => (
                                    <option value={category.id} key={category.id}>{category.label}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <select className="form-select mb-3 inputs" aria-label="select_taxes" onChange={setOneTax}>
                                <option defaultValue="">Select tax</option>
                                {allTaxes.map(tax => (
                                    <option value={tax.id} key={tax.id}>{tax.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className="buttons">
                            <button className="btn btn-success" type="submit" onClick={handleSubmit}>Add product</button>
                        </div>
                    </form>
                </div >
            </div >
        </div >
    );
};

export default NewProduct;