import { useEffect, useState } from "react";
import useInputState from "../hooks/useInputState";

function NewProduct() {
    const [newName, setNewName] = useInputState("");
    const [newCategory, setNewCategory] = useInputState("");
    const [allCategories, setAllCategories] = useState([]);

    useEffect(() => {
        async function fetchCategories() {
            const url = `https://newdemostock.gopos.pl/ajax/219/product_categories/search_select`;
            try {
                const res = await fetch(url, {
                    method: "GET",
                    headers: {
                        Authorization: "fd9ba9e1-0788-4e8f-ac46-a43df43e205e",
                        contentType: "application/json",
                        Accept: "application/json"
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
    }, []);

    const handleSubmit = async (evt) => {
        evt.preventDefault();

        const url = `https://newdemostock.gopos.pl/ajax/219/products/`;
        const newProduct = { name: newName, category: newCategory };
        // try {
        //     await fetch(url, {
        //         method: "POST",
        //         headers: {
        //             Authorization: "fd9ba9e1-0788-4e8f-ac46-a43df43e205e",
        //             "Access-Control-Allow-Origin": "*"
        //         },
        //         body: JSON.stringify(newProduct)
        //     });

        // } catch (err) {
        //     console.log(err);
        // };
        console.log(newProduct)
    };

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
                    <select className="form-select" aria-label="Select" onChange={setNewCategory}>
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
                <button onClick={handleSubmit}>Add Product</button>
            </form>
        </div>
    );
};

export default NewProduct;