import { useState, useEffect } from "react";

import Product from "./Product";
import headers from "../utils/headers";

function EditProductForm(props) {
    const id = props.match.params.id;
    const [individualProduct, setIndividualProduct] = useState("");

    // Fetching a individual products from the server
    useEffect(() => {
        async function fetchData() {
            const url = `https://newdemostock.gopos.pl/ajax/219/products/${id}`;
            try {
                const res = await fetch(url, {
                    method: "GET",
                    headers
                });
                const data = await res.json();

                if (res.status === 200) {
                    await setIndividualProduct(data.data);
                } else {
                    console.log(res.status);
                };

            } catch (err) {
                console.log(err);
            };
        };
        fetchData();
    }, [setIndividualProduct]);

    return (
        <div>
            <h1>EDIT FORM</h1>
            <Product {...individualProduct} />
        </div>
    )
};

export default EditProductForm;