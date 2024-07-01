import React from 'react'
import Formulario from './Formulario';
import MenuNav from './MenuNav';
import { mostrarAlerta } from '../JS/Alerta';
const Home  = ({}) => {
  return (
    <>
    <MenuNav/>
    <Formulario/>
    <button onClick={()=>mostrarAlerta("success","LO QUE USTED QUIERA")}>MUESTRA ALERTA</button>
</>
  );
}

export default Home
