import { useSearchParams, Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard.jsx'
import { searchProducts } from '../data/products.js'

export default function SearchResults() {
  const [searchParams] = useSearchParams()
  const query = searchParams.get('q') || ''
  const results = searchProducts(query)

  return (
    <div className="container search-results">
      <nav className="breadcrumb">
        <Link to="/">Home</Link> / <span>Search</span>
      </nav>
      <h1 className="page-title">Search Results for "{query}"</h1>
      <p className="results-count">{results.length} products found</p>
      {results.length > 0 ? (
        <div className="products-grid">
          {results.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="no-results">
          <p>No products found matching your search.</p>
          <p>Try searching for "TV", "Mobile", "Laptop", "AC", etc.</p>
          <Link to="/" className="btn-primary">Go Home</Link>
        </div>
      )}
    </div>
  )
}
