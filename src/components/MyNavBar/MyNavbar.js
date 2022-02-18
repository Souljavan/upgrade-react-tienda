import React, {useState,useContext} from 'react'
import { Navbar,Container,Nav} from 'react-bootstrap';
import { Person,PersonCheck } from 'react-bootstrap-icons';
import { CartContext } from '../../context/CartContext';
import "./MyNavbar.scss"

const MyNavbar = (props) => {

//Compruebo si esta logueado o no.
var tokendate=localStorage.getItem('tokendate');
var tokenconv=new Date(tokendate)
var year = tokenconv.getYear(); // returns 100
var today = new Date();
today.setHours(today.getHours() + 4);

// console.log(tokenconv)
// console.log(today)
// console.log(year)

const { items, setItems } = useContext(CartContext);
console.log(items)




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
      {tokenconv<=today && tokenconv!=null && year>=100 ? <a href="/profile"><PersonCheck size={30}/></a> : <a href="/login"><Person size={30}/></a>}
      
    </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default MyNavbar