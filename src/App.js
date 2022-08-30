import logo from './logo.svg';
import './App.css';
import Products from './Pages/Products';
import { Route,Routes } from 'react-router-dom';
import ProductDetail from './Pages/ProductDetail';
import Navbar from './Components/Navbar';
function App() {
  return (
    <div className="container mx-auto">
      <Navbar/>
      <Routes>
        <Route path='/' exact element={<Products/>}></Route>
        <Route path='/:category_id'  element={<Products/>}></Route>
        <Route path='/product/:product_id'  element={<ProductDetail/>}></Route>
      </Routes>
    </div>
   
  );
}

export default App;
