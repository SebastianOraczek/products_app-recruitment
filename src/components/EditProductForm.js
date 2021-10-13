import { useState, useEffect } from "react";

import Product from "./Product";

function EditProductForm(props) {
    const id = props.match.params.id;
    const [individualProduct, setIndividualProduct] = useState("");


    // Fetching all products from the server
    useEffect(() => {
        async function fetchData() {
            const url = `https://newdemostock.gopos.pl/ajax/219/products/${id}`;
            try {
                const res = await fetch(url, {
                    method: "GET",
                    headers: {
                        Authorization: "fd9ba9e1-0788-4e8f-ac46-a43df43e205e"
                    }
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