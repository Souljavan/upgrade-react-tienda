import React, {useState} from 'react'
import { Navbar,Container,Nav, Button} from 'react-bootstrap';
import { Person,PersonCheck } from 'react-bootstrap-icons';
import "./MyNavbar.scss"

const MyNavbar = (props) => {

//Compruebo si esta logueado o no.
var tokendate=localStorage.getItem('tokendate');
var tokenconv=new Date(tokendate)
var today = new Date();
today.setHours(today.getHours() + 4);
const [Login, SetLogin] = useState(false);

debugger
if ((tokendate!=null)&&(tokenconv<=today)){
  console.log(Login)
  console.log("aqui estoy")
  SetLogin(true)
}



  return (
  <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home"><img src='logo_transparent_horizontal2.png' alt='logo'></img></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
        {props.categorias?.map((item,index)=>{
          var nombre=item.nombre.replace(' ','_')
       return(
              <Nav.Link href={'/'+nombre} key={index}>{item.nombre}</Nav.Link>
            )
          })}
      </Nav>
      {Login? <a href="/login"><PersonCheck size={30}/></a> : <a href="/login"><Person size={30}/></a>}
      {/* <a href="/login"><Person size={30}/></a> */}
      
    </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default MyNavbar