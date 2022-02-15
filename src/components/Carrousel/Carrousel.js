import React,{useEffect,useState} from 'react'
import { Link } from "react-router-dom";
import { Row,Col,Card, Button } from 'react-bootstrap';
import "./Carrousel.scss"

const Carrousel = (props) => {

const BASEURL = "http://localhost:3001/productos/";
const [productos, setproductos] = useState(null);
const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch(BASEURL + props.categoria)
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
  
  return (
      <>
      <Row className='mt-2 mb-2'><Col> <h2>{props.titulo}</h2></Col></Row>
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
              <Link to={"/detalle_producto/"+item._id}> <Button variant="primary">Ver Producto</Button></Link>
          </Card.Body>
        </Card>
    </Col>
            )
          })}


  </Row>
  </>
  )
}

export default Carrousel