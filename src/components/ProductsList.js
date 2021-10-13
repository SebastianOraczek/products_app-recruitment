import { useEffect, useState } from "react";

function ProductList() {
    const [allProducts, setAllProducts] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const url = "https://newdemostock.gopos.pl/ajax/219/products/groups";
            try {
                const res = await fetch(url, {
                    method: "GET",
                    headers: {
                        Authorization: "fd9ba9e1-0788-4e8f-ac46-a43df43e205e"
                    }
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
                    <div key={product.id}>
                        <li>Name: {product.name} Category: {product.category_name}</li>
                        <a className="btn btn-info" href={`/products/${product.id}`}>EDIT</a>
                    </div>
                ))}
            </ul>
        </section>
    );
};

export default ProductList;