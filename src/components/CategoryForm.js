import axios from "axios";

import useInputState from "../hooks/useInputState";
import headers from "../utils/headers";

function CategoryForm({ history }) {
    const [newCategory, setNewCategory] = useInputState("");

    // Create a new category
    const handleAddCategory = async (evt) => {
        evt.preventDefault();

        const url = `https://newdemostock.gopos.pl/ajax/219/product_categories`;
        const name = newCategory;
        try {
            await axios.post(url, { name }, { headers });
        } catch (err) {
            console.log(err);
        };

        history.push("/categories");
    };

    return (
        <section>
            <h1>New Category</h1>
            <form>
                <label htmlFor="category">Enter a new category:</label>
                <input
                    type="text"
                    name="category"
                    id="category"
                    value={newCategory}
                    onChange={setNewCategory}
                />
            </form>
            <button type="submit" onClick={handleAddCategory}>Add Category</button>
        </section>
    );
};

export default CategoryForm;