import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { useGlobalContext } from '../Context';

const Products = ({ product }) => {
  const { handleDetails } = useGlobalContext()
  const { id, title, img, price, count, inCart } = product;
  return (
    <div>
      <div className="card">

        <Link onClick={() => handleDetails(id)} to="/details">
          <img className="homeImg" src={img} alt={title} />
        </Link>
        <div className="items">
          <h4>{title}</h4>
          <h4>&#8358;{price}</h4>
        </div>
      </div>

    </div>
  )
}

export default Products
