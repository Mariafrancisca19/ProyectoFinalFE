import Formulario from './Formulario';
import MenuNav from './MenuNav';
import { mostrarAlerta } from '../JS/Alerta';
import { obtenerProductos } from './MetodosProductos';
import { useEffect, useState } from 'react';

const Home  = ({}) => {
  const [data, setData] = useState([])


  async function productos() {
    const data = await obtenerProductos()
    console.log(data)
    setData(data)
  }

    useEffect(()=>{
      productos()
    },[])


  return (
    <>
    <MenuNav/>
    
    {/* <button onClick={()=>mostrarAlerta("success","LO QUE USTED QUIERA")}>MUESTRA ALERTA</button>
    <button onClick={()=> productos()}> funcion validar</button> */}

    {data.map((dato)=>dato.nombre)}
    

</>
  );
}

export default Home


