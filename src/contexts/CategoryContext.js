import { createContext, useState } from "react";

export const CategoryContext = createContext();

export function CategoryProvider(props) {
    // All categories
    const [allCategories, setAllCategories] = useState([]);
    // All taxes
    const [allTaxes, setAllTaxes] = useState([]);

    return (
        <CategoryContext.Provider value={{
            allCategories, setAllCategories,
            allTaxes, setAllTaxes
        }}>
            {props.children}
        </CategoryContext.Provider>
    )
};