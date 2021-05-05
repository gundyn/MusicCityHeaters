import React from 'react'
// import ProductItem from './ProductItem'
// import withContext from '../withContext'

const ProductList = props => {
  const { products } = props.context

  return (
    <div>
      <div className="hero is-primary">
        <div className="hero-body container">
          <h4 className="title">Our Products</h4>
        </div>
      </div>
      <br />
      <div className="Container">
        <div className=" column columns is-muliline">
          {products && products.length ? (
            products.map((product, index) => (
              <ProductItem
                product={product}
                key={index}
                addToCart={props.context.addToCart}
              />
            ))
          ) : (
            <div className="column">
              <span className="title has-text-grey-light">
                No products found!
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default withContext(ProductList)
