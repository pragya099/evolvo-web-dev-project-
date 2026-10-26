function CartPanel({
cart,
cartCount,
cartTotal,
cartOpen,
setCartOpen,
increaseQuantity,
decreaseQuantity,
removeFromCart,
}) {
if (!cartOpen) return null;

return (
<div className="cart-overlay" onClick={() => setCartOpen(false)}>
<div
className="cart-panel"
onClick={(event) => event.stopPropagation()}
> <div className="cart-header"> <div> <h2>Your Cart</h2> <p>{cartCount} items in your cart</p> </div>

      <button
        className="close-cart"
        onClick={() => setCartOpen(false)}
        aria-label="Close cart"
      >
        ×
      </button>
    </div>

    {cart.length === 0 ? (
      <div className="empty-cart">
        <span>🛒</span>
        <h3>Your cart is empty</h3>
        <p>Looks like you haven't added anything yet.</p>

        <button
          className="checkout-btn"
          onClick={() => setCartOpen(false)}
        >
          Continue Shopping
        </button>
      </div>
    ) : (
      <>
        <div className="cart-items">
          {cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <div className="cart-item-image">
                <span>{item.emoji}</span>
              </div>

              <div className="cart-item-details">
                <h3>{item.name}</h3>

                <p className="cart-item-price">
                  ₹{item.price.toLocaleString("en-IN")}
                </p>

                <div className="quantity-controls">
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    aria-label={`Decrease quantity of ${item.name}`}
                  >
                    −
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    onClick={() => increaseQuantity(item.id)}
                    aria-label={`Increase quantity of ${item.name}`}
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="cart-item-actions">
                <p className="cart-item-subtotal">
                  ₹
                  {(item.price * item.quantity).toLocaleString("en-IN")}
                </p>

                <button
                  className="remove-item"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <div className="cart-total">
            <span>Total</span>
            <strong>₹{cartTotal.toLocaleString("en-IN")}</strong>
          </div>

          <button
            className="checkout-btn"
            onClick={() =>
              alert("Checkout functionality will be added later!")
            }
          >
            Proceed to Checkout
          </button>

          <p className="checkout-note">
            Shipping and taxes will be calculated at checkout.
          </p>
        </div>
      </>
    )}
  </div>
</div>


);
}

export default CartPanel;

