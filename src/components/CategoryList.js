import { useEffect, useState } from "react";

function CategoryList() {
    const [allCategories, setAllCategories] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const url = "https://newdemostock.gopos.pl/ajax/219/product_categories";
            try {
                const res = await fetch(url, {
                    method: "GET",
                    headers: {
                        Authorization: "fd9ba9e1-0788-4e8f-ac46-a43df43e205e"
                    }
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
    }, []);

    return (
        <div>
            <h1>All Categories</h1>
            <ul>
                {allCategories.map(category => (
                    <li key={category.id}>{category.name}</li>
                ))}
            </ul>
        </div>
    )
};

export default CategoryList;