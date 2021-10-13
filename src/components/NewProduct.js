import { useState } from "react";
import useInputState from "../hooks/useInputState";

function NewProduct() {
    const [name, setName, resetName] = useInputState("");
    const [category, setCategory, resetCategory] = useInputState("");

    return (
        <div>
            <form>
                <div>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Product name"
                        value={name}
                        onChange={setName}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        name="category"
                        id="category"
                        placeholder="Category"
                        value={category}
                        onChange={setCategory}
                    />
                </div>
                <button type="submit">Add</button>
            </form>
        </div>
    );
};

export default NewProduct;