import { useEffect, useState } from "react";

function EditProduct(props) {
    const { id } = props;
    const [product, setProduct] = useState([]);

    useEffect(() => {
        async function fetchProduct() {
            const url = `https://newdemostock.gopos.pl/ajax/219/products/groups/${id}`;
            const res = await fetch(url, {
                method: "GET",
                headers: {
                    Authorization: "fd9ba9e1-0788-4e8f-ac46-a43df43e205e"
                }
            });
            const data = await res.json();

            if (res.status === 200) {
                await setProduct(data.data);
            } else {
                console.log(res.status);
            };
        };
        fetchProduct();
    }, [setProduct]);

    console.log(product)
    return (
        <div>
            <p>Name: {product.name}</p>
            <p>Category: {product.category_name}</p>
        </div>
    );
};

export default EditProduct;
