// import logo from './logo.svg';
import './App.css';
import Login from './components/login';
import Register from './components/register';
import Homepage from './components/homepage';
import CateringDetail from './components/cateringDetail';
import Cart from './components/cart'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';

function App() {
  return (
 
    <Router>
      <Header/>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/catering/:id" element={<CateringDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
