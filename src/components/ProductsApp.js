import React from "react";
import { Route, Switch } from "react-router-dom";
import CategoryList from "./CategoryList";

import Navbar from "./Navbar";
import NewProduct from "./NewProduct";
import ProductList from "./ProductsList";

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
                    path="/new"
                    render={(routeProps) => <NewProduct {...routeProps} />}
                />
                <Route
                    exact
                    path="/categories"
                    render={(routeProps) => <CategoryList {...routeProps} />}
                />
            </Switch>
        </div>
    );
};

export default ProductsApp;