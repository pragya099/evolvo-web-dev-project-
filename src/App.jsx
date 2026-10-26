import { useState } from 'react'
import './App.css'
import products from './data/product.js'
import ProductCard from './components/ProductCard'
import CartPanel from './components/CartPanel'
import Navbar from './components/Navbar'

function App() {
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [cart, setCart] = useState([])
  const [cartOpen, setCartOpen] = useState(false)

  // Filter products using the search text
  const filteredProducts = products.filter((product) =>
    `${product.name} ${product.category}`
      .toLowerCase()
      .includes(searchTerm.trim().toLowerCase()),
  )

  // Add a product to the cart
  const addToCart = (product) => {
    setCart((currentCart) => {
      const existingProduct = currentCart.find(
        (item) => item.id === product.id,
      )

      if (existingProduct) {
        return currentCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        )
      }

      return [...currentCart, { ...product, quantity: 1 }]
    })

    setCartOpen(true)
  }

  // Increase product quantity
  const increaseQuantity = (productId) => {
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      ),
    )
  }

  // Decrease product quantity
  const decreaseQuantity = (productId) => {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        )
        .filter((item) => item.quantity > 0),
    )
  }

  // Remove a product completely
  const removeFromCart = (productId) => {
    setCart((currentCart) =>
      currentCart.filter((item) => item.id !== productId),
    )
  }

  // Calculate total number of items
  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0,
  )

  // Calculate total price
  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  )

  return (
    <div className="app">
      {/* Navigation Bar */}
      <Navbar
        searchOpen={searchOpen}
        setSearchOpen={setSearchOpen}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        cartCount={cartCount}
        setCartOpen={setCartOpen}
      />

      {/* Shopping Cart Component */}
      <CartPanel
        cart={cart}
        cartCount={cartCount}
        cartTotal={cartTotal}
        cartOpen={cartOpen}
        setCartOpen={setCartOpen}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        removeFromCart={removeFromCart}
      />

      <main>
        {/* Hero Section */}
        <section className="hero-section" id="home">
          <div className="hero-content">
            <p className="eyebrow">A SMARTER WAY TO SHOP</p>

            <h1>
              Shopping that
              <br />
              <span>evolves with you.</span>
            </h1>

            <p className="hero-description">
              Discover products that fit your needs, your budget,
              and your lifestyle. Let AI help you make smarter
              shopping decisions.
            </p>

            <div className="hero-actions">
              <a href="#products" className="primary-btn">
                Explore Products →
              </a>

              <button className="secondary-btn">
                ✨ Meet Your AI Assistant
              </button>
            </div>

            <div className="hero-note">
              <span>✦</span> Better choices. Smarter shopping.
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-circle">
              <div className="floating-card card-top">
                ✨ AI-powered recommendations
              </div>

              <div className="shopping-bag">🛍️</div>

              <div className="floating-card card-bottom">
                ✓ Made for your needs
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section
          className="categories-section"
          id="categories"
        >
          <div className="section-heading">
            <div>
              <p className="eyebrow">EXPLORE OUR STORE</p>
              <h2>Find what you need.</h2>
            </div>

            <p>Everything you need, all in one place.</p>
          </div>

          <div className="category-grid">
            <a href="#products" className="category-card">
              <span className="category-icon">💻</span>
              <h3>Electronics</h3>
              <p>Tech for everyday life</p>
            </a>

            <a href="#products" className="category-card">
              <span className="category-icon">👕</span>
              <h3>Fashion</h3>
              <p>Find your everyday style</p>
            </a>

            <a href="#products" className="category-card">
              <span className="category-icon">🏠</span>
              <h3>Home & Living</h3>
              <p>Make your space yours</p>
            </a>

            <a href="#products" className="category-card">
              <span className="category-icon">📚</span>
              <h3>Study & Office</h3>
              <p>Build your ideal workspace</p>
            </a>
          </div>
        </section>

        {/* Products Section */}
        <section className="products-section" id="products">
          <div className="section-heading">
            <div>
              <p className="eyebrow">OUR COLLECTION</p>
              <h2>Picked for everyday life.</h2>
            </div>

            <p>Explore products across categories.</p>
          </div>

          <div className="product-grid">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                addToCart={addToCart}
              />
            ))}

            {filteredProducts.length === 0 && (
              <p className="no-results">
                No products found. Try another search.
              </p>
            )}
          </div>
        </section>

        {/* AI Introduction Section */}
        <section className="ai-section" id="about">
          <div>
            <p className="eyebrow">INTRODUCING EVOLVO AI</p>

            <h2>
              Don't just shop.
              <br />
              <span>Shop smarter.</span>
            </h2>
          </div>

          <p>
            Tell us what you need and your budget. EVOLVO will
            help you discover suitable products and compare your
            options, so you can make the final decision confidently.
          </p>

          <button className="primary-btn">
            Discover Smart Shopping →
          </button>
        </section>

        {/* Footer */}
        <footer className="footer">
          <a href="#home" className="brand">
            EVOLVO<span>.</span>
          </a>

          <p>Intelligent commerce. Evolving with you.</p>

          <p>© 2026 EVOLVO. Built for smarter shopping.</p>
        </footer>
      </main>
    </div>
  )
}

export default App

