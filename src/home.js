import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from "react-bootstrap/Carousel";
import gsLogo from './goldenShoeLogo.jpg';
import sale from './sale.jpg'
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import featuredShoes from "./featuredShoes.jpg";

function Home(){
    return (
        <Container className="homePage">
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100 h-100"
                    src={gsLogo}
                    alt="Golden Shoe Logo"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 h-100"
                    src={sale}
                    alt="Sale now on"
                    />

                    
                </Carousel.Item>
            </Carousel>
            <Card className="text-center featureShoe" bg="success" text="light">
                <Card.Header>Featured Shoe of the Month</Card.Header>
                <Card.Body>
                    <Card.Title>Saddle Loafers</Card.Title>
                    <Card.Img variant="top" src={featuredShoes} />
                    <Card.Text>
                    The track sole makes the shoe look casual and versatile. It goes perfect with a suit or a pretty summer dress.
                    </Card.Text>
                    <Button variant="secondary">Look at me!</Button>
                </Card.Body>
                <Card.Footer text="light">July</Card.Footer>
            </Card>
        </Container>
    )
};

export default Home;