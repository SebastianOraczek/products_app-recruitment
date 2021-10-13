import React from "react";
import { Route, Switch } from "react-router-dom";

import CategoryList from "./CategoryList";
import Navbar from "./Navbar";
import NewProduct from "./NewProduct";
import ProductList from "./ProductsList";
import EditProduct from "./EditProduct";
import { CategoryProvider } from "../contexts/CategoryContext";

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
                    render={(routeProps) => <EditProduct id={routeProps.match.params.id} />}
                />
                <Route
                    exact
                    path="/new"
                    render={(routeProps) => <NewProduct {...routeProps} />}
                />
                <CategoryProvider>
                    <Route
                        exact
                        path="/categories"
                        render={(routeProps) => <CategoryList {...routeProps} />}
                    />
                </CategoryProvider>

            </Switch>
        </div>
    );
};

export default ProductsApp;