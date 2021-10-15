import "../styles/Navbar.css"

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-inherit fixed-top">
            <div className="container-fluid pt-2 ps-3">
                <a className="navbar-brand fs-6" href="/products" style={{ color: "#faa307" }}>Products</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" style={{ color: "#faa307" }}></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link fs-6" aria-current="page" href="/categories" style={{ color: "#faa307" }}>Categories</a>
                        <a className="nav-link fs-6" aria-current="page" href="/new" style={{ color: "#faa307" }}>New Product</a>
                        <a className="nav-link fs-6" aria-current="page" href="/categories/new" style={{ color: "#faa307" }}>New Category</a>
                    </div>
                </div>
            </div>
        </nav >
    )
};

export default Navbar;