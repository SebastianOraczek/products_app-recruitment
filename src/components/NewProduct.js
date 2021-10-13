// import axios from "axios";
import { useEffect, useState } from "react";
import useInputState from "../hooks/useInputState";

function NewProduct() {
    const [newName, setNewName] = useInputState("");
    const [newGroup, setNewGroup] = useInputState("");
    const [allCategories, setAllCategories] = useState([]);

    // Fetching all categories from the server
    useEffect(() => {
        async function fetchCategories() {
            const url = `https://newdemostock.gopos.pl/ajax/219/product_categories/search_select`;
            try {
                const res = await fetch(url, {
                    method: "GET",
                    headers: {
                        Authorization: "fd9ba9e1-0788-4e8f-ac46-a43df43e205e",
                    }
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
    }, [setAllCategories]);

    // // Creating a new product
    // const handleSubmit = async (evt) => {
    //     evt.preventDefault();

    //     const url = `https://newdemostock.gopos.pl/ajax/219/products`;
    //     const category_name = newGroup;
    //     const name = newName;
    //     try {
    //         await axios.post(url, { category_name, name }, {
    //             headers: {
    //                 Authorization: "fd9ba9e1-0788-4e8f-ac46-a43df43e205e",
    //                 "Content-Type": "application/json"
    //             }
    //         });
    //     } catch (err) {
    //         console.log(err);
    //     };
    // };

    return (
        <div>
            <h1>New Product</h1>
            <form>
                <div>
                    <label>Enter a product name: </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={newName}
                        onChange={setNewName}
                    />
                </div>
                <div>
                    <select className="form-select" aria-label="select" onChange={setNewGroup}>
                        <option defaultValue="">Select category</option>
                        {allCategories.map(category => (
                            <option
                                key={category.id}
                                value={category.value}
                            >
                                {category.label}
                            </option>
                        ))}
                    </select>
                </div>
                {/* <button onClick={handleSubmit}>Add Product</button> */}
            </form>
        </div>
    );
};

export default NewProduct;