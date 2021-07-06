import React from 'react'
import { useGlobalContext } from '../Context'
import Products from './Products'
import Title from "./Title"

const ProductList = () => {
  const { products } = useGlobalContext()
  return (
    <>
      <Title name="Available" title="Products" />
      <div className="productContainer">
        {products.map(product => {
          return <Products key={product.id} product={product} />
        })}
      </div>
    </>
  )
}

export default ProductList
