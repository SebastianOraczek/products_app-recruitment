import React from "react";
import { Route, Switch } from "react-router-dom";

import CategoryList from "./CategoryList";
import Navbar from "./Navbar";
import ProductNewForm from "./ProductNewForm";
import ProductList from "./ProductsList";
import { CategoryProvider } from "../contexts/CategoryContext";
import ProductEdit from "./ProductEdit";
import CategoryForm from "./CategoryForm";

function ProductsApp() {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route
                    exact
                    path={"/"}
                    component={(routeProps) => <ProductList {...routeProps} />}
                />
                <Route
                    exact
                    path={"/products"}
                    component={(routeProps) => <ProductList {...routeProps} />}
                />
                <CategoryProvider>
                    <Route
                        exact
                        path={"/products/:id"}
                        component={(routeProps) => <ProductEdit {...routeProps} />}
                    />
                    <Route
                        exact
                        path={"/categories/new"}
                        component={(routeProps) => <CategoryForm {...routeProps} />}
                    />
                    <Route
                        exact
                        path={"/categories"}
                        component={(routeProps) => <CategoryList {...routeProps} />}
                    />
                    <Route
                        exact
                        path={"/new"}
                        component={(routeProps) => <ProductNewForm {...routeProps} />}
                    />
                </CategoryProvider>
            </Switch>
        </div>
    );
};

export default ProductsApp;