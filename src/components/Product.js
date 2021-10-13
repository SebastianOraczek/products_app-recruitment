function Product(props) {
    const { id, label, group } = props;

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
        <div>
            <li>Name: {label} Category: {group}</li>
            <button onClick={handleRemove}>REMOVE</button>
        </div>
    );
};


export default Product;