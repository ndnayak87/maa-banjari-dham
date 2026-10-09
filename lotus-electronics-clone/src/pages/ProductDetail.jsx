import { useParams, Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useCart } from '../context/CartContext.jsx'
import { getProductById, getProductsByCategory } from '../data/products.js'
import ProductCard from '../components/ProductCard.jsx'

export default function ProductDetail() {
  const { id } = useParams()
  const product = getProductById(id)
  const { addToCart } = useCart()
  const navigate = useNavigate()
  const [qty, setQty] = useState(1)

  if (!product) {
    return (
      <div className="container not-found">
        <h1>Product Not Found</h1>
        <p>The product you're looking for doesn't exist.</p>
        <Link to="/" className="btn-primary">Go Home</Link>
      </div>
    )
  }

  const relatedProducts = getProductsByCategory(product.category).filter(
    (p) => p.id !== product.id
  ).slice(0, 4)

  const discount = Math.round(((product.mrp - product.price) / product.mrp) * 100)

  const handleBuyNow = () => {
    addToCart(product, qty)
    navigate('/checkout')
  }

  return (
    <div className="product-detail">
      <div className="container">
        <nav className="breadcrumb">
          <Link to="/">Home</Link> / <Link to={`/category/${product.category}`}>{product.category}</Link> / <span>{product.name}</span>
        </nav>

        <div className="product-detail-grid">
          <div className="product-gallery">
            {product.badge && <span className="product-badge">{product.badge}</span>}
            <img src={product.image} alt={product.name} />
          </div>

          <div className="product-detail-info">
            <span className="product-brand">{product.brand}</span>
            <h1>{product.name}</h1>
            <div className="product-rating">
              <span className="stars">{'★'.repeat(Math.floor(product.rating))}</span>
              <span className="rating-num">{product.rating}</span>
              <span className="reviews">({product.reviews.toLocaleString()} reviews)</span>
            </div>

            <div className="product-price">
              <span className="price">₹{product.price.toLocaleString()}</span>
              <span className="mrp">MRP: ₹{product.mrp.toLocaleString()}</span>
              <span className="discount">{discount}% off</span>
            </div>
            <p className="tax-note">Inclusive of all taxes</p>

            <div className="product-specs">
              <h3>Key Specifications</h3>
              <ul>
                {product.specs.map((spec, i) => (
                  <li key={i}>✓ {spec}</li>
                ))}
              </ul>
            </div>

            <div className="qty-selector">
              <label>Quantity:</label>
              <div className="qty-controls">
                <button onClick={() => setQty(Math.max(1, qty - 1))}>-</button>
                <span>{qty}</span>
                <button onClick={() => setQty(qty + 1)}>+</button>
              </div>
            </div>

            <div className="product-actions">
              <button className="btn-add-cart" onClick={() => addToCart(product, qty)}>
                🛒 Add to Cart
              </button>
              <button className="btn-buy-now" onClick={handleBuyNow}>
                ⚡ Buy Now
              </button>
            </div>

            <div className="delivery-info">
              <p>🚚 Free delivery on orders above ₹500</p>
              <p>🔄 7-day easy returns</p>
              <p>🛡️ 1 year brand warranty</p>
            </div>
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <section className="related-products">
            <h2 className="section-title">Related Products</h2>
            <div className="products-grid">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}
