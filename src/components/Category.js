import axios from "axios";

import useInputState from "../hooks/useInputState";
import headers from "../utils/headers";

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
        <li>
            <input
                type="text"
                name={name}
                id={editedName}
                value={editedName}
                onChange={setEditedName}
            />
            <button onClick={handleEdit}>Edit</button>
        </li>
    )
};

export default Category;