
import './App.css';
import Navbar from './Componets/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/shop' element={<ShopCategory category="Shop"/>}/>
        <Route path='/cart' element={<ShopCategory category="Cart"/>}/>
        <Route path='/product' element={<Product/>}/>
          <Routes path='productId' element={<Product/>}/>
      </Routes>
      <Route path='/cart' element={<Cart/>}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
