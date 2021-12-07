import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import './App.css';


function Products(props) {
    
    // Build cards for all the products in the pretend database
    const cardBuilder = (card, index) => {
        return (
            <Card style={{ width: "18rem" }} key={index} className="productCard">
            <Card.Img variant="top" src={card.imgsrc} />
            <Card.Body>
            <Card.Title>{card.name}</Card.Title>
            <Card.Text>
            {card.description}
            </Card.Text>
            </Card.Body>
            <Card.Footer>
            <small>£{card.price}{' '}</small>
            {/* Button to add product to cart */}
            <Button variant="danger" className="float-end" onClick={() => props.addToCart(card.id)} >Add to basket</Button>
            </Card.Footer>
        </Card>     
        );
    };
    

    return (
        <Container>
            <br/>
            <h2 className="title">All products</h2>
            <br/>
            <Row className="productPage">
                {props.products.map(cardBuilder)}
            </Row>
                
            
        </Container>
    )
}

export default Products;