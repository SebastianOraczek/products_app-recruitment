import axios from "axios";
import { useContext, useEffect } from "react";

import useInputState from "../hooks/useInputState";
import { CategoryContext } from "../contexts/CategoryContext";
import headers from "../utils/headers";

function NewProduct({ history }) {
    const [newName, setNewName] = useInputState("");
    const [newCategory, setNewCategory] = useInputState("");
    const [oneTax, setOneTax] = useInputState("");
    const [measureType, setMeasureType] = useInputState("");
    const [productType, setProductType] = useInputState("");


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
            const body = JSON.stringify({
                category_id: newCategory,
                name: newName,
                type: productType,
                measure_type: measureType,
                tax_id: oneTax,
            });
            await fetch(url, {
                method: "POST",
                body,
                headers: {
                    Authorization: "fd9ba9e1-0788-4e8f-ac46-a43df43e205e",
                    Accept: "application/json",
                    // "Content-Type": "application/json",
                    "Access-Control-Allow-Headers": "X-Requested-With",
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                }
            });
        } catch (err) {
            console.log(err);
        };

        history.push("/products");
    };

    return (
        <div>
            <h1>New Product</h1>
            <form>
                <div>
                    <label htmlFor="name">Enter a product name: </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={newName}
                        onChange={setNewName}
                    />
                </div>
                <div>
                    <select className="form-select" aria-label="select_category" onChange={setNewCategory}>
                        <option defaultValue="">Select category</option>
                        {allCategories.map(category => (
                            <option value={category.id} key={category.id}>{category.label}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <select className="form-select" aria-label="select_taxes" onChange={setOneTax}>
                        <option defaultValue="">Select tax</option>
                        {allTaxes.map(tax => (
                            <option value={tax.id} key={tax.id}>{tax.name}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <select className="form-select" aria-label="select_measure_type" onChange={setMeasureType}>
                        <option defaultValue="">Select measure type</option>
                        <option value="sztuka">sztuka</option>
                        <option value="kilogram">kilogram</option>
                        <option value="litr">litr</option>
                        <option value="opakowanie">opakowanie</option>
                    </select>
                </div>
                <div>
                    <select className="form-select" aria-label="select_product_type" onChange={setProductType}>
                        <option defaultValue="">Select aproduct type</option>
                        <option value="BASIC">BASIC</option>
                        <option value="PACKAGE">PACKAGE</option>
                        <option value="COMPOSITE">COMPOSITE</option>
                    </select>
                </div>
                <button type="submit" onClick={handleSubmit}>Add product</button>
            </form>
        </div>
    );
};

export default NewProduct;