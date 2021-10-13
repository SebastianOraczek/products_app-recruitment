function Product(props) {
    const { id, name, allCategories } = props;
    console.log(allCategories)

    return (
        <li>Name: {name} ID: {id}</li>
    )
};

export default Product;