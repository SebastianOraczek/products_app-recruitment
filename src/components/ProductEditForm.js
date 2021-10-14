import { useEffect } from "react";
import axios from "axios";

import headers from "../utils/headers";

function EditProductForm(props) {
    const id = props.match.params.id;

    useEffect(() => {
        // Fetching a individual product
        async function fetchProduct() {
            const url = `https://newdemostock.gopos.pl/ajax/219/products/${id}`
            try {
                const res = await axios.get(url, { headers });
                const data = res.data.data;
                console.log(res)

                if (res.status === 200) {
                    // await setName(data.name);
                    // await setCategory(data.category_id);
                } else {
                    console.log(res.status);
                };

            } catch (err) {
                console.log(err);
            };
        };
        fetchProduct();
    });
    return (
        <div>
            hi
        </div>
    )
};
export default EditProductForm;