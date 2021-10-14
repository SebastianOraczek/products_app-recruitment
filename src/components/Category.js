import axios from "axios";

import useInputState from "../hooks/useInputState";
import headers from "../utils/headers";
import "../styles/Category.css";

function Category(props) {
    const { id, name, history, toggleIsAlert } = props;
    const [editedName, setEditedName] = useInputState(name);

    // Edit an individual category
    const handleEdit = async (evt) => {
        evt.preventDefault();
        const url = `https://newdemostock.gopos.pl/ajax/219/product_categories/${id}`;
        const name = editedName;
        try {
            await axios.put(url, { name }, { headers });
            history.push("/products");
        } catch (err) {
            toggleIsAlert();
            console.log(err);
        };
    };

    return (
        <div className="card mb-3 col-md-6 offset-md-3 col-sm">
            <div className="card-body">
                <form className="needs-validation">
                    <input
                        type="text"
                        name={name}
                        id={editedName}
                        value={editedName}
                        onChange={setEditedName}
                        className="form-control"
                    />
                    <div className="buttons mt-3">
                        <button className="btn btn-info text-white" onClick={handleEdit}>Edit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Category;