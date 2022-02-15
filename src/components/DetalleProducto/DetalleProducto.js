import React,{useState,useEffect,Image} from 'react'
import { useParams }from 'react-router-dom'
import { Row,Col, ListGroup,Button} from 'react-bootstrap';

import "./DetalleProducto.scss"

const DetalleProducto = () => {

  let {id} = useParams();
  console.log(id);

//cargo mis categorias activas. 
const BASEURL = "http://localhost:3001/productos/"+id;
console.log(BASEURL)
const [producto, setProducto] = useState(null);



useEffect(() => {
  fetch(BASEURL)
    .then(res => res.json())
    .then(
      (response) => {
        setProducto(response);
        console.log(response.data)
      },
      (error) => {
        console.log(error)
      }
    )
},[BASEURL]);


  
  return (
    <Row className='text-center mt-4' >
    <Row >
      <Col>
        <h2>{producto?.nombre}</h2>
      </Col>
    </Row>
    <Row>
      <Col>
        <img src={"/"+producto?.imagen} />
      </Col>
    </Row>

    <Row>
      <Col>
        <h3> {producto?.precio} €</h3>
      </Col>
    </Row> 
    <Row>
      <Col>
        {producto?.descripcion} €
      </Col>
    </Row> 
    </Row>
    
  )
}

export default DetalleProducto