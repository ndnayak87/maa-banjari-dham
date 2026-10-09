import { useParams, Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard.jsx'
import { getProductsByCategory, getCategoryBySlug } from '../data/products.js'

export default function Category() {
  const { slug } = useParams()
  const category = getCategoryBySlug(slug)
  const products = getProductsByCategory(slug)

  if (!category) {
    return (
      <div className="container not-found">
        <h1>Category Not Found</h1>
        <p>The category you're looking for doesn't exist.</p>
        <Link to="/" className="btn-primary">Go Home</Link>
      </div>
    )
  }

  return (
    <div className="category-page">
      <div className="container">
        <nav className="breadcrumb">
          <Link to="/">Home</Link> / <span>{category.name}</span>
        </nav>
        <h1 className="page-title">{category.icon} {category.name}</h1>
        <p className="results-count">{products.length} products found</p>
        <div className="products-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}
