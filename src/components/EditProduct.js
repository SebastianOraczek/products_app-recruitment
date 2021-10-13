import { useEffect, useState } from "react";

function EditProduct(props) {

    // useEffect(() => {
    //     async function fetchProduct() {
    //         const url = `https://newdemostock.gopos.pl/ajax/219/products/groups/${id}`;
    //         const res = await fetch(url, {
    //             method: "GET",
    //             headers: {
    //                 Authorization: "fd9ba9e1-0788-4e8f-ac46-a43df43e205e"
    //             }
    //         });
    //         const data = await res.json();

    //         if (res.status === 200) {
    //             await setEditedName(data.data.name);
    //             await setEditedCategory(data.data.category_name);
    //         } else {
    //             console.log(res.status);
    //         };
    //     };
    //     async function fetchCategories() {
    //         const url = `https://newdemostock.gopos.pl/ajax/219/product_categories/search_select`;
    //         try {
    //             const res = await fetch(url, {
    //                 method: "GET",
    //                 headers: {
    //                     Authorization: "fd9ba9e1-0788-4e8f-ac46-a43df43e205e",
    //                 }
    //             });
    //             const data = await res.json();

    //             if (res.status === 200) {
    //                 await setAllCategories(data.data);
    //             } else {
    //                 console.log(res.status);
    //             };

    //         } catch (err) {
    //             console.log(err);
    //         };
    //     };

    //     fetchProduct();
    //     fetchCategories();
    // }, []);

    // const handleRemove = async () => {
    //     const url = `https://newdemostock.gopos.pl/ajax/219/products/${id}`;
    //     try {
    //         await fetch(url, {
    //             method: "DELETE",
    //             headers: {
    //                 Authorization: "fd9ba9e1-0788-4e8f-ac46-a43df43e205e"
    //             }
    //         });
    //     } catch (err) {
    //         console.log(err);
    //     };

    //     history.push("/products");
    // };

    return (
        <section>

        </section>
    );
};

export default EditProduct;