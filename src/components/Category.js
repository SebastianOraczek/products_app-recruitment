import axios from "axios";
import useInputState from "../hooks/useInputState";

function Category(props) {
    const { id, name, history } = props;
    const [editedName, setEditedName] = useInputState(name);

    const handleEdit = async () => {
        const url = `https://newdemostock.gopos.pl/ajax/219/product_categories/${id}`;
        const name = editedName;
        try {
            await axios.put(url, { name }, {
                headers: {
                    Authorization: "fd9ba9e1-0788-4e8f-ac46-a43df43e205e",
                    "Content-Type": "application/json"
                }
            });
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
                id={name}
                value={editedName}
                onChange={setEditedName}
            />
            <button onClick={handleEdit}>Edit</button>
        </li>
    )
};

export default Category;