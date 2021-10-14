import { withRouter } from "react-router";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-inherit fixed-top">
            <div className="container-fluid pt-2 ps-3">
                <a className="navbar-brand fs-5" href="/products">Products</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link fs-5" aria-current="page" href="/categories">Categories</a>
                        <a className="nav-link fs-5" aria-current="page" href="/new">New Product</a>
                        <a className="nav-link fs-5" aria-current="page" href="/categories/new">New Category</a>
                    </div>
                </div>
            </div>
        </nav>
    )
};

export default withRouter(Navbar);