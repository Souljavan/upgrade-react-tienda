import React,{useEffect,useState} from 'react'
import Carrousel from '../Carrousel/Carrousel'
import "./Home.scss"
import { Row, Col } from 'react-bootstrap';

const Home = () => {


  return (
    <>
    <Carrousel  titulo="Productos en Oferta" categoria="ofertas" />
    <Carrousel  titulo="Productos Mas vendidos" categoria="masvendido" />
    </>

    

  )
}

export default Home