
function ProductInfo() {
    return (
        <div>
            <p>$2000</p>
            <p>Electronics</p>
            <p>In Stock</p>
        </div>
    )
}

function ProductCard() {
    return (
        <div>
            <h2>Gaming Laptop</h2>
            <ProductInfo />
        </div>
    )
}

export default ProductCard;