import React, {useContext} from 'react'
import { Navbar,Container,Nav} from 'react-bootstrap';
import { Person,PersonCheck, Basket } from 'react-bootstrap-icons';
import { CartContext } from '../../context/CartContext';
import { Link } from "react-router-dom";
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





  return (
  <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home"><img src='logo_transparent_horizontal2.png' alt='logo'></img></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
      <Link to="/" className="nav-link">Home</Link>
        {props.categorias?.map((item,index)=>{
          var nombre=item.nombre.replace(' ','_')
       return(
            <Link to={'/'+nombre} className="nav-link" key={index}>{item.nombre}</Link>
            )
          })}
      </Nav>
      {tokenconv<=today && tokenconv!=null && year>=100 ? <Link to="/profile"><PersonCheck size={30}/></Link> : <Link to="/login"><Person size={30}/></Link>}
      <Link to="/carrito"><Basket size={30}/></Link>
      
    </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default MyNavbar