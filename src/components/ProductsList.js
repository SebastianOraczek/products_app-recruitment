import { useEffect, useState, useCallback } from "react";

import Product from "./Product";
import headers from "../utils/headers";

function ProductList() {
    const [allProducts, setAllProducts] = useState([]);

    // Fetching all products from the server
    const fetchData = useCallback(async () => {
        const url = "https://newdemostock.gopos.pl/ajax/219/products/groups";
        const res = await fetch(url, { method: "GET", headers });
        const data = await res.json();

        if (res.status === 200) {
            await setAllProducts(data.data);
        } else {
            console.log(`Error with status ${res.status}`);
        };
    }, [setAllProducts]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return (
        <div>
            {allProducts.length > 0
                ?
                (
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
                )
                :
                (
                    <h1 className="d-flex justify-content-center mt-5 pt-5 display-4">There are no products on the list</h1>
                )
            }
        </div>
    );
};

export default ProductList;