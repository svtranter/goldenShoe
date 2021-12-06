import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

function About() {
    return (
        <Container>
            <br/>
            <Card>
                <Card.Body>
                    <Card.Title>About Golden Shoe</Card.Title>
                    <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum.</Card.Text>
                </Card.Body>
            </Card>
            <br/>
            <CardGroup>
                <Card>
                    
                    <Card.Body>
                    <Card.Title>Meet our team!</Card.Title>
                    <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum.
                    </Card.Text>
                    </Card.Body>
                    
                </Card>
                <Card>
                    
                    <Card.Body>
                    <Card.Title>See our products!</Card.Title>
                    <Card.Text>
                        Check out the season's latest shoes!{' '}
                    </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>Cras justo odio</ListGroupItem>
                        <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                        <ListGroupItem>Vestibulum at eros</ListGroupItem>
                    </ListGroup>
                    <Card.Body>
                        <Card.Link href="#">Men</Card.Link>
                        <Card.Link href="#">Women</Card.Link>
                    </Card.Body>
                    
                </Card>
                <Card>
                    
                    <Card.Body>
                    <Card.Title>Get help?</Card.Title>
                    <Card.Text>
                        Having a issue? See if you can find the answer to your question on our FAQ page.
                    </Card.Text>
                    <Button variant="danger">FAQ's</Button>
                    </Card.Body>
                    
                </Card>
            </CardGroup>
        </Container>
    )
}

export default About;