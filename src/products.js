import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";

import Button from "react-bootstrap/Button";


function Products(props) {
    

    const handleClick = (id) => {
        props.add(id);
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
            <Button variant="danger" className="float-end" onClick={() => handleClick(card.id)} >Add to basket</Button>
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
                {props.products.map(cardBuilder)}
            </Row>
                
            
        </Container>
    )
}

export default Products;