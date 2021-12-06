import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Table from "react-bootstrap/Table";


function ShoppingCart(props) {
    const [show, setShow] = useState(false);
    const [items, setItems] = useState([]);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    const handleClick = (item) => {
      props.remove(item);
    }

    useEffect(() => {
      setItems(props.items)
     }, [props.items]); 

    const buildRows = () => {
      return items.map((item)=>{
          return(
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>{item.quantity}</td>
            <td><Button onClick={() => handleClick(item.id)}>Remove</Button></td>
          </tr>
          )
      })
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
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Item</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {buildRows()}
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
