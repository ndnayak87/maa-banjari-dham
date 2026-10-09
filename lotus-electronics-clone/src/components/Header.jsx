import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'
import { CATEGORIES } from '../data/products.js'

export default function Header() {
  const { cartCount } = useCart()
  const [searchQuery, setSearchQuery] = useState('')
  const [showCategories, setShowCategories] = useState(false)
  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`)
      setSearchQuery('')
    }
  }

  return (
    <header className="header">
      {/* Top Bar */}
      <div className="topbar">
        <div className="container topbar-inner">
          <div className="topbar-left">
            <span>📞 9039030946</span>
            <span>📍 Village Malod, Silyari, Raipur (C.G.)</span>
          </div>
          <div className="topbar-right">
            <Link to="/login">Login / Register</Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="main-header">
        <div className="container main-header-inner">
          <Link to="/" className="logo">
            <img src="/logo.png" alt="BABA SHIV ENTERPRISES" className="logo-img" />
          </Link>

          <form className="search-bar" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search for TVs, Mobiles, Laptops, ACs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit">🔍</button>
          </form>

          <div className="header-actions">
            <Link to="/login" className="header-action">
              <span className="action-icon">👤</span>
              <span className="action-text">Account</span>
            </Link>
            <Link to="/cart" className="header-action cart-action">
              <span className="action-icon">🛒</span>
              <span className="action-text">Cart</span>
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </Link>
          </div>
        </div>
      </div>

      {/* Category Nav */}
      <nav className="category-nav">
        <div className="container">
          <button
            className="all-categories-btn"
            onClick={() => setShowCategories(!showCategories)}
          >
            ☰ All Categories
          </button>
          <ul className="nav-links">
            {CATEGORIES.map((cat) => (
              <li key={cat.slug}>
                <Link to={`/category/${cat.slug}`}>{cat.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Category Dropdown */}
      {showCategories && (
        <div className="mobile-categories">
          <div className="container">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.slug}
                to={`/category/${cat.slug}`}
                onClick={() => setShowCategories(false)}
              >
                {cat.icon} {cat.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
