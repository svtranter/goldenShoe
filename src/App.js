import React from 'react';
import './App.css';
import NavBar from './navbar';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Home from './home';
import About from './about';
import FAQ from './faq';
import Contact from './contact';
import Products from './products';


function App() {

  return (
    <BrowserRouter>
      <NavBar />
           
      <Container>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About/>} />
          <Route path="/faq" element={<FAQ/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
