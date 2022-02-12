import React from 'react'
import { Navbar,Container,Nav } from 'react-bootstrap';
import "./MyNavbar.scss"

const MyNavbar = (props) => {


  return (
  <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
        {props.categorias?.map((item,index)=>{
       return(
              <Nav.Link href={'/'+item.nombre} key={index}>{item.nombre}</Nav.Link>
            )
          })}
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default MyNavbar