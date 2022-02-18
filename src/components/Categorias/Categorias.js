import React,{useState,useEffect,useContext} from 'react'
import { Link } from "react-router-dom";
import { Row,Col,Card, Button } from 'react-bootstrap';
import { CartContext } from '../../context/CartContext';

const Categorias = (props) => {
  //console.log("estoy en categorias")

  const BASEURL = "http://localhost:3001/productos/categoria/";
  const [productos, setproductos] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const { items, setItems } = useContext(CartContext);
  
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
              <Link to={"/detalle_producto/"+item._id}><Button variant="primary">Ver Producto</Button></Link>
              <Button variant="success" onClick={() => setItems([...items, item.nombre])}>Añadir al carrito</Button>
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