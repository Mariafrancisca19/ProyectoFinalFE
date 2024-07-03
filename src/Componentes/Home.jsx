import Formulario from './Formulario';
import MenuNav from './MenuNav';
import { mostrarAlerta } from '../JS/Alerta';
import { obtenerProductos } from './MetodosProductos';
import { useEffect, useState } from 'react';
import Carousel1 from './Carousel1';
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
    hola
    {data.map((dato)=>dato.nombre)}
    <Carousel1/>
</>
  );
}

export default Home


