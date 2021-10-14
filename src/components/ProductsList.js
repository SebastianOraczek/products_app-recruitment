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
                console.log(data.data)

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
        <section className="container">
            <h1 className="d-flex justify-content-center mb-5 mt-5 display-4">Products List</h1>
            <div className="row">
                <div className="col-lg4 offset-lg4 col-md-6 offset-md-3 col-sm-6 offset-sm-3">
                    {allProducts.map(product => (
                        <Product key={product.id} {...product} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductList;