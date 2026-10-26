function Navbar({
  searchOpen,
  setSearchOpen,
  searchTerm,
  setSearchTerm,
  cartCount,
  setCartOpen,
}) {
  return (
    <header className="navbar">
      <a href="#home" className="brand">
        EVOLVO<span>.</span>
      </a>

      <nav className="nav-links">
        <a href="#home">Home</a>
        <a href="#categories">Categories</a>
        <a href="#products">Products</a>
        <a href="#about">About</a>
      </nav>

      <div className="nav-actions">
        <button
          className="icon-btn"
          aria-label="Search"
          aria-expanded={searchOpen}
          onClick={() => setSearchOpen((open) => !open)}
        >
          🔍
        </button>

        {searchOpen && (
          <input
            className="search-input"
            type="search"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            aria-label="Search products"
          />
        )}

        <button
          className="icon-btn cart-icon-btn"
          aria-label="Shopping cart"
          aria-expanded={false}
          onClick={() => setCartOpen(true)}
        >
          🛒
          {cartCount > 0 && (
            <span className="cart-count">{cartCount}</span>
          )}
        </button>

        <button className="login-btn">Login</button>
      </div>
    </header>
  )
}

export default Navbar