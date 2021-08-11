import React, { useState, useEffect } from 'react';
import './App.css';
import { Products, Navbar, Cart } from './components';
//instead of backend
import { commerce } from './lib/commerce';
// import Products from './components/products/Products';
// import Navbar from './components/navbar/Navbar';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data)
  }

  //Check what is in the cart, no need for back end
  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve())
  }

  //Add products to the cart
  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    //this is the cart after items was added to the cart
    setCart(item.cart)
  }

  useEffect(() => {
    fetchProducts();
    fetchCart()
  }, [])

  return (
    <div>
      <Navbar totalItems={cart.total_items} />
      <Products products={products} onAddToCart={handleAddToCart}/>
      <Cart cart={cart}/>
    </div>
  );
}

export default App;
