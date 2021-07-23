import React, { useState, useEffect } from 'react';
import './App.css';
import { Products, Navbar } from './components';
//instead of backend
import { commerce } from './lib/commerce';
// import Products from './components/products/Products';
// import Navbar from './components/navbar/Navbar';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({})

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data)
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <div>
      <Navbar/>
      <Products products={products}/>
    </div>
  );
}

export default App;
