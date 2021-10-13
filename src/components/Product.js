function Product(props) {
    const { id, name } = props;

    return (
        <div>
            <li>Name: {name} ID: {id}</li>
        </div>
    );
};


export default Product;