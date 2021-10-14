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
            <h1 className="d-flex justify-content-center mb-5 mt-5 display-4">All Categories</h1>
            <div className="row">
                <div className="col-lg4 offset-lg4 col-md-6 offset-md-3 col-sm-6 offset-sm-3">
                    {allCategories.map(category => (
                        <Category key={category.id} {...category} history={history} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CategoryList;