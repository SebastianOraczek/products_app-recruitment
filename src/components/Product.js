function Product(props) {
    const { id, name, category_name } = props;

    const handleRemove = async () => {
        const url = `https://newdemostock.gopos.pl/ajax/219/products/${id}`;
        try {
            await fetch(url, {
                method: "DELETE",
                headers: {
                    Authorization: "fd9ba9e1-0788-4e8f-ac46-a43df43e205e"
                }
            });
        } catch (err) {
            console.log(err);
        };
    };

    return (
        <li>
            Name: {name} Category: {category_name}
            <button className="btn btn-danger" onClick={handleRemove}>REMOVE</button>
            <a className="btn btn-info" href={`/products/${id}`}>EDIT</a>
        </li>
    );
};

export default Product;