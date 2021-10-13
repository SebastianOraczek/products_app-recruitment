import React from "react";
import { Route, Switch } from "react-router-dom";
import ProductList from "./ProductsList";
import NewProduct from "./NewProduct";

function ProductsApp() {
    return (
        <Switch>
            <Route
                exact
                path="/"
                render={(routeProps) => <ProductList {...routeProps} />}
            />
            <Route
                exact
                path="/lists"
                render={(routeProps) => <ProductList {...routeProps} />}
            />
            <Route
                exact
                path="/new"
                render={(routeProps) => <NewProduct {...routeProps} />}
            />
        </Switch>
    );
};

export default ProductsApp;