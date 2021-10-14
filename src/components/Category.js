import axios from "axios";

import useInputState from "../hooks/useInputState";
import headers from "../utils/headers";

import "../styles/Category.css";

function Category(props) {
    const { id, name, history } = props;
    const [editedName, setEditedName] = useInputState(name);

    // Edit an individual category
    const handleEdit = async () => {
        const url = `https://newdemostock.gopos.pl/ajax/219/product_categories/${id}`;
        const name = editedName;
        try {
            await axios.put(url, { name }, { headers });
        } catch (err) {
            console.log(err);
        };

        history.push("/products");
    };

    return (
        <div className="col-lg4 offset-lg4 col-md-6 offset-md-3 col-sm-6 offset-sm-3">
            <div className="card mb-3">
                <div className="card-body">
                    <input
                        type="text"
                        name={name}
                        id={editedName}
                        value={editedName}
                        onChange={setEditedName}
                        className="form-control"
                    />
                    <div className="buttons">
                        <button className="btn btn-info text-white mt-2" onClick={handleEdit}>Edit</button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Category;