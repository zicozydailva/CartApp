import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { useGlobalContext } from '../Context'

const Details = () => {
  const { detProducts, addToCart, removeItem, increment, decrement } = useGlobalContext();
  const { id, title, price, count, img, info, company, inCart } = detProducts
  return (
    <div className="detContainer">
      <img className="detImg" src={img} alt={title} />
      <div className="itemB">

        <h4>{title}</h4>
        <h4>&#8358;{price}</h4>
        <div className="btns">
          {
            inCart ? <div>
              <button onClick={() => decrement(id)}>-</button>
              <span className="count">{count}</span>
              <button onClick={() => increment(id)}>+</button>
            </div> : <button onClick={() => addToCart(id)}>Add To Cart</button>
          }
          <Link to="/">
            <button>Back to Product</button>
          </Link>
        </div>
        <h6>Seller: {company}</h6>
        <h6>Description: {info}</h6>
      </div>
    </div>
  )
}

export default Details
