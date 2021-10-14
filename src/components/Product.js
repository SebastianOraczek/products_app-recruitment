import "../styles/Product.css"

function Product(props) {
    const { name, category_name, id } = props;

    return (
        <div className="card mb-3">
            <div className="card-body">
                <div className="card-text">
                    <p><b>Product name:</b> {name} </p>
                    <p><b>Category:</b> {category_name}</p>
                </div>
                <div className="buttons">
                    <a className="btn btn-primary text-white" href={`/products/${id}`}>Details</a>
                </div>
            </div>
        </div>
    );
};

export default Product;