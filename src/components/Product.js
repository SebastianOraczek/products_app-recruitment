function Product(props) {
    const { name, category_name, id } = props;

    return (
        <div>
            <li>Name: {name} Category: {category_name} ID: {id}</li>
            <a className="btn btn-info" href={`/products/${id}`}>EDIT</a>
        </div>
    );
};

export default Product;