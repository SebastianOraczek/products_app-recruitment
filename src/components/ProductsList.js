import { useEffect, useState, memo } from "react";

import { fetchData } from "../utils/fetchFunc";
import Product from "./Product";

function ProductList() {
    const [allProducts, setAllProducts] = useState([]);

    // Fetch all products
    useEffect(() => {
        fetchData("https://newdemostock.gopos.pl/ajax/219/products/groups", setAllProducts);
    }, []);

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

export default memo(ProductList);