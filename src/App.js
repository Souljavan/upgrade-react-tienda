import './App.scss';
import React,{useEffect,useState,useContext} from 'react'
import MyNavbar from './components/MyNavBar/MyNavbar';
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import { Container } from 'react-bootstrap';
import Categorias from './components/Categorias/Categorias';
import DetalleProducto from './components/DetalleProducto/DetalleProducto';
import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';
import NewUser from './components/NewUser/NewUser';
// Context
import { CartProvider } from './context/CartContext';
import Carrito from './components/Carrito/Carrito';


function App() {


//cargo mis categorias activas. 
const BASEURL = "http://localhost:3001/categorias";
const [categoria, setCategoria] = useState(null);


useEffect(() => {
  fetch(BASEURL)
    .then(res => res.json())
    .then(
      (response) => {
        setCategoria(response);
        //console.log(response)
      },
      (error) => {
       console.log(error)
      }
    )
}, [BASEURL]);



  return (
  <Container fluid="md">
  <CartProvider>
    <MyNavbar categorias={categoria}/>
    
     <Routes>
     <Route exact path='/' element={<Home />} />
     <Route exact path='/login' element={<Login />} />
     <Route exact path='/newuser' element={<NewUser />} />
     <Route exact path='/detalle_producto/:id' element={<DetalleProducto />} />
     <Route exact path='/profile' element={<Profile />} />
     <Route exact path='/carrito' element={<Carrito />} />

     {categoria?.map((item,index)=>{
       var nombre=item.nombre.replace(' ','_')
       return(
        <Route exact path={'/'+nombre} element={<Categorias tipo={nombre} />} key={index} />
       
            )
          })}

     <Route exact path='/categorias' element={<Categorias />} />
     
     </Routes>
     </CartProvider>
     </Container>
    
  );
}

export default App;
