import axios from "axios";

import useInputState from "../hooks/useInputState";
import useToggleState from "../hooks/useToggleState";
import headers from "../utils/headers";

function CategoryForm({ history }) {
    const [newCategory, setNewCategory] = useInputState("");
    const [isAlert, toggleIsAlert] = useToggleState(false);

    // Create a new category
    const handleAddCategory = async (evt) => {
        evt.preventDefault();

        const url = `https://newdemostock.gopos.pl/ajax/219/product_categories`;
        const name = newCategory;
        try {
            await axios.post(url, { name }, { headers });
            history.push("/categories");
        } catch (err) {
            toggleIsAlert();
            console.log(err);
        };
    };

    return (
        <section className="container">
            <h1 className="d-flex justify-content-center mb-5 mt-5 display-4">New Category</h1>
            {isAlert && (
                <div className="alert alert-danger alert-dismissible fade show container" role="alert">
                    <p><strong>Category name is required or this name is taken.</strong></p>
                    <p>Please try again.</p>
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            )}
            <div className="row ps-2 pe-2">
                <div className="card col-lg-4 offset-lg-4 col-md-6 offset-md-3 col-sm-6 offset-sm-3">
                    <div className="card-body">
                        <form>
                            <input
                                type="text"
                                name="category"
                                id="category"
                                placeholder="Enter a new category"
                                className="form-control inputs"
                                autoFocus
                                value={newCategory}
                                onChange={setNewCategory}
                                required
                            />
                            <div className="buttons mt-3">
                                <button type="submit" className="btn btn-success" onClick={handleAddCategory}>Add category</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CategoryForm;