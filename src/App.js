import './App.scss';
import React,{useEffect,useState} from 'react'
import MyNavbar from './components/MyNavbar';

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
    <div className="page-content">
    <div className="container">
    <MyNavbar categorias={categoria}/>
     Hola Mundo
    
    </div>
    </div>
  );
}

export default App;
