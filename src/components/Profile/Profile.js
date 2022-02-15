import React,{useEffect,useState} from 'react'
import {useNavigate } from "react-router-dom";
import "./Profile.scss"
import { Row,Col, ListGroup,Button} from 'react-bootstrap';

const Profile = () => {

var tokenid=localStorage.getItem('tokenid');
const navigate = useNavigate();

//cargo mis categorias activas. 
const BASEURL = "http://localhost:3001/usuarios/user-profile/"+tokenid;
console.log(BASEURL)
const [usaurio, setUsuarios] = useState(null);



useEffect(() => {
  fetch(BASEURL)
    .then(res => res.json())
    .then(
      (response) => {
        setUsuarios(response);
        console.log(response.data)
      },
      (error) => {
        console.log(error)
      }
    )
},[BASEURL]);

console.log(usaurio)

const borratodo = () =>{
localStorage.clear();
navigate("/login");

}

  return (
      <>
    <Row className="text-center mt-4">
    <Col><h2> Detalle de Usaurio</h2></Col>
    </Row>
    <Row className="text-center">
        <Col>
        <ListGroup variant="flush" className='mt-4'>
  <ListGroup.Item><b>UserName:</b> {usaurio?.data.name}</ListGroup.Item>
  <ListGroup.Item><b>Email:</b> {usaurio?.data.email}</ListGroup.Item>
</ListGroup>
 <Button variant="primary" className="mt-4" onClick={borratodo}>Logout</Button>
        </Col>
    </Row>
    </>
    
  )
}

export default Profile