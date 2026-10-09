import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'

export default function Checkout() {
  const { cart, cartTotal, clearCart } = useCart()
  const navigate = useNavigate()
  const [orderPlaced, setOrderPlaced] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    pincode: '',
    payment: 'cod',
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setOrderPlaced(true)
    clearCart()
  }

  if (orderPlaced) {
    return (
      <div className="container order-success">
        <div className="success-icon">✅</div>
        <h1>Order Placed Successfully!</h1>
        <p>Thank you for shopping with BABA SHIV ENTERPRISES.</p>
        <p>Your order will be delivered within 3-5 business days.</p>
        <p>Order confirmation has been sent to your email.</p>
        <Link to="/" className="btn-primary">Continue Shopping</Link>
      </div>
    )
  }

  if (cart.length === 0) {
    return (
      <div className="container empty-cart">
        <h1>No items to checkout</h1>
        <p>Add some products to your cart first.</p>
        <Link to="/" className="btn-primary">Continue Shopping</Link>
      </div>
    )
  }

  return (
    <div className="container checkout-page">
      <h1 className="page-title">Checkout</h1>
      <form onSubmit={handleSubmit} className="checkout-grid">
        <div className="checkout-form">
          <h2>Delivery Address</h2>
          <div className="form-group">
            <label>Full Name *</label>
            <input type="text" name="name" value={form.name} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Email *</label>
            <input type="email" name="email" value={form.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Phone *</label>
            <input type="tel" name="phone" value={form.phone} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Address *</label>
            <textarea name="address" value={form.address} onChange={handleChange} required rows={3} />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>City *</label>
              <input type="text" name="city" value={form.city} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Pincode *</label>
              <input type="text" name="pincode" value={form.pincode} onChange={handleChange} required />
            </div>
          </div>

          <h2>Payment Method</h2>
          <div className="payment-options">
            <label className="payment-option">
              <input type="radio" name="payment" value="cod" checked={form.payment === 'cod'} onChange={handleChange} />
              <span>💵 Cash on Delivery</span>
            </label>
            <label className="payment-option">
              <input type="radio" name="payment" value="upi" checked={form.payment === 'upi'} onChange={handleChange} />
              <span>📱 UPI</span>
            </label>
            <label className="payment-option">
              <input type="radio" name="payment" value="card" checked={form.payment === 'card'} onChange={handleChange} />
              <span>💳 Credit/Debit Card</span>
            </label>
            <label className="payment-option">
              <input type="radio" name="payment" value="emi" checked={form.payment === 'emi'} onChange={handleChange} />
              <span>📋 No Cost EMI</span>
            </label>
          </div>
        </div>

        <div className="checkout-summary">
          <h2>Order Summary</h2>
          {cart.map((item) => (
            <div key={item.id} className="summary-item">
              <img src={item.image} alt={item.name} />
              <div>
                <p className="item-name">{item.name}</p>
                <p className="item-qty">Qty: {item.qty}</p>
              </div>
              <span className="item-price">₹{(item.price * item.qty).toLocaleString()}</span>
            </div>
          ))}
          <div className="summary-row">
            <span>Subtotal</span>
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
          <button type="submit" className="btn-primary place-order-btn">
            Place Order
          </button>
        </div>
      </form>
    </div>
  )
}
