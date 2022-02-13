import './App.scss';
import React,{useEffect,useState} from 'react'
import MyNavbar from './components/MyNavBar/MyNavbar';
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import { Container } from 'react-bootstrap';
import Categorias from './components/Categorias/Categorias';
import Login from './components/Login/Login';

function App() {


//cargo mis categorias activas. 
const BASEURL = "http://localhost:3001/categorias";
const [error, setError] = useState(null);
const [isLoaded, setIsLoaded] = useState(false);
const [categoria, setCategoria] = useState(null);


useEffect(() => {
  fetch(BASEURL)
    .then(res => res.json())
    .then(
      (response) => {
        setIsLoaded(true);
        setCategoria(response);
        // console.log(response)
      },
      (error) => {
        setIsLoaded(true);
        setError(error);
      }
    )
}, []);



  return (
  <Container fluid="md">
    <MyNavbar categorias={categoria}/>
     <Routes>
     <Route exact path='/' element={<Home />} />
     <Route exact path='/login' element={<Login />} />

     {categoria?.map((item,index)=>{
       var nombre=item.nombre.replace(' ','_')
       return(
        <Route exact path={'/'+nombre} element={<Categorias tipo={nombre} />} key={index} />
       
            )
          })}

     <Route exact path='/categorias' element={<Categorias />} />
     </Routes>
     </Container>
    
  );
}

export default App;
