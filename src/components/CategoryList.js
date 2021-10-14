import { useEffect, useContext } from "react";

import Category from "./Category";
import { CategoryContext } from "../contexts/CategoryContext";
import headers from "../utils/headers";

function CategoryList({ history }) {
    const { allCategories, setAllCategories } = useContext(CategoryContext);

    // Fetching all categories from the server
    useEffect(() => {
        async function fetchData() {
            const url = "https://newdemostock.gopos.pl/ajax/219/product_categories";
            try {
                const res = await fetch(url, {
                    method: "GET",
                    headers
                });
                const data = await res.json();

                if (res.status === 200) {
                    await setAllCategories(data.data);
                } else {
                    console.log(res.status);
                };

            } catch (err) {
                console.log(err);
            };
        };
        fetchData();
    }, [setAllCategories]);

    return (
        <div>
            <h1>All Categories</h1>
            <ul>
                {allCategories.map(category => (
                    <Category key={category.id} {...category} history={history} />
                ))}
            </ul>
        </div>
    );
};

export default CategoryList;