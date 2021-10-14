import React from "react";
import { Route, Switch } from "react-router-dom";

import CategoryList from "./CategoryList";
import Navbar from "./Navbar";
import ProductNewForm from "./ProductNewForm";
import ProductList from "./ProductsList";
import { CategoryProvider } from "../contexts/CategoryContext";
import ProductEditForm from "./ProductEditForm";
import CategoryForm from "./CategoryForm";

function ProductsApp() {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route
                    exact
                    path="/"
                    render={(routeProps) => <ProductList {...routeProps} />}
                />
                <Route
                    exact
                    path="/products"
                    render={(routeProps) => <ProductList {...routeProps} />}
                />
                <Route
                    exact
                    path="/products/:id"
                    render={(routeProps) => <ProductEditForm {...routeProps} />}
                />
                <CategoryProvider>
                    <Route
                        exact
                        path="/categories"
                        render={(routeProps) => <CategoryList {...routeProps} />}
                    />
                    <Route
                        exact
                        path="/categories/new"
                        render={(routeProps) => <CategoryForm {...routeProps} />}
                    />
                    <Route
                        exact
                        path="/new"
                        render={(routeProps) => <ProductNewForm {...routeProps} />}
                    />
                </CategoryProvider>

            </Switch>
        </div>
    );
};

export default ProductsApp;