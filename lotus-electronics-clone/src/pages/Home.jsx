import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard.jsx'
import { CATEGORIES, HERO_SLIDES, getDeals, getBestSellers, BRANDS } from '../data/products.js'

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const deals = getDeals()
  const bestSellers = getBestSellers()

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="home">
      {/* Hero Slider */}
      <section className="hero-slider">
        {HERO_SLIDES.map((slide, index) => (
          <div
            key={slide.id}
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
            style={{ background: slide.bg }}
          >
            <div className="container hero-content">
              <h1>{slide.title}</h1>
              <h2>{slide.subtitle}</h2>
              <p>{slide.description}</p>
              <Link to={slide.link} className="hero-cta">{slide.cta}</Link>
            </div>
          </div>
        ))}
        <div className="slider-dots">
          {HERO_SLIDES.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="section categories-section">
        <div className="container">
          <h2 className="section-title">Shop by Category</h2>
          <div className="categories-grid">
            {CATEGORIES.map((cat) => (
              <Link key={cat.slug} to={`/category/${cat.slug}`} className="category-card">
                <img src={cat.image} alt={cat.name} loading="lazy" />
                <span className="category-name">{cat.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Deals of the Day */}
      <section className="section deals-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">🔥 Deals of the Day</h2>
            <Link to="/category/tv" className="view-all">View All →</Link>
          </div>
          <div className="products-grid">
            {deals.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="section brands-section">
        <div className="container">
          <h2 className="section-title">Top Brands</h2>
          <div className="brands-grid">
            {BRANDS.map((brand) => (
              <div key={brand} className="brand-card">{brand}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">⭐ Bestsellers</h2>
            <Link to="/category/mobiles" className="view-all">View All →</Link>
          </div>
          <div className="products-grid">
            {bestSellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section features-section">
        <div className="container">
          <div className="features-grid">
            <div className="feature">
              <span className="feature-icon">🚚</span>
              <h3>Free Delivery</h3>
              <p>On orders above ₹500</p>
            </div>
            <div className="feature">
              <span className="feature-icon">🔄</span>
              <h3>Easy Returns</h3>
              <p>7-day return policy</p>
            </div>
            <div className="feature">
              <span className="feature-icon">🛡️</span>
              <h3>1 Year Warranty</h3>
              <p>On all electronics</p>
            </div>
            <div className="feature">
              <span className="feature-icon">💬</span>
              <h3>24/7 Support</h3>
              <p>Dedicated help center</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
