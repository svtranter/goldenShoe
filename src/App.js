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
import featuredShoes from "./featuredShoes.jpg";


function App() {
  //Create dummy products
  const products = [
    {
        id: 1,
        name: "Saddle Loafers",
        imgsrc: featuredShoes,
        description: "The track sole makes the shoe look casual and versatile. It goes perfect with a suit or a pretty summer dress.",
        price: 49.99
    },
    {
        id: 2,
        name: "Saddle Loafers 2: Electric Boogaloo",
        imgsrc: featuredShoes,
        description: "The track sole makes the shoe look casual and versatile. It goes perfect with a suit or a pretty summer dress.",
        price: 49.99
    },
    {
        id: 3,
        name: "Return Of The Saddle Loafers",
        imgsrc: featuredShoes,
        description: "The track sole makes the shoe look casual and versatile. It goes perfect with a suit or a pretty summer dress.",
        price: 49.99
    },
    {
        id: 4,
        name: "Saddle Loafers Reloaded",
        imgsrc: featuredShoes,
        description: "The track sole makes the shoe look casual and versatile. It goes perfect with a suit or a pretty summer dress.",
        price: 49.99
    },
    {
        id: 5,
        name: "Saddle Loafers Endgame",
        imgsrc: featuredShoes,
        description: "The track sole makes the shoe look casual and versatile. It goes perfect with a suit or a pretty summer dress.",
        price: 49.99
    },
    {
        id: 6,
        name: "Saddle Loafers And The Half-Blood Prince",
        imgsrc: featuredShoes,
        description: "The track sole makes the shoe look casual and versatile. It goes perfect with a suit or a pretty summer dress.",
        price: 49.99
    }
]
  //Create empty cart
  const cart = [];

  //Function to add item to cart
  const addToCart = (id) => {
    console.log(id);
    console.log(cart);
    const check_index = cart.findIndex(item => item.id === id);
    if (check_index !== -1) {
            
      cart[check_index].quantity++;
            
      console.log("Quantity updated:", cart);
    } else {
            
      cart.push({
        ...products.find(p => p.id === id),
        quantity: 1
      })
            
      console.log("The product has been added to cart:", cart);
      }
    }

    //Function to remove item from cart (currently doesn't update Shopping Cart)
    const removeFromCart = (id) => {
      const check_index = cart.findIndex(item => item.id === id);
      cart.splice(check_index, 1);
      console.log("This item has been removed from the cart:", cart)
      return cart;
    }

  return (
    <BrowserRouter>
      <NavBar cart={cart} removeFromCart={removeFromCart}/>
           
      <Container>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path="/products" element={<Products products={products} addToCart={addToCart}/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/faq" element={<FAQ/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
