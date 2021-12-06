import React, {useState} from 'react';
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

  const [products, setProducts] =useState([
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
])

const [cart, setCart] = useState([]);

const removeFromCart = (id) => {
  console.log(id);
  const newCart = cart.filter((item) => item.id !== id);
  console.log(newCart)
  setCart(newCart);
}

const addToCart = (id) => {
    console.log(id);
    console.log(cart);
    let newCart = cart;
    const check_index = cart.findIndex(item => item.id === id);
    if (check_index !== -1) {
        newCart[check_index].quantity++;
        console.log("Quantity updated:", newCart);
    } else {
        newCart.push({
            ...products.find(p => p.id === id),
            quantity: 1
        })
        console.log("The product has been added to cart:", newCart);
    }
    setCart(newCart);
}

  return (
    <BrowserRouter>
      <NavBar cart={cart} remove={removeFromCart} />
           
      <Container>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path="/products" element={<Products products={products} add={addToCart}/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/faq" element={<FAQ/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
