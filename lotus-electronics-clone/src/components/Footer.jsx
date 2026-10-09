import { Link } from 'react-router-dom'
import { CATEGORIES } from '../data/products.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <h3>About BABA SHIV ENTERPRISES</h3>
            <p>
              Your trusted electronics destination in Raipur, Chhattisgarh.
              Genuine products, unbeatable prices, and reliable service for
              all your electronics needs.
            </p>
            
          </div>

          <div className="footer-col">
            <h3>Shop by Category</h3>
            <ul>
              {CATEGORIES.slice(0, 6).map((cat) => (
                <li key={cat.slug}>
                  <Link to={`/category/${cat.slug}`}>{cat.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h3>Customer Service</h3>
            <ul>
              <li><Link to="/">Track Your Order</Link></li>
              <li><Link to="/">Return & Exchange</Link></li>
              <li><Link to="/">Warranty Policy</Link></li>
              <li><Link to="/">FAQs</Link></li>
              <li><Link to="/">Shipping Info</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Contact Us</h3>
            <ul className="contact-info">
              <li>📞 9039030946</li>
              <li>📍 Village Malod, Silyari, District Raipur, Chhattisgarh</li>
              <li>🕐 Mon-Sat: 10AM - 9PM</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 BABA SHIV ENTERPRISES. All rights reserved. | Powered by <a href="https://hoshiyartech.in/company" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--secondary-light)' }}>Hoshiyartech</a></p>
        </div>
      </div>
    </footer>
  )
}
