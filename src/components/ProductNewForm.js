import axios from "axios";
import { useContext, useEffect, useCallback } from "react";

import { fetchData } from "../utils/fetchFunc";
import useInputState from "../hooks/useInputState";
import useToggleState from "../hooks/useToggleState";
import { CategoryContext } from "../contexts/CategoryContext";
import headers from "../utils/headers";

import "../styles/ProductNewForm.css"

function NewProduct({ history }) {
    const [newName, setNewName] = useInputState("");
    const [newCategory, setNewCategory] = useInputState("");
    const [isAlert, toggleIsAlert] = useToggleState(false);
    const [oneTax, setOneTax] = useInputState("");
    const [measureType, setMeasureType] = useInputState("");
    const { allTaxes, setAllTaxes, allCategories, setAllCategories } = useContext(CategoryContext);

    // Fetching all categories from the server
    const fetchCategories = useCallback(async () => {
        fetchData("https://newdemostock.gopos.pl/ajax/219/product_categories", setAllCategories)
    }, [setAllCategories]);

    // Fetching all taxes
    const fetchTaxes = useCallback(async () => {
        fetchData("https://newdemostock.gopos.pl/ajax/219/taxes", setAllTaxes);
    }, [setAllTaxes]);

    useEffect(() => {
        fetchCategories();
        fetchTaxes();
    }, [fetchCategories, fetchTaxes]);

    // Create a new product
    const handleSubmit = async (evt) => {
        evt.preventDefault();

        try {
            const url = "https://newdemostock.gopos.pl/ajax/219/products";
            const body = {
                category_id: newCategory,
                name: newName,
                measure_type: measureType,
                type: "BASIC",
                tax_id: oneTax
            };

            await axios.post(url, body, { headers, });
            history.push("/products");

        } catch (err) {
            toggleIsAlert();
            console.log(err);
        };
    };

    return (
        <div className="container">
            <h1 className="d-flex justify-content-center mb-5 mt-5 display-4">New Product</h1>
            {isAlert && (
                <div className="alert alert-danger alert-dismissible fade show container" role="alert">
                    <p><strong>These fields are required or product name is taken.</strong></p>
                    <p> If you want to create a new product, please fill fields in.</p>
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            )}
            <div className="row ps-2 pe-2">
                <div className="card col-lg-4 offset-lg-4 col-md-6 offset-md-3 col-sm-6 offset-sm-3">
                    <div className="card-body">
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
                                    required
                                />
                            </div>
                            <div>
                                <select className="form-select mb-3 inputs" aria-label="select_category" onChange={setNewCategory} required>
                                    <option defaultValue="">Select category</option>
                                    {allCategories.map(category => (
                                        <option value={category.id} key={category.id}>{category.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <select className="form-select mb-3 inputs" aria-label="select_taxes" onChange={setOneTax} required>
                                    <option defaultValue="">Select tax</option>
                                    {allTaxes.map(tax => (
                                        <option value={tax.id} key={tax.id}>{tax.name}</option>
                                    ))}
                                </select>
                                <select className="form-select mb-3 inputs" aria-label="measure_type" onChange={setMeasureType} required>
                                    <option defaultValue="">Select measure type</option>
                                    <option value="ITEM">Item</option>
                                    <option value="KILOGRAM">Kilogram</option>
                                    <option value="LITER">Litr</option>
                                    <option value="PACKAGE">Package</option>
                                </select>
                            </div>
                            <div className="buttons">
                                <button className="btn btn-success" type="submit" onClick={handleSubmit}>Add product</button>
                            </div>
                        </form>
                    </div>
                </div >
            </div >
        </div >
    );
};

export default NewProduct;