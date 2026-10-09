import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'

export default function ProductCard({ product }) {
  const { addToCart } = useCart()
  const discount = Math.round(((product.mrp - product.price) / product.mrp) * 100)

  return (
    <div className="product-card">
      {product.badge && <span className="product-badge">{product.badge}</span>}
      <Link to={`/product/${product.id}`} className="product-image">
        <img src={product.image} alt={product.name} loading="lazy" />
      </Link>
      <div className="product-info">
        <span className="product-brand">{product.brand}</span>
        <Link to={`/product/${product.id}`} className="product-name">
          {product.name}
        </Link>
        <div className="product-rating">
          <span className="stars">{'★'.repeat(Math.floor(product.rating))}</span>
          <span className="rating-num">{product.rating}</span>
          <span className="reviews">({product.reviews.toLocaleString()})</span>
        </div>
        <div className="product-price">
          <span className="price">₹{product.price.toLocaleString()}</span>
          <span className="mrp">₹{product.mrp.toLocaleString()}</span>
          <span className="discount">{discount}% off</span>
        </div>
        <button className="add-to-cart-btn" onClick={() => addToCart(product)}>
          Add to Cart
        </button>
      </div>
    </div>
  )
}
