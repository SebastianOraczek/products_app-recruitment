import "../styles/Product.css"

function Product(props) {
    const { name, category_name, id } = props;


    // const handleRemove = async (evt) => {
    //     const url = `https://newdemostock.gopos.pl/ajax/219/products/${id}`;
    //     try {
    //         await axios.delete(url, { headers });
    //     } catch (err) {
    //         console.log(err);
    //     };
    // };

    return (
        <div className="card mb-3">
            <div className="card-body">
                <div className="card-text">
                    <p><b>Product name:</b> {name} </p>
                    <p><b>Category:</b> {category_name}</p>
                </div>
                <div className="buttons">
                    <a className="btn btn-info text-white" href={`/products/${id}`}>Edit</a>
                    {/* <button className="btn btn-danger ms-2" onClick={handleRemove}>Remove</button> */}
                </div>
            </div>
        </div>
    );
};

export default Product;