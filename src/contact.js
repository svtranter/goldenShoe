import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CardGroup from "react-bootstrap/CardGroup";
import * as Icon from "react-bootstrap-icons";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

function Contact() {
    return (
        <Container>
           <br/>
            <Card>
                <Card.Body>
                    <Card.Title>Got an issue?</Card.Title>
                    <Card.Text>Please see our FAQ page for answers to commonly asked questions. Your solution may be a couple
                        of clicks away!
                    </Card.Text>
                    <Button variant="danger">FAQ's</Button>
                </Card.Body>
            </Card>
            <br/> 
            <Card border="light">
                <Card.Body>Still need to contact us?</Card.Body>
            </Card>
            <br/>
            <CardGroup>
                <Card>
                    <Card.Body>
                    <Icon.Telephone  className="contactUsIcons"/>
                    <br/>
                    <Card.Title>Customer Services</Card.Title>
                    <Card.Text>
                        Customer services are contactable on the following helpline between 9am-5pm Monday-Friday.
                        <br/>
                        07123-436789
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Card.Link href="#">Learn more...</Card.Link>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Body>
                    <Icon.PencilSquare className="contactUsIcons"/>
                    <Card.Title>Returns</Card.Title>
                    <Card.Text>
                        Please fill out our returns form to easily return your item.{' '}
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <Card.Link href="#">Returns form</Card.Link>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Body>
                    <Icon.Newspaper className="contactUsIcons"/>
                    <Card.Title>Social Media</Card.Title>
                    <Card.Text>
                        Keep up to date with our social media!
                    </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem><Icon.Facebook className="socialLogos"/>{' '}<Card.Link href="#">Facebook</Card.Link></ListGroupItem>
                        <ListGroupItem><Icon.Twitter className="socialLogos"/>{' '}<Card.Link href="#">Twitter</Card.Link></ListGroupItem>
                        
                    </ListGroup>
                    <Card.Footer>
                    <Card.Link href="#">Latest news...</Card.Link>
                    </Card.Footer>
                </Card>
            </CardGroup>
        </Container>
    )
}

export default Contact;