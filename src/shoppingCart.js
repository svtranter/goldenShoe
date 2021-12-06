import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Table from "react-bootstrap/Table";


function ShoppingCart(props) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

           
    

    return (
      <>
        <Button variant="success" onClick={handleShow}>
          Shopping Cart
        </Button>
  
        <Offcanvas show={show} onHide={handleClose} placement='end'>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
                      
              <>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Item</th>
                      <th>Price</th>
                      <th>Quantity</th>
                    </tr>
                  </thead>
                  <tbody>
                    
                  </tbody>
                </Table>
                
                <Button variant="success">Checkout</Button>
              </>
            
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }
  
  export default ShoppingCart;
