import './App.scss';
import React,{useEffect,useState} from 'react'
import MyNavbar from './components/MyNavbar';
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import { Container } from 'react-bootstrap';

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
      },
      (error) => {
        setIsLoaded(true);
        setError(error);
      }
    )
}, []);



  return (
  <Container fluid>
    <MyNavbar categorias={categoria}/>
     <Routes>
     <Route exact path='/' element={<Home />} />
     </Routes>
     </Container>
    
  );
}

export default App;
