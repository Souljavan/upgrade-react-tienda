import React from 'react'
import { Navbar,Container,Nav, Button} from 'react-bootstrap';
import { Person } from 'react-bootstrap-icons';
import "./MyNavbar.scss"

const MyNavbar = (props) => {


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
      <a href="/login"><Person size={30}/></a>
      
    </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default MyNavbar