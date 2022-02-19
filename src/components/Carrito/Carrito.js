import React, {useContext} from 'react'
import { CartContext } from '../../context/CartContext';
import { Row,Col,ListGroup } from 'react-bootstrap';

const Carrito = () => {

    const { items, setItems } = useContext(CartContext);

  return (
      <>
      <Row className='mt-5'><Col><h2> Carrito </h2></Col></Row>
    <Row className='mt-3'>
        <Col>
        <ListGroup>
        {items?.map((item,index)=>{
       return(
        <ListGroup.Item key={index}> {item} </ListGroup.Item>
            )
          })}

        </ListGroup>

        </Col>
    </Row>
    </>
  )
}

export default Carrito