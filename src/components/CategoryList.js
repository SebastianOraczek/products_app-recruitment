import { useEffect, useContext, useCallback } from "react";

import Category from "./Category";
import { CategoryContext } from "../contexts/CategoryContext";
import headers from "../utils/headers";
import useToggleState from "../hooks/useToggleState";

function CategoryList({ history }) {
    const { allCategories, setAllCategories } = useContext(CategoryContext);
    const [isAlert, toggleIsAlert] = useToggleState(false);

    // Fetching all categories from the server
    const fetchData = useCallback(async () => {
        const url = "https://newdemostock.gopos.pl/ajax/219/product_categories";
        const res = await fetch(url, { method: "GET", headers });
        const data = await res.json();

        if (res.status === 200) {
            await setAllCategories(data.data);
        } else {
            console.log(`Error with status ${res.status}`);
        };
    }, [setAllCategories]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return (
        <div>
            {allCategories.length > 0
                ?
                (
                    <section>
                        <h1 className="d-flex justify-content-center mb-5 mt-5 display-4">All Categories</h1>
                        {isAlert && (
                            <div className="alert alert-danger alert-dismissible fade show container" role="alert">
                                Category name is required. If you want to edit category name, please fill it in.
                                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                            </div>
                        )}
                        <div className="row">
                            <div className="col-md-6 offset-md-3 col-sm-6 offset-sm-3">
                                {allCategories.map(category => (
                                    <Category key={category.id} {...category} history={history} toggleIsAlert={toggleIsAlert} />
                                ))}
                            </div>
                        </div>
                    </section>
                )
                :
                (
                    <h1 className="d-flex justify-content-center mb-5 mt-5 display-4">There are no categories on the list</h1>
                )
            }
        </div>
    );
};

export default CategoryList;