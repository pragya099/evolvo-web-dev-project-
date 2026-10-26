function ProductCard({ product, addToCart }) {
  return (
    <div className="product-card">
      <div className="product-image">
        <span>{product.emoji}</span>
      </div>

      <div className="product-info">
        <p className="product-category">{product.category}</p>

        <h3>{product.name}</h3>

        <div className="product-bottom">
          <p className="product-price">
            ₹{product.price.toLocaleString("en-IN")}
          </p>

          <button onClick={() => addToCart(product)}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;