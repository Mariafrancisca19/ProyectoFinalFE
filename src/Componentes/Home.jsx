import Formulario from './Formulario';
import MenuNav from './MenuNav';
import { mostrarAlerta } from '../JS/Alerta';
import { eliminarProductos, obtenerProductos } from './MetodosProductos';
import { useEffect, useState } from 'react';
import Carousel1 from './Carousel1';
import ContenedorCard from './ContenedorCard';
import Info from './Info';

const Home  = () => {
  const [data, setData] = useState([])

  async function productos() {
    const data = await obtenerProductos()
    console.log(data)
    setData(data)
  }

    useEffect(()=>{
      productos()
    },[])
    async function eliminar(id) {
      await eliminarProductos(id)
    }

  return (
    <>
    <MenuNav/>
    
    <Carousel1/>
    <ContenedorCard btnEliminar={eliminar} getPulceras={data}/>
    <Info/>
</>
  );
}

export default Home


