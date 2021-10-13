import React from "react";
import { Route, Switch } from "react-router-dom";

import CategoryList from "./CategoryList";
import Navbar from "./Navbar";
import NewProduct from "./NewProduct";
import ProductList from "./ProductsList";
import { CategoryProvider } from "../contexts/CategoryContext";
import EditProductForm from "./EditProductForm";

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
                    render={(routeProps) => <EditProductForm {...routeProps} />}
                />
                <CategoryProvider>
                    <Route
                        exact
                        path="/categories"
                        render={(routeProps) => <CategoryList {...routeProps} />}
                    />
                    <Route
                        exact
                        path="/new"
                        render={(routeProps) => <NewProduct {...routeProps} />}
                    />
                </CategoryProvider>

            </Switch>
        </div>
    );
};

export default ProductsApp;