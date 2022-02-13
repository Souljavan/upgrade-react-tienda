import React,{useState,useEffect} from 'react'
import { Row,Col,Card, Button } from 'react-bootstrap';

const Categorias = (props) => {

  const BASEURL = "http://localhost:3001/productos/categoria/";
  const [productos, setproductos] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  
    useEffect(() => {
      fetch(BASEURL + props.tipo)
        .then(res => res.json())
        .then(
          (response) => {
            setproductos(response);
            // console.log(response)
            setIsLoaded(true)
          },
          (error) => {
            console.log(error)
          }
        )
    },[isLoaded]);

  console.log(props)

  return (
      <>
      <Row className='mt-2 mb-2'><Col> <h2>{props.tipo}</h2></Col></Row>
    <Row>
       

    {productos?.map((item,index)=>{
       return(
        <Col key={index}>
          <Card>
            <Card.Img variant="top" src={item.imagen} />
          <Card.Body>
            <Card.Title>{item.nombre}</Card.Title>
              <Card.Text>
                {item.precio}
              </Card.Text>
            <Button variant="primary">Ver Producto</Button>
          </Card.Body>
        </Card>
    </Col>
            )
          })}


  </Row>
  </>
  )
}

export default Categorias