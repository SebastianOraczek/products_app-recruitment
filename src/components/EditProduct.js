import { useState, useEffect } from "react";

function EditProduct() {
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
    return (
        <div>
            <h1>Edit product</h1>
            <form>
                <div>
                    <label>Enter a product name: </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                    />
                </div>
                <div>
                    <select className="form-select" aria-label="Select">
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
                <button>Back</button>
            </form>
        </div>
    );
};

export default EditProduct;