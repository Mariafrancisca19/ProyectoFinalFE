import React, {useState} from 'react'
import Formulario from './Formulario';
import MenuNav from './MenuNav';
import { mostrarAlerta } from '../JS/Alerta';
import { obtenerProductos } from './MetodosProductos';
import { useState } from 'react';
const Home  = ({}) => {
  const [data, setData] = useState()
  async function productos() {
    const data = await obtenerProductos()
    console.log(data)
    setData(data)
  }


  return (
    <>
    <MenuNav/>
    
    <button onClick={()=>mostrarAlerta("success","LO QUE USTED QUIERA")}>MUESTRA ALERTA</button>
    
    <button onClick={()=> productos()}> funcion validar</button>




</>
  );
}

export default Home


