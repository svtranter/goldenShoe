import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import featuredShoes from "./featuredShoes.jpg";
import Button from "react-bootstrap/Button";


function Products() {
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

    const cart = [];

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

    const cardBuilder = (card, index) => {
        return (
            <Card style={{ width: "18rem" }} key={index} className="box">
            <Card.Img variant="top" src={card.imgsrc} />
            <Card.Body>
            <Card.Title>{card.name}</Card.Title>
            <Card.Text>
            {card.description}
            </Card.Text>
            </Card.Body>
            <Card.Footer>
            <small>£{card.price}{' '}</small>
            <Button variant="danger" className="float-end" onClick={() => addToCart(card.id)} >Add to basket</Button>
            </Card.Footer>
        </Card>     
        );
    };
    

    return (
        <Container>
            <br/>
            <h2 className="title">All products</h2>
            <br/>
            <Row>
                {products.map(cardBuilder)}
            </Row>
                
            
        </Container>
    )
}

export default Products;