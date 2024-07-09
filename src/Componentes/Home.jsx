import Formulario from './Formulario';
import MenuNav from './MenuNav';
import { mostrarAlerta } from '../JS/Alerta';
import { eliminarProductos, obtenerProductos } from './MetodosProductos';
import { useEffect, useState } from 'react';
import Carousel1 from './Carousel1';
import ContenedorCard from './ContenedorCard';
import Info from './Info';
import InfoPagina from './InfoPagina';
import FormularioEditar from './FormularioEditar';

const Home  = () => {
  const [data, setData] = useState([])
  const [id,setID]=useState()
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
      productos()
    }
    // funcion para editar los productos "id del put"
    async function editar(id) {  
      setID(id)
      console.log(id);
    }

  return (
    <>
    <MenuNav/>
    
    <Carousel1/>
    <ContenedorCard btnEditar={editar}  btnEliminar={eliminar} getPulceras={data}/>
    {id && 
    <FormularioEditar id={id}/>
    }
    <Info/>
    <InfoPagina/>
</>
  );
}

export default Home


