import React, { useState } from 'react';
import './App.css';
import Navbar from './Componets/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
 import { Login } from './Pages/Login'; 
import { Register } from './Pages/Register';

function App() {
  const [currentForm, setCurrentForm] = useState('login');
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/shop' element={<ShopCategory category="Shop" />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/product' element={<Product />} />
          <Route path='/product/:productId' element={<Product />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      }
      <Login />
    </div>
  );
  
}

export default App;