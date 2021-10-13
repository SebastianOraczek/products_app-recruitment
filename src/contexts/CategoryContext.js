import { createContext, useState } from "react";

export const CategoryContext = createContext();

export function CategoryProvider(props) {
    // All categories
    const [allCategories, setAllCategories] = useState([]);

    return (
        <CategoryContext.Provider value={{ allCategories, setAllCategories }}>
            {props.children}
        </CategoryContext.Provider>
    )
};