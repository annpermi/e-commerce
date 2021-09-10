import React, { useState, useEffect } from 'react';
import './App.css';
import { Products, Navbar, Cart } from './components';
//instead of backend
import { commerce } from './lib/commerce';
// import Products from './components/products/Products';
// import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


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
    <Router>
      <div>
        <Navbar totalItems={cart.total_items} />
        <Switch>
          <Route exact path='/'>
            <Products products={products} onAddToCart={handleAddToCart}/>
          </Route>
          <Route exact patch='/cart'>
            <Cart cart={cart}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
