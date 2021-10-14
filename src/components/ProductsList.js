import { useEffect, useState } from "react";

import Product from "./Product";
import headers from "../utils/headers";

function ProductList() {
    const [allProducts, setAllProducts] = useState([]);

    // Fetching all products from the server
    useEffect(() => {
        async function fetchData() {
            const url = "https://newdemostock.gopos.pl/ajax/219/products/groups";
            try {
                const res = await fetch(url, {
                    method: "GET",
                    headers
                });
                const data = await res.json();

                if (res.status === 200) {
                    await setAllProducts(data.data);
                } else {
                    console.log(res.status);
                };

            } catch (err) {
                console.log(err);
            };
        };
        fetchData();
    }, [setAllProducts]);

    return (
        <section>
            <h1>Products List</h1>
            <ul>
                {allProducts.map(product => (
                    <Product key={product.id} {...product} />
                ))}
            </ul>
        </section>
    );
};

export default ProductList;