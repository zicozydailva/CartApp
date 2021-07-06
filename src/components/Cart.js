import React from 'react'
import { useGlobalContext } from '../Context'
import CartList from './Cart/CartList';
import EmptyCart from './EmptyCart';
import Title from './Title';

const Cart = () => {
  const { cart, increment, clearCart, decrement, removeItem, cartTax, cartTotal } = useGlobalContext();

  if (cart.length < 1) {
    return <EmptyCart />
  } else {

    console.log(cart);
    return (
      <>
        <Title name="My" title="Cart" />
        <section className="cartContainer">
          {
            cart.map(item => {
              return <CartList key={item.id} item={item} />
            })
          }
        </section>
        <section className="paymentSec">
          <button onClick={() => clearCart()}>Clear Cart</button>
          <h2>Tax: &#8358;{cartTax}</h2>
          <h2>Total: &#8358;{cartTotal}</h2>
        </section>
      </>
    )
  }

}

export default Cart
