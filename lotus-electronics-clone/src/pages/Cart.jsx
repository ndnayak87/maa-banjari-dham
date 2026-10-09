import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'

export default function Cart() {
  const { cart, removeFromCart, updateQty, cartTotal } = useCart()

  if (cart.length === 0) {
    return (
      <div className="container empty-cart">
        <h1>🛒 Your Cart is Empty</h1>
        <p>Looks like you haven't added anything to your cart yet.</p>
        <Link to="/" className="btn-primary">Continue Shopping</Link>
      </div>
    )
  }

  return (
    <div className="container cart-page">
      <h1 className="page-title">Shopping Cart</h1>
      <div className="cart-grid">
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div className="cart-item-info">
                <Link to={`/product/${item.id}`} className="cart-item-name">
                  {item.name}
                </Link>
                <span className="cart-item-brand">{item.brand}</span>
                <div className="cart-item-price">
                  <span className="price">₹{item.price.toLocaleString()}</span>
                  <span className="mrp">₹{item.mrp.toLocaleString()}</span>
                </div>
              </div>
              <div className="cart-item-qty">
                <button onClick={() => updateQty(item.id, item.qty - 1)}>-</button>
                <span>{item.qty}</span>
                <button onClick={() => updateQty(item.id, item.qty + 1)}>+</button>
              </div>
              <div className="cart-item-total">
                ₹{(item.price * item.qty).toLocaleString()}
              </div>
              <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                🗑️
              </button>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <h2>Order Summary</h2>
          <div className="summary-row">
            <span>Subtotal ({cart.reduce((s, i) => s + i.qty, 0)} items)</span>
            <span>₹{cartTotal.toLocaleString()}</span>
          </div>
          <div className="summary-row">
            <span>Delivery</span>
            <span className="free">FREE</span>
          </div>
          <div className="summary-row total">
            <span>Total</span>
            <span>₹{cartTotal.toLocaleString()}</span>
          </div>
          <Link to="/checkout" className="btn-primary checkout-btn">
            Proceed to Checkout
          </Link>
          <Link to="/" className="continue-shopping">
            ← Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  )
}
