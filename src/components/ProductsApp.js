import React from "react";
import { Route, Switch } from "react-router-dom";

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
                    path="/products"
                    render={(routeProps) => <ProductList {...routeProps} />}
                />
                <Route
                    exact
                    path="/new"
                    render={(routeProps) => <NewProduct {...routeProps} />}
                />
            </Switch>
        </div>
    );
};

export default ProductsApp;