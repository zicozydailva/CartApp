import React, { useState, useEffect, createContext, useContext } from 'react'
import {  } from 'react/cjs/react.production.min';
import {storeProducts, detailProduct} from "./data";

const ProductContext = createContext();

const ProductProvider = ({children}) => {

  const [products, setProducts] = useState([])
  const [detProducts, setDetproducts] = useState(detailProduct)
  const [cart, setCart] = useState([])
  const [cartSubTotal, setCartSubTotal] = useState(0)
  const [cartTotal, setCartTotal] = useState(0)
  const [cartTax, setCartTax] = useState(0)


  let setProduct = () => {
    let tempProducts = []
    storeProducts.forEach(item => {
      const singleItem = { ...item };
      tempProducts = [...tempProducts, singleItem]
    })
    setProducts(tempProducts)
  }

  useEffect(() => {
    setProduct()
  }, [])

  const getItem = id => {
    let tempItem = products.find(item => item.id === id)
    return tempItem;
  }

  const handleDetails = id => {
    const item = getItem(id)
    setDetproducts(item)
  }

  const addToCart = id => {
    let tempProducts = [...products];
    let index = tempProducts.indexOf(getItem(id))
    let product1 = tempProducts[index];
    product1.inCart = true;
    product1.count = 1;
    const price = product1.price
    product1.total = price;
    setProducts(tempProducts);
    setCart([...cart, product1]);
  }

  const addTotals = () => {
    let subTotal = 0;
    cart.map(item => (subTotal += item.total));
    let tempTax = subTotal * 0.1;
    let tax = parseFloat(tempTax.toFixed(2))
    let total = subTotal + tax;
    // REMOVE TAX VALUE WHEN DONE(NOT REQUIRED)
    setCartSubTotal(subTotal);
    setCartTax(tax)
    setCartTotal(total)
  }

  const increment = (id) => {
    let tempCart = [...cart]
    let selectedProduct = tempCart.find(item => item.id === id)
    let index = tempCart.indexOf(selectedProduct);
    let product = tempCart[index]
    product.count = product.count + 1;
    product.total = product.count * product.price;
    setCart([...tempCart])
    addTotals()
  }

  const decrement = (id) => {
    let tempCart = [...cart];
    let selectedPro = tempCart.find(item => item.id === id)
    let index = tempCart.indexOf(selectedPro);
    let product = tempCart[index];

    product.count = product.count - 1;
    if (product.count == 0) {
      removeItem(id)
    } else {
      product.total = product.count * product.price;
      setCart([...tempCart])
      addTotals()
    }
  }

  const removeItem = id => {
    let tempProducts = [...products];
    let tempCart = [...cart];

    tempCart = tempCart.filter(item => item.id !== id)

    const index = tempProducts.indexOf(getItem(id))
    let removedProduct = tempProducts[index]
    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0
    setCart([...tempCart]);
    setProducts([...tempProducts]);
    addTotals()
  }

  const clearCart = () => {
   return setCart([])
  }

  return (
    <ProductContext.Provider value={{
                    products,
                    detProducts,
                    handleDetails,
                    addToCart,
                    increment,
                    decrement,
                    cart,
                    removeItem,
                    cartTax,
                    cartTotal,
                    clearCart
    }}>
      {children}
    </ProductContext.Provider>
  )
}

const useGlobalContext = () => {
  return useContext(ProductContext)
}

export  {ProductProvider, useGlobalContext}
