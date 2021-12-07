import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Table from "react-bootstrap/Table";


function ShoppingCart(props) {
    /* Want to make this pop in from the right when Shopping Cart button is clicked */
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    /* Take the cart and make rows for the table */
    const buildRows = () => {
      return props.cart.map((current, v) => (
        <tr key={v}>
          <td>
            {current.name}
          </td>
          <td>
            {current.price}
          </td>
          <td>
            {current.quantity}
          </td>
          <td>
            {/* This button removes the item from cart but does not update the pop-in shopping cart yet */}
            <Button variant="success" onClick={() => props.removeFromCart(current.id)}>Remove</Button>
          </td>
        </tr>
      ))
    }

    //calculate the total in the cart
    const calculateTotal = () => {
      let cost = 0;
      props.cart.forEach(product => {
        cost += (product.price * product.quantity);
      });
      return cost;
    }

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
                <h3>Total cost: £{calculateTotal()}</h3>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Item</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Remove Item</th>
                    </tr>
                  </thead>
                  <tbody>
                    {buildRows()}
                  </tbody>
                </Table>
                {/* Only want checkout button to show if something is in the cart */}
                {props.cart.length > 0 &&
                  <Button variant="success">Checkout</Button>
                }
              </>
            
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }
  
  export default ShoppingCart;
