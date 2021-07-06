import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { useGlobalContext } from '../../Context';

const CartList = ({ item }) => {
  const { increment, decrement, removeItem } = useGlobalContext();
  const { id, title, img, price, count } = item;
  return (
    <div className="cartItems">

      <Link to="/details">
        <img className="cartImg" src={img} alt={title} />
      </Link>
      <h4><span className="orange">Title: </span>{title}</h4>
      <h4> <span className="orange">Unit Price: </span> &#8358;{price}</h4>
      <div className="">
        <h4><span className="orange">Quantity:</span></h4>
        <button onClick={() => decrement(id)}>-</button>
        <span className="count">{count}</span>
        <button onClick={() => increment(id)}>+</button>
      </div>
      <div className="">
        <button onClick={() => removeItem(id)}>Delete</button>
      </div>
    </div>
  )
}

export default CartList
