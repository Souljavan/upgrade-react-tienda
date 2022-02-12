import React from 'react'
import { Row,Col,Card, Button } from 'react-bootstrap';

const Carrousel = () => {
  return (
      <>
      <Row><Col> <h2>Productos Mas vendidos</h2></Col></Row>
    <Row>
       
    <Col>
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
    </Col>
    <Col>2 of 3</Col>
    <Col>3 of 3</Col>
  </Row>
  </>
  )
}

export default Carrousel